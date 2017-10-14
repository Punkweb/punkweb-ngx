const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

if (serve) {
  require('electron-reload')(__dirname, {
    electron: require('${__dirname}/../../node_modules/electron')
  })
}

function createWindow() {
  let windowConfig = {
    autoHideMenuBar: true,
    height: (9 * 100),
    width: (16 * 100),
  };
  win = new BrowserWindow(windowConfig);
  win.loadURL('file://' + __dirname + '/index.html');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('windows-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
