import React, { Component } from 'react'

export default class ClassComponent extends Component { // se não tivesse importado o component era so usar extends React.Component
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}