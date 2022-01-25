const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require("../../../package.json").dependencies;

module.exports = {
  mode: 'production',
  output: {
    uniqueName: "fusion-lib",
    publicPath: "auto",
    chunkFilename: '[name].[contenthash].js',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        name: `fusionLib${process.env.VERSION}`,
        filename: "remoteEntry.js",
        library: { type: "var", name: `fusionLib${process.env.VERSION.replace(/[.-]/g,'_')}` },
        exposes: {
             './fusion-ui': {
                 import :'./projects/fusion-ui/src/public-api.ts',
                 name: `fusion-mfe-lib-${process.env.VERSION}`
                }
        },
        shared: [
            "@angular/core",
            "@angular/common",
            "@angular/common/http",
            "@angular/router",
            "@angular/forms"
        ]
    })
  ],
};
