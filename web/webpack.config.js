const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: './bundle.js',
        path: './build/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url?limit=8192'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css'), include: __dirname}
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', {allChunks: true}),
        new HtmlWebpackPlugin({template: './src/index.ejs'})
    ],
    resolve: {
        // you can now require('file') instead of require('file.js')
        extensions: ['', '.js']
    }
}