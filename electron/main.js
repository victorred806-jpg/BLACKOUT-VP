const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 720, backgroundColor: '#0e1620', title: 'BLACKOUT',
    icon: path.join(__dirname, '..', 'assets', 'icon.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
  // F11 liga e desliga a tela cheia
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
  });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
