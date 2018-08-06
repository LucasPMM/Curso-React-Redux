import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Família</h1>
        { childrenWithProps(props.children, props) }
    </div>
)

// para funcionar o spread (...) é necessário instalar algumas dependencias -> $ npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.
// o metodo map tranforma um conjunto de filhos que não tem as propriedades do pai em um conjuntos de filhos que contem a propriedade do pai