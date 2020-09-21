import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getTeam } from '../actions'

function TeamRequest (props) {
  const [state, setState] = useState('')

  function handleChange (evt) {
    // console.log(evt.target.value)
    const { value } = evt.target
    setState(value)
  }

  return (
    <div>
      <input value={state} onChange={handleChange} placeholder='Team requested...' />
      <button onClick={() => props.dispatch(getTeam(state))}>Submit</button>
    </div>
  )
}

export default connect()(TeamRequest)
