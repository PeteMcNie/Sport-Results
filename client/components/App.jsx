import React from 'react'
import { Route } from 'react-router-dom'

import Title from './Title'
import TeamRequest from './TeamRequest'
import TeamMatchData from './TeamMatchData'

const App = () => {
  return (
    <>
      <Route path='/' component={Title} />
      <Route path='/' component={TeamRequest} />
      <Route path='/' component={TeamMatchData} />
    </>
  )
}

export default App
