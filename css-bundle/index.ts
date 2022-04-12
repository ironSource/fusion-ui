import {relative} from 'path';
import {Bundler} from 'scss-bundle';
import {writeFile} from 'fs-extra';

/** Bundles all SCSS files into a single file */
async function bundleScss() {
    const isNative = process.argv[2];
    let mainPath = 'projects/fusion-ui/src/fusion-base/scss/app.scss';
    const dedupeGlobs = ['./projects/fusion-ui/src/fusion-base/**/*.scss'];

    if (isNative) {
        mainPath = 'projects/fusion-native/src/fusion-base/global.scss';
        dedupeGlobs.push('./projects/fusion-native/src/fusion-base/**/*.scss');
    }

    const {found, bundledContent, imports} = await new Bundler().Bundle(mainPath, dedupeGlobs);

    if (imports) {
        const cwd = process.cwd();

        const filesNotFound = imports.filter(x => !x.found).map(x => relative(cwd, x.filePath));

        if (filesNotFound.length) {
            console.error(`SCSS imports failed \n\n${filesNotFound.join('\n - ')}\n`);
            throw new Error('One or more SCSS imports failed');
        }
    }

    if (found) {
        const path = isNative ? 'fusion-ui/native' : 'fusion-ui';
        await writeFile(`./dist/${path}/fusion.theme.scss`, bundledContent);
    }
}

bundleScss();
