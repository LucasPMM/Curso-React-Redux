import React from 'react'
import ReactDOM from 'react-dom'
import Component from './component' // não precisa colocar .jsx pelo fato da configuração resolve do arquivo webpack.config.js

ReactDOM.render(<Component value='Show!' />, document.getElementById('app')) // propriedade value coloca um valor na props.value
