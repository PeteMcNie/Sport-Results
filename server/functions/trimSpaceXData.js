function trimSpaceXData (data) {
  const trimmedData = data.map(el => {
    // console.log('Inside map function ', el)
    return {
      flightNumber: el.flight_number
    }
  })
  // console.log('TRIMMED DATA IN TRIMSPACEXDATA ', trimmedData)
  return trimmedData
}

module.exports = trimSpaceXData
