import React from 'react'
import { connect } from 'react-redux'

function Title (props) {
  console.log('SportTitle props ', props)
  return (
    <div>
      <h1>Sport Results</h1>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Title)
