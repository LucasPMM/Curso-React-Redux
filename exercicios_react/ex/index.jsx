import React from 'react'
import ReactDOM from 'react-dom'
import Component from './component' // não precisa colocar .jsx pelo fato da configuração resolve do arquivo webpack.config.js

ReactDOM.render(<Component />, document.getElementById('app'))
