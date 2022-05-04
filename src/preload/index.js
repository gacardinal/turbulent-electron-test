const { contextBridge, ipcRenderer } = require('electron');
const { IpcEvents } = require('../main/ipcEvents');

contextBridge.exposeInMainWorld('appContext', {
  sendPing: () => ipcRenderer.send('ping'),
  onPingReceive: (callback) => ipcRenderer.on('ping-reply', (event, arg) => callback(arg)),

  saveNote: content => ipcRenderer.invoke(IpcEvents.CreateNote, content)
});
