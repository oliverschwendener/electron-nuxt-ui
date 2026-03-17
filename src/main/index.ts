import { BrowserWindow, app, ipcMain } from "electron";
import { join } from "path";

(async () => {
    await app.whenReady();

    const browserWindow = new BrowserWindow({
        webPreferences: {
            preload: join(__dirname, "..", "dist-preload", "index.js"),
            spellcheck: false,
        },
    });

    if (process.env.VITE_DEV_SERVER_URL) {
        await browserWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
    } else {
        await browserWindow.loadFile(join(__dirname, "..", "dist-renderer", "index.html"));
    }

    ipcMain.on("ping", () => {
        console.log("pong");
    });
})();
