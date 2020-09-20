import React from 'react'
import { Route } from 'react-router-dom'

import Title from './Title'
import TeamRequest from './TeamRequest'

const App = () => {
  return (
    <>
      <Route path='/' component={Title} />
      <Route path='/' component={TeamRequest} />
    </>
  )
}

export default App
