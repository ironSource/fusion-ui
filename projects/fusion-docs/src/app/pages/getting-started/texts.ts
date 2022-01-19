export const GETTING_STARTED_PAGE_TEXTS = {
    npm: 'npm install --save @ironsource/fusion-uifusion-ui',
    // eslint-disable-next-line max-len
    npmRegistry: '',
    npmRegistrySetConfig: '',
    style: '<link rel="stylesheet" href="https://ssastatic.s3-eu-west-1.amazonaws.com/fusion/native/v1/fusion.theme.css">',
    importModule: 'import {AlertModule} from "@ironsource/fusion-uifusion-ui"',
    fusionAlert: `<fusion-alert>
    <span>This alert needs your attention, but it’s not super important</span>
  </fusion-alert>`,
    native: `<link rel="stylesheet" href="node_modules/@ironsource/fusion-uifusion-ui/native/core/fusion.theme.css">
<script src="node_modules/@ironsource/fusion-uifusion-ui/native/core/polyfills-es2015.js" type="module"></script>
<script src="node_modules/@ironsource/fusion-uifusion-ui/native/core/polyfills-es5.js" nomodule></script>
<script src="node_modules/@ironsource/fusion-uifusion-ui/native/core/polyfill-webcomp-es5.js" nomodule></script>
<script src="node_modules/@ironsource/fusion-uifusion-ui/native/core/polyfill-webcomp-es2015.js"></script>
<script src="node_modules/@ironsource/fusion-uifusion-ui/native/core/main-es2015.js" type="module"></script>
<script src="node_modules/@ironsource/fusion-uifusion-ui/native/core/main-es5.js" nomodule></script>`,
    scss: 'node_modules/@ironsource/fusion-uifusion-ui/fusion.theme.css',
    npmReact: 'npm install --save @ironsource/fusion-uifusion-uifusion-native',
    npmVue: 'npm install --save @ironsource/fusion-uifusion-uifusion-native',
    mainReact: 'import "@ironsource/fusion-uifusion-ui/native/react";',
    mainVue: 'import "@ironsource/fusion-uifusion-ui/native/vue"',
    importReact: 'import {FusionAlert} from "@ironsource/fusion-uifusion-ui/native/react"',
    importVue: 'import {FusionAlert} from "@ironsource/fusion-uifusion-ui/native/vue";',
    importVue3: 'import {FusionAlert} from "@ironsource/fusion-uifusion-ui/native/vue-v3";',
    fusionAlertReact: `render() {
    return (
        <FusionAlert config={this.state.alert}>
          <span>This is Alert</span>
        </FusionAlert>
    )
}`,
    fusionAlertVue: `
<template>
  <div id="app">
    <FusionAlert :config="alert" >
        <span><b>Well done!</b> This alert needs your attention, but it’s not super important</span>
    </FusionAlert>
  </div>
</template>

<script>
import {FusionAlert} from "@ironsource/fusion-uifusion-ui/native/vue";

export default {
  name: "app",
  data() {
    return {
        alert: {
          type: "success"
        }
    }
  },
  components: {
    FusionAlert
  }
}
</script>
      `,
    fusionAlertNative: `const onLoad = () => {
    const button = document.createElement("native-fusion-button");
    const textNode2 = document.createTextNode("Default Button");
    button.config = {
        class: "primary"
    };
    document.body.appendChild(button);
    button.appendChild(textNode2);

};
document.addEventListener('DOMContentLoaded', onLoad, false);
`
};
