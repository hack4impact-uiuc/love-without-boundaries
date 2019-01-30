const webpack = require('webpack');
const path = require('path');

const parentDir = path.join(__dirname, '');

module.exports = {
    entry: [
        path.join(parentDir, 'src/index.js'),
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.less$/,
            loaders: ['style-loader', 'css-loader', 'less-loader'],
        }, {
            // Transform our own .css files with PostCSS and CSS-modules
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        }, {
            // Do not transform vendor's CSS with CSS-modules
            // The point is that they remain in global scope.
            // Since we require these CSS files in our JS or CSS files,
            // they will be a part of our compilation either way.
            // So, no need for ExtractTextPlugin here.
            test: /\.css$/,
            include: /node_modules/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: ['file-loader'],
        },
        ],
    },
    output: {
        path: path.join(parentDir, '/dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(parentDir, '/src'),
        historyApiFallback: true,
    },
};
