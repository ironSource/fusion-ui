"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fusionFramework = void 0;
// import {apply, mergeWith, Rule, SchematicContext, SchematicsException, Tree, url, template} from '@angular-devkit/schematics';
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function fusionFramework(options) {
    return (tree, context) => {
        return generateFramworksScript(tree, context, options);
    };
}
exports.fusionFramework = fusionFramework;
const generateFramworksScript = (tree, context, options) => {
    const { componentsFilePath, outputDir } = options;
    const componentsFile = tree.read(componentsFilePath);
    if (!componentsFile) {
        throw new schematics_1.SchematicsException('Could not find native components file');
    }
    let fileText = componentsFile.toString('utf-8') || '';
    fileText = fileText.split('export const components = ').pop() || '';
    fileText = fileText
        .replace(`const PREFIX = 'native-fusion';`, '')
        .replace('export const components = ', '')
        .replace(/\$\{PREFIX\}/g, 'native-fusion')
        .replace(/(Wrapper)?Component/g, '')
        .replace(/([{,])\s*componentInstance\s*\:\s*(.*?)([},])/g, '$1 component: "$2"$3');
    const components = eval(fileText);
    const sourceTemplates = schematics_1.url('./files');
    const sourceParametrizedTemplates = schematics_1.apply(sourceTemplates, [
        schematics_1.template(Object.assign(Object.assign(Object.assign({}, options), core_1.strings), { components })),
        schematics_1.move(outputDir)
    ]);
    return schematics_1.mergeWith(sourceParametrizedTemplates)(tree, context);
};
//# sourceMappingURL=index.js.map