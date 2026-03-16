/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const baseConfig = {
    appId: "com.electron.nuxtui",
    productName: "Electron Nuxt UI",
    directories: {
        output: "release",
        buildResources: "build",
    },
    files: ["dist-main/index.js", "dist-preload/index.js", "dist-renderer/**/*"],
    extraMetadata: {
        version: process.env.VITE_APP_VERSION,
    },
};

/**
 * @type {Record<NodeJS.Platform, import('electron-builder').Configuration>}
 */
const platformSpecificConfigurations = {
    darwin: {
        ...baseConfig,
        afterPack: "./build/macos/codeSign.mjs",
        mac: {
            target: [{ target: "dmg" }, { target: "zip" }],
        },
    },
    win32: {
        ...baseConfig,
        win: {
            target: [{ target: "msi" }, { target: "nsis" }, { target: "zip" }, { target: "appx" }],
        },
    },
    linux: {
        ...baseConfig,
        linux: {
            target: [{ target: "AppImage" }, { target: "deb" }, { target: "zip" }],
        },
    },
};

module.exports = platformSpecificConfigurations[process.platform];
