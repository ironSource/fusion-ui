"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fusionNative = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const FILES = {
    es5: ['polyfills-es2015.js', 'polyfill-webcomp-es2015.js', 'main-es2015.js'],
    es2015: ['polyfills-es5.js', 'polyfill-webcomp-es5.js', 'main-es5.js'],
    serve: ['main.js', 'polyfills.js']
};
function fusionNative(options) {
    return (tree, context) => {
        return generateNativeScript(tree, context, options);
    };
}
exports.fusionNative = fusionNative;
const generateNativeScript = (tree, _context, options) => {
    const { outputDir } = options;
    const filesContent = Object.keys(FILES).reduce((acc, target) => {
        return Object.assign(Object.assign({}, acc), FILES[target].reduce((obj, file) => {
            return (Object.assign(Object.assign({}, obj), { [file]: tree.read(`${outputDir}/${file}`), [`${file}.map`]: tree.read(`${outputDir}/${file}.map`) }));
        }, {}));
    }, {});
    const mainCssContent = tree.read(`${outputDir}/fusion.theme.css`);
    const mainScssContent = tree.read(`${outputDir}/fusion.theme.scss`);
    if (!mainCssContent || !mainScssContent) {
        throw new schematics_1.SchematicsException('Could not find native dist files');
    }
    tree.getDir(outputDir).subfiles.forEach(file => {
        tree.delete(`${outputDir}/${file}`);
    });
    Object.keys(filesContent).forEach(file => filesContent[file] && tree.create(`${outputDir}/core/${file}`, filesContent[file]));
    tree.create(`${outputDir}/core/fusion.theme.css`, mainCssContent);
    tree.create(`${outputDir}/core/fusion.theme.scss`, mainScssContent);
    return tree;
};
//# sourceMappingURL=index.js.map