const moment = require('moment');
const { exec } = require('child_process');
require('dotenv').config();
const eaddress = process.env.EADDRESS;

const getCurrentTime = () => moment(Date.now());

const sendEmail = (fileString) => {
  // TODO: Include weather details from city log
  let exc = `echo -e "to: ${eaddress}\nsubject: WEATHER UPDATE: ${getCurrentTime()}\n"| ssmtp ${eaddress}`;
  exec(exc, (err, stdout, stderr) => {
    if (err || stderr) {
      const errorString = `${Date.now()}\n${err}`;
    }
    console.log(stdout)
    console.log('sending')
  });
};

module.exports = sendEmail
