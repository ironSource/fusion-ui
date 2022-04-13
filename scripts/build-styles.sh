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

# copy vars by style version
echo  -e "${GREEN}-- copy vars by style version ${NOCOLOR}"
mkdir -p dist/fusion-ui/style/v1/vars
cp -R projects/fusion-ui/src/style/scss/v1/vars dist/fusion-ui/style/v1/
mkdir -p dist/fusion-ui/style/v2/vars
cp -R projects/fusion-ui/src/style/scss/v2/vars dist/fusion-ui/style/v2/
mkdir -p dist/fusion-ui/style/v3/vars
cp -R projects/fusion-ui/src/style/scss/v3/vars dist/fusion-ui/style/v3/

# copy mixins by style version
echo  -e "${GREEN}-- copy mixins by style version ${NOCOLOR}"
cp -R projects/fusion-ui/src/style/scss/v1/mixins dist/fusion-ui/style/v1
cp -R projects/fusion-ui/src/style/scss/v2/mixins dist/fusion-ui/style/v2
cp -R projects/fusion-ui/src/style/scss/v3/mixins dist/fusion-ui/style/v3

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
# copy default grid (last version )
cp -R dist/fusion-ui/style/v3/grid.css dist/fusion-ui/style/grid.css
cp -R dist/fusion-ui/style/v3/grid.css.map dist/fusion-ui/style/grid.css.map

echo -e "${LIGHTGREEN}== Done build styles${NOCOLOR}"
