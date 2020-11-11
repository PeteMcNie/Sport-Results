function selectRocketsUsedInLaunches (data) {
  const rocketsUsed = data[1].filter(el1 => data[0].some(el2 => el1.id === el2.rocket))
  // console.log('Selected Rockets ', rocketsUsed)
  return rocketsUsed
}

module.exports = selectRocketsUsedInLaunches
