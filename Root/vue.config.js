const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'root',
        filename: 'remoteEntry.js',
        remotes: {
          header: 'header@http://localhost:8082/remoteEntry.js',
        },
        shared: {
          vue: {
            singleton: true,
          },
          vuex: {
            singleton: true,
          },
          'vue-router': {
            singleton: true,
          },
          'core-js': {
            singleton: true,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
