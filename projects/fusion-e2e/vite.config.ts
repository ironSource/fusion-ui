import {resolve} from 'path';
import {defineConfig} from 'vite';
import {viteStaticCopy} from 'vite-plugin-static-copy';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'entities/index.ts'),
            name: 'shared-ui-e2e',
            // the proper extensions will be added
            fileName: 'shared-e2e-commands'
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
            }
        }
    },
    plugins: [
        dts(),
        viteStaticCopy({
            targets: [
                {
                    src: './package.json',
                    dest: './'
                }
            ]
        })
    ]
});
