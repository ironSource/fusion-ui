// import {apply, mergeWith, Rule, SchematicContext, SchematicsException, Tree, url, template} from '@angular-devkit/schematics';
import {apply, mergeWith, move, Rule, SchematicContext, SchematicsException, template, Tree, url} from '@angular-devkit/schematics';
import {Schema} from './schema';
import {strings} from '@angular-devkit/core';

export function fusionFramework(options: Schema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        return generateFramworksScript(tree, context, options);
    };
}

const generateFramworksScript = (tree: Tree, context: SchematicContext, options: Schema) => {
    const {componentsFilePath, outputDir} = options;
    const componentsFile = tree.read(componentsFilePath);
    if (!componentsFile) {
        throw new SchematicsException('Could not find native components file');
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
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
        template({
            ...options,
            ...strings,
            components
        }),
        move(outputDir)
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, context);
};
