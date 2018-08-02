import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'
import Field from './field'

ReactDOM.render(
    // <ClassComponent label='Contador' initialValue={10} value={10} />
    
    <Field initialValue='Teste' />
, document.getElementById('app'))