# Fusion-UI

test

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.


## Prerequisites

Add ironSource artifactory to your npm registry by running (no space after `-u`):
```
curl -uACTIVE_DIRECTORY_USER_NAME:ACTIVE_DIRECTORY_PASSWORD https://ironsrc.jfrog.io/ironsrc/api/npm/npmjs-local/auth/ironsrc > ~/.npmrc
```
if you already have authentication data in your .npmrc file, just add the registry mapping:
```
npm config set @ironsrc:registry https://ironsrc.jfrog.io/ironsrc/api/npm/npmjs-local/auth/ironsrc
```
## Consuming Fusion-UI
* FusionUi works and tested on Angular 7+, React, Vue.JS & Vanilla   
* See [FusionUi docs](http://fusion.ironsrc.net/docs/getting-started) for detailed explanations how it to consume to your project

### Use Fusion-UI in CI Automation
1. ask HelpDesk to create new ironSource artifactory user
2. npm locally with that user
3. copy ~/.npmrc to your CI Automation server

## Publish to Fusion-UI

### Adding new components to Fusion-UI

#### First Use:
add to your bashrc/zshrc file:
```
export FUSION=$WORKDIR/fusion-ui
alias fusion="cd $FUSION"
```
#### Workflow:
1. create new branch
2. make changes in project (see Development section)
3. add feature examples in fusion-docs project
4. run lint: `npm run lint`
5. run tests: `npm run test-docs && npm run test-ui`
6. commit & push changes
7. test changes in consumer
8. create pull request for fusion-developer to code review
9. fusion-developer will code review
10. make changes after code review
11. after pull request merged to master then publish (see publish section):

### Publish
1. `cd "$FUSION/projects/fusion-ui"`
2. update version in package file: `$FUSION/projects/fusion-ui/package.json`
3. publish:
* production: `npm run publish`
* beta version: `npm run publish-beta`
   
### Development

#### Debug in fusion-docs (Angular project)
1. run to start *fusion-ui* project development mode: `npm run serve-docs`
3. every change (*fusion-ui* or *fusion-docs*) will refresh the browser  

#### Debug in other local project with npm link (Angular project)
1. run to start *fusion-ui* project development mode: `npm run serve-angular`
2. `cd "$FUSION/dist/fusion-ui"`
3. `npm link` (that will create npm symlink of *@ironsrc/fusion-ui* to that folder)
4. go to your project dir.
5. `npm link @ironsrc/fusion-ui`
6. make changes in *fusion-ui* and refresh your project to see changes.

#### Debug in VanillaJS / React / Vue.JS project
1. run to start: `npm run serve-native`
2. `cd "$FUSION/dist/fusion-ui"`
3. `npm link` (that will create npm symlink of *@ironsrc/fusion-ui* to that folder)
4. go to your project dir.
5. `npm link @ironsrc/fusion-ui`
6. test on relevant project 


#### Code scaffolding:
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Known Issues

##### AOT issues:
* see this [article](https://blog.angularindepth.com/making-your-angular-2-library-statically-analyzable-for-aot-e1c6f3ebedd5)

##### npm link issues:
###### Angular
* add all of `@angular` packaged that you use in fusion-ui project to `peerDependencies` section.
* in consumer project, add to `src/tsconfig.app.json` "paths" under compilerOptions: 
```
{
  "@angular/*": [
    "../node_modules/@angular/*"
  ]
}
```

###### React with create-react-app
* when trying to link @ironsrc/fusion-ui to your react project you will get an error: `Element ref was specified as a string (element) but no owner was set`
* in consumer React project, run:
```
react-scripts eject 
``` 
then add to webpack.config.js
```
resolve: {
   alias: {
      react: path.resolve('./node_modules/react')
   }
}
```

###### Vue.JS with create-react-app
* when trying to link @ironsrc/fusion-ui to your Vue.JS project you will get an error: `Error: No ESLint configuration found.`
* in consumer Vue project, add new file in root project directory: `vue.config.js`
```
module.exports = {
  chainWebpack: config => config.resolve.symlinks(false)
}
```


## License

MIT

[![Code Validation](https://github.com/ironsource/fusion-ui/actions/workflows/ci_initiator.yml/badge.svg)](https://github.com/ironsource/fusion-ui/actions/workflows/ci_initiator.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Love Angular badge](https://img.shields.io/badge/angular-love-blue?logo=angular&angular=love)](https://www.github.com/angular/angular)
