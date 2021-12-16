export const GETTING_STARTED_PAGE_TEXTS = {
    npm: 'npm install --save @ironsrc/fusion-ui',
    // eslint-disable-next-line max-len
    npmRegistry:
        'curl -uACTIVE_DIRECTORY_USER_NAME:ACTIVE_DIRECTORY_PASSWORD ' +
        'https://ironsrc.jfrog.io/ironsrc/api/npm/npmjs-local/auth/ironsrc > ~/.npmrc',
    npmRegistrySetConfig: 'npm config set @ironsrc:registry https://ironsrc.jfrog.io/ironsrc/api/npm/npmjs-local/auth/ironsrc',
    style: '<link rel="stylesheet" href="https://ssastatic.s3-eu-west-1.amazonaws.com/fusion/native/v1/fusion.theme.css">',
    importModule: 'import {AlertModule} from "@ironsrc/fusion-ui"',
    fusionAlert: `<fusion-alert>
    <span>This alert needs your attention, but it’s not super important</span>
  </fusion-alert>`,
    native: `<link rel="stylesheet" href="node_modules/@ironsrc/fusion-ui/native/core/fusion.theme.css">
<script src="node_modules/@ironsrc/fusion-ui/native/core/polyfills-es2015.js" type="module"></script>
<script src="node_modules/@ironsrc/fusion-ui/native/core/polyfills-es5.js" nomodule></script>
<script src="node_modules/@ironsrc/fusion-ui/native/core/polyfill-webcomp-es5.js" nomodule></script>
<script src="node_modules/@ironsrc/fusion-ui/native/core/polyfill-webcomp-es2015.js"></script>
<script src="node_modules/@ironsrc/fusion-ui/native/core/main-es2015.js" type="module"></script>
<script src="node_modules/@ironsrc/fusion-ui/native/core/main-es5.js" nomodule></script>`,
    scss: 'node_modules/@ironsrc/fusion-ui/fusion.theme.css',
    npmReact: 'npm install --save @ironsrc/fusion-native',
    npmVue: 'npm install --save @ironsrc/fusion-native',
    mainReact: 'import "@ironsrc/fusion-ui/native/react";',
    mainVue: 'import "@ironsrc/fusion-ui/native/vue"',
    importReact: 'import {FusionAlert} from "@ironsrc/fusion-ui/native/react"',
    importVue: 'import {FusionAlert} from "@ironsrc/fusion-ui/native/vue";',
    importVue3: 'import {FusionAlert} from "@ironsrc/fusion-ui/native/vue-v3";',
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
import {FusionAlert} from "@ironsrc/fusion-ui/native/vue";

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
