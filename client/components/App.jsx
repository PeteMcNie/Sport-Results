import React from 'react'
import { Route } from 'react-router-dom'

import SportTitle from './SportTitle'
import Links from './Links'
import TeamRequest from './TeamRequest'
import TeamMatchData from './TeamMatchData'

const App = () => {
  return (
    <>
      <Route exact path='/' component={Links} />
      <Route path='/sportresults' component={SportTitle} />
      <Route path='/sportresults' component={TeamRequest} />
      <Route path='/sportresults' component={TeamMatchData} />
    </>
  )
}

export default App
