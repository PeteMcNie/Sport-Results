import React from 'react'
import { Route } from 'react-router-dom'

import Title from './Title'
import Links from './Links'
import Sports from './Sports'
import SpaceX from './SpaceX'
// import TeamRequest from './TeamRequest'
// import TeamMatchData from './TeamMatchData'
// import SpaceXRequest from './SpaceXRequest'

const App = () => {
  return (
    <>
      <Route exact path='/' component={Links} />
      <Route path='/' component={Title} />
      <Route path='/sportresults' component={Sports} />
      <Route path='spaceX' component={SpaceX} />
      {/* <Route path='/sportresults' component={TeamRequest} />
      <Route path='/sportresults' component={TeamMatchData} />
      <Route path='/spaceX' component={SpaceXRequest} /> */}
    </>
  )
}

export default App
