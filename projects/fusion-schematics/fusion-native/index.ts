import {Rule, SchematicContext, SchematicsException, Tree} from '@angular-devkit/schematics';
import {Schema} from './schema';

const FILES: {[target: string]: string[]} = {
    es5: ['polyfills-es2015.js', 'polyfill-webcomp-es2015.js', 'main-es2015.js'],
    es2015: ['polyfills-es5.js', 'polyfill-webcomp-es5.js', 'main-es5.js'],
    serve: ['main.js', 'polyfills.js']
};

export function fusionNative(options: Schema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        return generateNativeScript(tree, context, options);
    };
}

const generateNativeScript = (tree: Tree, _context: SchematicContext, options: Schema) => {
    const {outputDir} = options;
    const filesContent = Object.keys(FILES).reduce((acc, target) => {
        return {
            ...acc,
            ...FILES[target].reduce(
                (obj: any, file: string) => {
                    return ({
                        ...obj,
                        [file]: tree.read(`${outputDir}/${file}`),
                        [`${file}.map`]: tree.read(`${outputDir}/${file}.map`)
                    })
                },
                {}
            )
        };
    }, {});

    const mainCssContent = tree.read(`${outputDir}/fusion.theme.css`);
    const mainScssContent = tree.read(`${outputDir}/fusion.theme.scss`);
    if (!mainCssContent || !mainScssContent) {
        throw new SchematicsException('Could not find native dist files');
    }

    tree.getDir(outputDir).subfiles.forEach(file => {
        tree.delete(`${outputDir}/${file}`);
    });

    Object.keys(filesContent).forEach(file => filesContent[file] && tree.create(`${outputDir}/core/${file}`, filesContent[file]));
    tree.create(`${outputDir}/core/fusion.theme.css`, mainCssContent);
    tree.create(`${outputDir}/core/fusion.theme.scss`, mainScssContent);

    return tree;
};
