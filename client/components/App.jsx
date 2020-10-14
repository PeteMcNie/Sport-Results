import React from 'react'
import { Route } from 'react-router-dom'

import Title from './Title'
import Links from './Links'
import TeamRequest from './TeamRequest'
import TeamMatchData from './TeamMatchData'

const App = () => {
  return (
    <>
      <Route path='/' component={Links} />
      <Route path='/' component={Title} />
      <Route path='/sportresults' component={TeamRequest} />
      <Route path='/sportresults' component={TeamMatchData} />
    </>
  )
}

export default App
