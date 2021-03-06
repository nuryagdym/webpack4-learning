const path = require('path');
//const TerserPlugin = require('terser-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'hello-world': './src/index.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ""
    },
    optimization: {
        //generate separate js file for common imported libraries such as lodash
        splitChunks: {
            chunks: "all",
            /**
             * by default if size of the common codes is less than 30KB, the separate file will not be generated but will be embedded in to js files.
             * we can change default min size.
             * to understand better change minSize value to 100, 1000 and 1000000 and then check the contents of dist/kiwi.js
             */
            minSize: 10000,

            //default value is ~
            automaticNameDelimiter: "_"
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(gif|png|jpg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/media/'
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    /*                    {
                                            loader: MiniCssExtractPlugin.loader,
                                            options: {
                                            }
                                        },*/
                    'css-loader'
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    /*                    {
                                            loader: MiniCssExtractPlugin.loader,
                                            options: {
                                            }
                                        },*/
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.hbs$/,
                use: [
                    {
                        loader: 'handlebars-loader'
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/fonts/fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        /*        new MiniCssExtractPlugin({
                    filename: 'style.css'
                }),*/

        //clean old dist files
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [

                //clean sub folders, relative path to output folder
                '**/*',

                //clean folders outside of dist output path
                path.join(process.cwd(), 'build/**/*')
            ]
        }),

        new HtmlWebpackPlugin({
            title: "Hello World!",
            filename: "hello-world.html",
            //js files to include, specified in entries
            chunks: ['hello-world'],

            //change output filename
            //filename: 'custom.html',
            //filename: 'subfolder/custom.html'

            //use handlebars template
            template: 'src/index.hbs',
            meta: {
                description: 'learning webpack'
            }
        }),
        new HtmlWebpackPlugin({
            title: "Hello Kiwi!",
            filename: "kiwi.html",
            //js files to include, specified in entries
            chunks: ['kiwi'],

            //use handlebars template
            template: 'src/index.hbs',
            meta: {
                description: 'Kiwi image'
            }
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        index: 'index.html',
        port: 9000
    }
}
