/*jshint esversion: 6 */
/* globals __dirname, module, require, process */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const ASSETS_PATH = path.join(__dirname, 'src');
const CONFIG_FILE_NAME = 'webpack.config.js';

/**
 * Find all the config files
 */
let assetWebpackConfigs = [];
let assetWebPackConfigFiles = fs.readdirSync(ASSETS_PATH).filter(f => {
    let dirPath = path.join(ASSETS_PATH, f);
    let filePath = path.join(dirPath, CONFIG_FILE_NAME);
    return fs.statSync(dirPath).isDirectory() && fs.existsSync(filePath);
}).map(p => path.join(ASSETS_PATH, p, CONFIG_FILE_NAME));

/**
 * Loop through and create configs array
 */
let configs = [];
assetWebPackConfigFiles.forEach(asset => {
    let assetConfig = require(asset);
    configs.push(assetConfig);
});

console.log(configs);
module.exports = configs;