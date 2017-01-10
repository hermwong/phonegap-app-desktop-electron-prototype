'use strict';

const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
let mainWindow;
let debugMode;

function createWindow () {
    // Create the browser window.
    if (process.platform != 'win32') {
        mainWindow = new BrowserWindow({width: 450, height: 622, resizable: false, title: 'PhoneGap', center: true});
    } else {
        mainWindow = new BrowserWindow({width: 463, height: 656, resizable: false, title: 'PhoneGap', center: true});
    }

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    var fs = require('fs');
    var pathToPackageJSONFile = __dirname + "/package.json";
    fs.readFile(pathToPackageJSONFile, 'utf8', function(err, data) {
        if (err) {
            mainWindow.webContents.executeJavaScript('console.log("not found");');
        } else {
            mainWindow.webContents.executeJavaScript('console.log("found");');
            var obj = JSON.parse(data);
            debugMode = obj.window.devTools;

            if (debugMode) {
                // Open the devtools.
                mainWindow.webContents.openDevTools();
            }
        }
    });

    mainWindow.webContents.on('did-finish-load', function() {
        // make sure the debug window is set properly
        mainWindow.webContents.executeJavaScript('console.log("debugMode: '+ debugMode +' ");');
        mainWindow.webContents.executeJavaScript('setDebugFlag('+ debugMode +');');
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
        app.quit();
    })
}

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
    app.quit();
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
})
