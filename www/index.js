'use strict';

const {app} = require('electron');  // Module to control application life.
const {BrowserWindow} = require('electron');  // Module to create native browser window.

// Report crashes to our server.
const {crashReporter} = require('electron');


var testServer = 'https://serene-harbor-73595.herokuapp.com/';
var prodServer = 'https://desktop-crash-reporter.herokuapp.com/';

/**/
crashReporter.start({
    productName: 'PhoneGap-Desktop',
    companyName: 'Adobe',
    submitURL: testServer,
    uploadToServer: true
});
/**/

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
let mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the devtools.
  mainWindow.openDevTools();

  process.crash();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    app.quit();
  });
});
