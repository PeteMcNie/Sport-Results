import React, { useState } from 'react'
import { connect } from 'react-redux'

function SpaceXRequest (props) {
    const [state, setState] = useState('')

    function handleChange (evt) {
        const { value } = evt.target
        setState(value)
    }

    function submitHandler () {
        console.log('spacexrequest ', state)
        if (state) {
            props.dispatch(getTheSpaceData(state))
        }
    }

    return (
        <div>
            <form onSubmit={() => submitHandler}>
                <input onChange={handleChange} value={state}></input>
                <button>Blast off!</button>
            </form>
        </div>
    )
}

export default connect()(SpaceXRequest)
