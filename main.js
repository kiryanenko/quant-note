// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const settings = require('electron-settings');
const i18n = require('./src/libs/i18n');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 1400, height: 800});

    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000');

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    setDefaultSettings();
    createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function setDefaultSettings() {
    if (!settings.has('locale')) {
        i18n.setLocaleFromEnvironmentVariable();
    } else {
        i18n.setLocale(settings.get('locale'));
    }

    if (!settings.has('editorTheme')) settings.set('editorTheme', 'base16-light', {prettify: true});
    if (!settings.has('sideNavWidth')) settings.set('sideNavWidth', 300, {prettify: true});
    if (!settings.has('noteListBarWidth')) settings.set('noteListBarWidth', 300, {prettify: true});
    if (!settings.has('codeEditorWidth')) settings.set('codeEditorWidth', 200, {prettify: true});
    if (!settings.has('Main.SideNav.navType')) settings.set('Main.SideNav.navType', 'folders', {prettify: true});
}
