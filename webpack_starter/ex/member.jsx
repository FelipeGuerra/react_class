import React from 'react'

export default props => (
    <div>{props.name} <strong>{props.lastName}</strong></div>
)

export const SecondComponent = props => <h1>Second Component</h1>

// export {firstComponent, secondComponent}