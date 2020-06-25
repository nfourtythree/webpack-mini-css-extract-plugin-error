/*jshint esversion: 6 */
/* globals module, require */
const merge = require('webpack-merge');
const decache = require('decache');
decache('../../webpack.base.config');
const BASE_CONFIG = require('../../webpack.base.config');

let config = merge(BASE_CONFIG, {
    entry: {'asset': './asset1.js'},
    output: {
        filename: 'asset1.min.js',
    },
});

module.exports = config;