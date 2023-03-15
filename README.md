# DeskGPT

> Uses [Electron 23](https://releases.electronjs.org/release/v23.0.0)

A simple ChatGPT Electron Webview.

Features:

- Responsive window
- Remember the window dimensions when reopening
- Menu & keyboard shortcuts for MacOs
- No title bar
- MacOS, Windows and Linux executable with an app icon
- DMG installer for Mac

This Electron webview application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render website. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `assets/` - Assets for the project (style, scripts, icons)
- `src/` - Sources folder:
  - `menu.js` : menu template customization
  - `window.js` : browser window customization

Note: check [the offical Electron quick start](https://www.electronjs.org/docs/tutorial/quick-start) if you need to learn the basics about Electron.

## Usage

To run this repository you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Install dependencies
$ npm install
# Run the app
$ npm start
```

## Configuration

You just need to change the `src` attribute of the `webview` in `index.html` file to display the url you want in your webview.

Alternatively, it's also possible to just load an external URL:

### Developer tools

You can show by default the developer tools by uncommenting in `main.js` file: `mainWindow.openDevTools();`.

### Title bar

You can hide the title bar of the app by setting `frame: false` or `titleBarStyle: 'hidden'` when creating the window in `main.js` in `mainWindow` variable.

If you keep displaying the topbar using `titleBarStyle: 'hidden'` setting, you would have to adjust the topbar style.

For example:

```css
#controls {
  padding-top: 1.5em;
}
```

### Window dimensions and responsive

This webview is responsive and supports live dimensions change of the window.
This webview remembers the window size you have before quitting the app to use it when you open it again.

If you want to change the window dimensions at the first start, change `width` and `height` in `main.js` file in `mainWindow` variable when creating the window.

### Menu and keyboard shortcuts

This webview integrates an Electron menu. It will also make standard keyboard shortcuts, like copy and paste, work on MacOS.

You can modify this menu in `src/menu.js` file.

## Application

To create a MacOS, Windows and Linux executable with an app icon, follow these instructions.

### Electron app icon

For this we need a 1024x1024 png-icon, a .icns for macs and a .ico for windows. For Linux we only need the pngs.

- Create your app icon

- Go to [iConvert Icons](https://iconverticons.com/online/) and upload the PNG and the service will take care of creating the other icon-formats.

- Add your files in `assets/icons`.

#### Mac

On Mac, the `.icns` icon converted with iConvert Icons doesn't work.

I recommend using [Image2icon](http://www.img2icnsapp.com), an awesome free app to create and personalize icons from your pictures, available on the Mac Store.

The `.icns` icon converted with Image2icon perfectly works on Mac.

#### Application name

Change the `productName` in `package.json`

#### Build MacOS, Windows and Linux package from the terminal

```bash
$ npm run make
```

It will create the outfiles into `./out/`

## References

- [Electron - app](https://www.electronjs.org/docs/api/app)
- [Electron - BrowserWindow](https://www.electronjs.org/docs/api/browser-window#class-browserwindow)
- [Electron - Menu](https://www.electronjs.org/docs/api/menu)
- [Electron - webview Tag](https://www.electronjs.org/docs/api/webview-tag)
- [Electron quick start](https://www.electronjs.org/docs/tutorial/quick-start)

## License

[MIT](LICENSE.md)
