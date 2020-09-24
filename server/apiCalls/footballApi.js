const request = require('superagent')

const key = require('../tools/footballApiKey')
// const trimData = require('../functions/trimData')

function getTeamInfo (team) {
  return request
    .get(`https://api.football-data.org/v2/teams/${team}/matches/`)
    .set('X-Auth-Token', `${key.key}`)
    .then(teamInfo => {
      // const data = teamInfo.body.matches
      // const trimmedInfo = trimData(teamInfo)
      console.log('CRONJOB CALL', teamInfo.body.matches)
      return teamInfo.body.matches
    })
    .catch(err => {
      throw err.status(500).send('ERROR COLLECTING DATA FROM FOOTBALL API', err.message)
    })
}

getTeamInfo(66) // Manchester United id
getTeamInfo(397) // Brighton id

module.exports = getTeamInfo

// ####### TO SETUP CRONJOB ########
// 1. Navigate in terminal to folder that holds the file/script you want to make automatic
// 2. In Terminal: vim cronjob-(whatYouWantToCallJob).sh
// 3. In vim:
//    first line type: #!/bin/sh
//    second line type: node (theFileNameOfFileYouWantToRun).js
//    Save and exit vim. Hit ESC then type: :x then hit enter.
// 4. Make the script we just created (cronjob-(whatYouWantToCallJob).sh) executable by typing
//    chmod +x yourNewScriptFile.sh       eg: chmod +x cronjob-(whatYouWantToCallJob).sh
// 5. In terminal test if the script is working by typing: ./cronjob-(whatYouWantToCallJob).sh
//        - you may need to add a console.log statement into the script so you see an output
//          to let you know it is working if it is not hooked up to something that you can see
//
// 6. To make the job run at specified intervals we need to open or create a crontab,
//    in terminal type: crontab -e  (this opens vim)
// 7. In vim:
//    first line type: 0 * * * * /ABSOLUTE PATH TO/cronjob-(whatYouWantToCallJob).sh
//                  min hr day mth dayOfWeek
//    NOTES: These are time refeneces, when the script will run. Google crontab to find out more.
//           On mac, open finder and drag and drop the script file you created
//           eg: cronjob-(whatYouWantToCallJob).sh into vim and it will give the the correct
//           ABSOLUTE PATH TO automatically
//    Save and exit vim. Hit ESC then type: :x then hit enter.
//
// If successful, terminal should state: crontab: installing new crontab
// To check it was successful list all crontabs in terminal by typing: crontab -l
