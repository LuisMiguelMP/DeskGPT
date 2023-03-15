module.exports = {
  packagerConfig: {
    icon: './assets/icons/icon.icns'
  },  
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: './assets/icons/icon.ico',
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './assets/icons/icon.png'
        },
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: './assets/icons/icon.icns',
      },
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        icon: './assets/icons/icon.ico',
      },
    },
  ],
};
