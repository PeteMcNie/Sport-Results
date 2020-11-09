function trimRocketData (data) {
  const rocketData = []
  data.map(el => {
    rocketData.push({
      name: el.name,
      type: el.type,
      active: el.active,
      costPerLaunch: el.cost_per_launch,
      wikipedia: el.wikipedia,
      description: el.description,
      id: el.id,
      flickrImages: el.flickr_images,
      successRate: el.success_rate_pct
    })
  })
  return rocketData
}

module.exports = trimRocketData
