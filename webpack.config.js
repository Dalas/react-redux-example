var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: {
        main: './static/js/src/main.js'
    },

    output: {
        path: path.resolve(__dirname, 'static/js/dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader",
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    devtool: "eval",

    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/template.html' }
            ]
        },
        compress: true,
        port: 9000
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-redux": "ReactRedux",
        "redux": "Redux",
        "react-router": "ReactRouter"
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            minChunks: 2
        })
    ]
};