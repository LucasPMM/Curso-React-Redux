const webpack = require('webpack')

module.exports = {      // webpack ira exportar tudo que estiver aqui
    entry: './ex/index.jsx',            // ponto de entrada
    output: {                           // ponto de saida
        path: __dirname + '/public',    // __dirname (diretorio atual) é fonecido pelo node
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,             // tipos de arquivos a serem observados (.jsx é a extenção do react)
            loader: 'babel-loader',     // tipo de loader a ser utilizado
            exclude: /node_modules/,    // arquivos que não devem ser observados pelo loader
            query: {                    // o que o loader vai interpretar (react...)
                presets: ['es2015', 'react'],   // array com todos os presets que queremos aplicar para fazer a tradução -> $ npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0 ---- $ npm i --save-dev babel-preset-react@6.22.0
                plugins: ['transform-object-rest-spread']    // para funcionar o operador spread (...)
            }
        }]
    }
}