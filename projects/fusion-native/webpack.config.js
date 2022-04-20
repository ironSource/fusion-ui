const uuidv1 = require('uuid').v1;
const fs = require('fs');

const path = 'projects/fusion-native/src/components';
const components = fs.readdirSync(path);
const entries = components.reduce((acc, curr) => {
  acc[curr] = `${path}/${curr}/compile.ts`;
  return acc;
}, {})


module.exports = {
  entry: entries,
  output: {
    chunkLoadingGlobal: 'myElements-' + uuidv1(),
    library: 'fusion_native_lib',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  }
}
