import React from 'react'
import { useSelector } from 'react-redux'

function SpaceXData () {
  const launches = useSelector(state => state.onloadSpaceXData.launches)
  console.log('SpaceXData', launches)

  const rockets = useSelector(state => state.onloadSpaceXData.rockets)

  if (!launches && !rockets) {
    return null
  } else {
    launches.map(el => {
      if (el.success === true) {
        el.success = 'True'
      } else {
        el.success = 'False'
      }
      return el.success
    })

    return (
      <>
        <table className='table'>
          {launches.map(el =>
            <tbody key={el.flightNumber} className='tableblock'>
              <tr className='headerrow'>
                <td className='tableheader'>Flight No: {el.flightNumber}</td>
                <td className='tableheader'>Name: {el.name}</td>
                <td className='tableheader'>Date: {el.dateUtc}</td>
              </tr>
              <tr>
                <td colSpan='3'className='tableinfo'>Details: {el.details}</td>
              </tr>
              <tr>
                <td colSpan='3' className='tableinfo'>Mission Success: {el.success}</td>
              </tr>
              <tr>
                <td colSpan='2' className='tableinfo'>More information: <a href={el.links.wikipedia}>{el.links.wikipedia}</a></td>
                <td className='tableinfo'><a href={el.links.article}>{el.links.article}</a></td>
              </tr>
            </tbody>
          )}
        </table>
        <div>
          {rockets[0].flickrImages.map(el =>
            <div key={el}>
              <img src={el} />
            </div>
          )}
        </div>
      </>
    )
  }
}

export default SpaceXData
