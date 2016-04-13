var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        main: '/client/index.jsx'
    },
    output: {
        path: path.join(__dirname, "public/js"),
        filename: '[name].js'
    },
    resolve: {
        root: [
            path.join(__dirname, "client")
        ],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [new webpack.optimize.DedupePlugin()],
    resolveLoader: {
        modulesDirectories: [
            path.join(__dirname, "node_modules")
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    }
};