const { app, BrowserWindow, ipcMain, Tray, Menu, dialog } = require('electron');
const url = require('url');

let win;
const args = process.argv.slice(1);
let serve = args.some(val => val === '--serve');
let showCloseMessage = true;

if (serve) {
  require('electron-reload')(__dirname, {
    electron: require('${__dirname}/../../node_modules/electron')
  })
}

ipcMain.on('ping', (event, arg) => {
  event.sender.send('pong');
});

function createWindow() {
  let windowConfig = {
    autoHideMenuBar: true,
    useContentSize: true,
    height: 9 * 80,
    maxHeight: 9 * 80,
    minHeight: 9 * 80,
    width: 16 * 80,
    maxWidth: 16 * 80,
    minWidth: 16 * 80,
    resizable: false,
    fullscreenable: false,
  };
  win = new BrowserWindow(windowConfig);
  win.loadURL('http://localhost:4200');

  win.on('close', (event) => {
    event.preventDefault();
    win.hide();
    appCloseDialog();
  });

  win.on('closed', () => {
    win = null;
  });
}

function appCloseDialog() {
  if (showCloseMessage) {
    let closeMessage =
      `The app is running in the background.\nTo show the main window, right click the icon in the system tray.`
    let properties = {
      title: 'App still running',
      message: closeMessage,
      checkboxLabel: `Got it, don't show me this again`,
      // icon: 'path/to/icon', // TODO
    };
    callback = (res, check) => {
      if (check) {
        showCloseMessage = false;
        // TODO: Store a json setting so that this persists.
      }
    };
    dialog.showMessageBox(properties, callback);
  }
}

app.on('ready', () => {
  tray = new Tray('electronDist/callpop.png');
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: (event) => {
        win.show();
      }
    },
    {
      label: 'Quit',
      click: (event) => {
        win.destroy();
      }
    },
  ]);
  tray.setToolTip('Porks Ng4 Template');
  tray.setContextMenu(contextMenu);
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
