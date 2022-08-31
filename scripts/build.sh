#!/bin/bash

ENV=$1

npm run build:fusion-ui

# build native project
#npm run build:fusion-native -- -c "$ENV"
# run css-bundle for native
#npm run styles -- true
# compile common fusion.theme.scss for native
#sass dist/fusion-ui/native/fusion.theme.scss dist/fusion-ui/native/fusion.theme.css -s compressed

#npm run build-native-frameworks
#npm run build-native-frameworks-old
# build typescript
#tsc -p dist/fusion-ui/native/tsconfig.json && find dist/fusion-ui/native -name '*.ts' -not -name '*.d.ts' -type f -delete

#npm run build-native-content
# build typescript
#tsc -p dist/fusion-ui/tsconfig-native.json && find dist/fusion-ui/react dist/fusion-ui/vue -name '*.ts' -not -name '*.d.ts' -type f -delete


# build styles
npm run build-styles




