const path = require('path');

module.exports = {
    entry: 'public/index.html',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },

    devtool: 'cheap-eval-source-map' // remove for build
};