const { app, BrowserWindow, ipcMain, net, shell, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#050810',
    title: 'MeChi +',
    icon: path.join(__dirname, '..', 'assets', 'icon-only.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  // Dış bağlantılar varsayılan tarayıcıda açılır
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

// Ücretsiz görsel servisi tarayıcı kökenli isteklerde captcha istiyor; istek ana süreçten gönderilir.
ipcMain.handle('http-get-image', async (_e, { url, headers }) => {
  try {
    const res = await net.fetch(url, { headers: headers || {} });
    if (!res.ok) return { status: res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    return { status: res.status, data: buf.toString('base64') };
  } catch (err) {
    return { status: 0, error: String(err) };
  }
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
