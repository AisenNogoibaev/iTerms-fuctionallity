const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#8770FF",
              "@border-radius-sm": "8px",
              "@border-radius-base": "8px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
