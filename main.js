const { app, Menu } = require("electron");

app.whenReady().then(() => {
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);
  mainWindow.loadFile("index.html");
  const menu = require("./src/menu");
  const template = menu.createTemplate(app.name);
  const builtMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(builtMenu);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
