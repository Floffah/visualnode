import {app, BrowserWindow, session} from 'electron'
import path from 'path';

require('electron-debug')();

app.on('ready', () => {
    session.defaultSession.loadExtension('./node_modules/react-devtools')
    let visualnode = new BrowserWindow({
        show: false,
        frame: false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
        }
    });
    visualnode.loadFile("./dist/index.html");

    visualnode.on('ready-to-show', visualnode.show);
});
