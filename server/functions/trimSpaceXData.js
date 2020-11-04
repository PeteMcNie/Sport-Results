function trimSpaceXData (data) {
  const trimmedData = data.map(el => {
    // console.log('Inside map function ', el)
    return {
      flightNumber: el.flight_number,
      dateUtc: el.date_utc,
      name: el.name,
      success: el.success,
      details: el.details,
      links: {
        wikipedia: el.links.wikipedia,
        article: el.links.article
      }
    }
  })
  return trimmedData
}

module.exports = trimSpaceXData
