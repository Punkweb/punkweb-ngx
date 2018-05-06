const { app, BrowserWindow, ipcMain, Tray, Menu, dialog } = require('electron');
const url = require('url');
const storage = require('electron-json-storage');

const ARGS = process.argv.slice(1);
const DEBUG = ARGS.some(val => val === '--debug');
const DEV_URL = 'http://localhost:4200';
const PROD_URL = 'https://www.google.com';
const APP_ICON = `${__dirname}/img/app-48x48.png`;
const TRAY_ICON = `${__dirname}/img/app-24x24.png`

let win, settings;

let defaultSettings = {
  showCloseMessage: true,
};

let settingsFilePromise = new Promise((resolve, reject) => {
  try {
    storage.get('settings', (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  } catch (exception) {
    reject(exception);
  }
}).then((userSettings) => {
  settings = Object.assign({}, defaultSettings, userSettings);
});

function updateSetting(key, value, callback = (err, data) => {}) {
  settings[key] = value;
  storage.set('settings', settings, callback);
}

function closeDialog(callback) {
  const closeDialogConfig = {
    title: 'Are you sure you want to close the app?',
    message: `You have unsaved data that would be lost from closing the application, are you sure you want to continue?`,
    checkboxLabel: `Don't show me this again`,
    buttons: ['Cancel', 'Ok'],
    icon: APP_ICON,
  };
  dialog.showMessageBox(closeDialogConfig, callback);
}

function createWindow() {
  const winConfig = {
    autoHideMenuBar: true,
    useContentSize: true,
    icon: APP_ICON,
    height: 9 * 90,
    width: 16 * 90,
  };
  win = new BrowserWindow(winConfig);

  if (DEBUG) {
    win.loadURL(DEV_URL);
  } else {
    win.loadURL(PROD_URL);
  }

  win.on('close', (event) => {
    if (settings.showCloseMessage) {
      event.preventDefault();
      let close = new Promise((resolve, reject) => {
        try {
          closeDialog((res, check) => {
            if (check) {
              updateSetting('showCloseMessage', false, {
                if (err) {
                  console.error(err);
                }
              });
            }
            if (res === 1) {
              resolve(true);
            } else {
              resolve(false);
            }
          });
        } catch (exception) {
          reject(exception);
        }
      }).then((kill) => {
        if (kill) {
          win.destroy();
          win = null;
        }
      });
    }
  });
}

ipcMain.on('ping', (event, arg) => {
  console.log(arg);
  event.sender.send('pong', 'pong');
});

app.on('ready', () => {
  const trayMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: (event) => {
        win.show();
      }
    },
    {
      label: 'Quit',
      click: (event) => {
        win.close();
      }
    },
  ]);
  tray = new Tray(TRAY_ICON);
  tray.setToolTip('punkweb-ngx');
  tray.setContextMenu(trayMenu);
  createWindow();
});

app.on('windows-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!win) {
    createWindow();
  }
});
