import React, { useState } from 'react'

function TeamRequest () {
  const [state, setState] = useState('')

  function handleChange (evt) {
    // console.log(evt.target.value)
    const { value } = evt.target
    setState(value)
  }

  return (
    <div>
      <input value={state} onChange={handleChange} />
      <button>Submit</button>
    </div>
  )
}

export default TeamRequest
