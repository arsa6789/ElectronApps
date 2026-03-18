module.exports = {
  packagerConfig: {
    // your packager config
  },
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'arsa6789',
          name: 'your-repo-name'
        },
        prerelease: false,
        draft: false
      }
    }
  ]
};