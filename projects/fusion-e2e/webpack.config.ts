const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './entities/index.ts',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'fusion-pw-lib.js',
        library: {
            name: 'fusionPWLib',
            type: 'umd'
        }
    },
    externals: ['playwright', '@playwright/test'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'package.json',
                    to: '.'
                }
            ]
        })
    ]
};
