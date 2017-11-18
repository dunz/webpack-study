const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        main: './app/index.js',
        vendor: [
            'moment',
            'lodash'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // 1
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'] // Extract the webpack bootstrap logic into manifest.js
        }),
        new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: './dist/'
        })
    ]
};