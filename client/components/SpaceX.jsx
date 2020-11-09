import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import SpaceXRequest from './SpaceX/SpaceXRequest'
import SpaceXData from './SpaceX/SpaceXData'
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
      <SpaceXData />
      <HomeLink />
    </>
  )
}

export default SpaceX
