const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {

    entry: path.join(__dirname, 'client/main.js'),

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                ]
            },
            //other rules
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'client/src/index.html')
        }),
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        })
        //other plugins
    ],

    resolve: {
        extensions: [ '.ts', '.js' ],
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            "stream": require.resolve('stream-browserify'),
            "buffer": require.resolve("buffer")
        },
    },

}
