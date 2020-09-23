function trimData (teamInfo) {
  const trimmedInfo = teamInfo.body.matches.map(function (el) {
    return {
      awayTeam: el.awayTeam,
      hometeam: el.homeTeam,
      score: el.score,
      matchday: el.matchday,
      data: el.date,
      competition: el.competition,
      status: el.status
    }
  })
  return trimmedInfo
}

module.exports = trimData
