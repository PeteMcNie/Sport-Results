import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Links () {
    const [state, setState] = useState(false)
    console.log(state)

    function sportResult (evt) {
       evt.preventDefault()
        setState(true)
        console.log('links ', state)
        sportResultsAction(state)
    }

    return (
        <div className='linksconatiner'>
            <div className='links'>
                <Link to={'/sportresults'} onClick={() => sportResult()}>Sport Results</Link>
            </div>
            <div className='links'>
                <Link to={'/spaceX'}>SpaceX</Link>
            </div>
        </div>
    )
}

export default Links
