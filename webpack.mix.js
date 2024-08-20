

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 let _mix = require('laravel-mix');
 const webpack = require('webpack');
 const axios = require('axios');
 const dev = process.env.NODE_ENV !== 'production';

 _mix.webpackConfig ({
     devtool: dev ? 'inline-source-map' : false,
 });

 _mix
     .js('resources/js/app.js', 'js')
     .sass('resources/sass/app.sass', 'css')
     .extract()
     .version()
     .setPublicPath('./public');
