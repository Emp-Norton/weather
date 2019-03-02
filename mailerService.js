const moment = require('moment');
const { exec } = require('child_process');
require('dotenv').config();
const eaddress = process.env.EADDRESS;

const getCurrentTime = () => moment(Date.now());

const sendEmail = (fileString) => {
  let exc = `echo -e "to: ${eaddress}\nsubject: MOTION DETECTED: ${getCurrentTime()}\n"| ssmtp ${eaddress}`;
  exec(exc, (err, stdout, stderr) => {
    if (err || stderr) {
      const errorString = `${Date.now()}\n${err}`;
    }
  });
};

module.exports = sendEmail
