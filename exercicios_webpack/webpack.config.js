const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')    // plugin de extrair texto para ler os arquivos css

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js?$/,              // tipos de arquivos a serem observados
            loader: 'babel-loader',     // tipo de loader a ser utilizado
            exclude: /node_modules/,    // arquivos que não devem ser observados pelo loader
            query: {                    // o que o loader vai interpretar (react...)
                presets: ['es2015', 'react'],    // array com todos os presets que queremos aplicar para fazer a tradução -> $ npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0 ---- $ npm i --save-dev babel-preset-react@6.22.0
                plugins: ['transform-object-rest-spread']   // plugin necessario para o navegador entender o operador spread (...) -> $ npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.0
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader") // $ npm i --save-dev extract-text-webpack-plugin@1.0.1 style-loader@0.13.1 cssloader@0.26.1
        }]
    }
}