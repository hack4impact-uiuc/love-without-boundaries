let webpack = require('webpack');
const path = require('path');

const parentDir = path.join(__dirname, '');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js'),
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.less$/,
            loaders: ['style-loader', 'css-loader', 'less-loader'],
        },
        ],
    },
    output: {
        path: `${ parentDir }/dist`,
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true,
    },
};
