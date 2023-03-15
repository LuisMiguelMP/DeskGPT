const { app, Menu, BrowserWindow } = require("electron");

if (require('electron-squirrel-startup')) {
  app.quit();
}

const startApp = () => {
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);
  mainWindow.loadFile("./index.html");
  const menu = require("./src/menu");
  const template = menu.createTemplate(app.name);
  const builtMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(builtMenu);

};

app.on('ready', () => {
   startApp();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    startApp();
  }
});