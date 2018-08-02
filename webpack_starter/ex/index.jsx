import React from 'react'
import ReactDOM from 'react-dom'
import Family  from './family'
import Member  from './member'

ReactDOM.render(
    <div>
        <Family lastName="familyName">
            <Member name="Name1" />
            <Member name="Name2" />
            <Member name="Name3" />
        </Family>
    </div>
, document.getElementById('app'))