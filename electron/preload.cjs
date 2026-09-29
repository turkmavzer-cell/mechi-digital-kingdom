const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('mechiDesktop', {
  httpGetImage: (url, headers) => ipcRenderer.invoke('http-get-image', { url, headers }),
});
