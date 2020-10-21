import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import SpaceXRequest from './SpaceX/SpaceXRequest'
import HomeLink from './Links/HomeLink'

import { getUpdatedSpaceXData } from '../actions/spaceActions'

function SpaceX () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUpdatedSpaceXData())
  })

  return (
    <>
      <SpaceXRequest />
      <HomeLink />
    </>
  )
}

export default SpaceX
