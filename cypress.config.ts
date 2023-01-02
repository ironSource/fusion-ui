import {defineConfig} from 'cypress';

export default defineConfig({
    component: {
        devServer: {
            framework: 'angular',
            bundler: 'webpack',
            options: {
                projectConfig: {
                    root: 'projects/fusion-docs/',
                    sourceRoot: 'projects/fusion-docs/src',
                    buildOptions: {
                        outputPath: 'dist/fusion-docs',
                        index: 'projects/fusion-docs/src/index.html',
                        main: 'projects/fusion-docs/src/main.ts',
                        polyfills: 'projects/fusion-docs/src/polyfills.ts',
                        tsConfig: 'projects/fusion-docs/tsconfig.app.json',
                        assets: ['projects/fusion-docs/src/assets'],
                        styles: ['projects/fusion-docs/src/styles.scss'],
                        scripts: [],
                        vendorChunk: true,
                        extractLicenses: false,
                        buildOptimizer: false,
                        sourceMap: true,
                        optimization: false,
                        namedChunks: true
                    }
                }
            }
        },
        specPattern: '**/*.cy.ts'
    }
});
