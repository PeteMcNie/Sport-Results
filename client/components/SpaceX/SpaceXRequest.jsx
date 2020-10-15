import React from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

function SpaceXRequest(props) {
  const { register, handleSubmit, errors } = useForm()

  function onSubmit (data) {
      console.log(data)
      props.dispatch(getTheSpaceData(data))
  }
  console.log(errors)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="SpaceX" name="SpaceX" ref={register({required: true, maxLength: 30})} />
      <input type="submit" />
    </form>
  );
}

export default connect()(SpaceXRequest)
