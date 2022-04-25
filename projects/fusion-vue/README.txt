Consumers will have to add the following to vue.config.js file


const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias:{
                '@ironsource/fusion-vue/components/common': path.resolve(__dirname, './node_modules/@ironsource/fusion-vue/fesm2015/ironsource-fusion-vue-components-common.mjs')
            }
        }
    }
}
