function trimSpaceXData (data) {
  const latestResults = []
  data.map(el => {
    // console.log('Inside map function ', el)
    if (el.flight_number >= 100) {
      latestResults.push({
        flightNumber: el.flight_number,
        dateUtc: el.date_utc,
        name: el.name,
        success: el.success,
        details: el.details,
        links: {
          wikipedia: el.links.wikipedia,
          article: el.links.article
        }
      })
    }
  })
  return latestResults
}

module.exports = trimSpaceXData
