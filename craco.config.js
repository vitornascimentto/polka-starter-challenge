const cracoPluginStyleResourcesLoader = require('craco-plugin-style-resources-loader');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: cracoPluginStyleResourcesLoader,
      options: {
        hoistUseStatements: true,
        patterns: [
          path.join(__dirname, './src/styles/variables/colors.scss'),
        ],
        styleType: 'scss',
      },
    },
  ],
  babel: { plugins: [['@babel/plugin-proposal-class-properties']] },
};
