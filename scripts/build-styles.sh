#!/bin/bash

# Colors
NOCOLOR='\033[0m'
GREEN='\033[0;32m'
LIGHTGREEN='\033[1;32m'
# ----------------------------------


echo -e "${LIGHTGREEN}== Start build styles ${NOCOLOR}"

# run css-bundle
npm run styles

# compile common fusion.theme.scss
sass dist/fusion-ui/fusion.theme.scss dist/fusion-ui/fusion.theme.css -s compressed

# create style folder on dist/fusion-ui
mkdir -p dist/fusion-ui/style

# copy common scss mixins
echo  -e "${GREEN}-- copy common scss mixins ${NOCOLOR}"
cp -R projects/fusion-ui/src/style/scss/mixins dist/fusion-ui/style

# copy vars by style version
echo  -e "${GREEN}-- copy vars by style version ${NOCOLOR}"
cp -R projects/fusion-ui/src/style/scss/v1/vars dist/fusion-ui/style/v1
cp -R projects/fusion-ui/src/style/scss/v2/vars dist/fusion-ui/style/v2
cp -R projects/fusion-ui/src/style/scss/v3/vars dist/fusion-ui/style/v3

# copy and compile grid by versions
echo  -e "${GREEN}-- copy and compile grid by versions ${NOCOLOR}"
cp -R projects/fusion-ui/src/style/scss/v1/grid.scss dist/fusion-ui/style/v1/grid.scss
sass dist/fusion-ui/style/v1/grid.scss dist/fusion-ui/style/v1/grid.css -s compressed

cp -R projects/fusion-ui/src/style/scss/v2/grid.scss dist/fusion-ui/style/v2/grid.scss
sass dist/fusion-ui/style/v2/grid.scss dist/fusion-ui/style/v2/grid.css -s compressed

cp -R projects/fusion-ui/src/style/scss/v3/grid.scss dist/fusion-ui/style/v3/grid.scss
sass dist/fusion-ui/style/v3/grid.scss dist/fusion-ui/style/v3/grid.css -s compressed

# compile fonts by version
sass projects/fusion-ui/src/style/scss/v1/fonts.scss dist/fusion-ui/style/v1/fonts.css -s compressed
sass projects/fusion-ui/src/style/scss/v2/fonts.scss dist/fusion-ui/style/v2/fonts.css -s compressed
sass projects/fusion-ui/src/style/scss/v3/vars/_fonts.scss dist/fusion-ui/style/v3/fonts.css -s compressed

echo  -e "${GREEN}-- copy and compile default fonts and grid by last (v3) versions ${NOCOLOR}"
# compile default fonts (last version )
sass projects/fusion-ui/src/style/scss/v3/vars/_fonts.scss dist/fusion-ui/style/fonts.css -s compressed
# compile default grid (last version )
sass dist/fusion-ui/style/v3/grid.scss dist/fusion-ui/style/grid.css -s compressed


echo  -e "${GREEN}-- run css-bundle for native ${NOCOLOR}"
# run css-bundle for native
npm run styles -- true
# compile common fusion.theme.scss for native
sass dist/fusion-ui/native/fusion.theme.scss dist/fusion-ui/native/fusion.theme.css -s compressed

echo -e "${LIGHTGREEN}== Done build styles${NOCOLOR}"
