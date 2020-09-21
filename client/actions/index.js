import { getTeam } from '../api/api'

export const GET_TEAM = 'GET_TEAM'
export const GET_TEAM_SUCCESS = 'GET_TEAM_SUCCESS'

export function gettingTeam () {
  return {
    type: GET_TEAM
  }
}

export function gettingTeamSuccess (team) {
  return {
    type: GET_TEAM_SUCCESS,
    team
  }
}

export function getTeamAction (team) {
  console.log(team)
  return (dispatch) => {
    dispatch(gettingTeam())
    return getTeam(team)
      .then(response => {
        console.log('getTeamAction', response)
      })
  }
}
