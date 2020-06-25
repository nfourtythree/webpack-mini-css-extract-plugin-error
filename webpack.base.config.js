/*jshint esversion: 6 */
/* globals  module, require, process */
// Plugins
const BASE_PATH = module.parent.path;
const SRC_PATH = BASE_PATH + '/src';

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: SRC_PATH,
    output: {
        filename: '[name].min.js',
        path: `${BASE_PATH}/dist`
    },
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                extractComments: false,
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.vue'],
    },
    module: {
        rules: [
            // Babel
            {
                test: /.m?js?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    // Translates CSS into CommonJS
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
        }),
    ]
};