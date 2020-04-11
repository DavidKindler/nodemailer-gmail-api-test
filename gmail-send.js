// https://www.npmjs.com/package/gmail-send
const fs = require('fs')
const path = require('path')
const gmail_send_options = path.join(__dirname, 'gmail-send.json')
const gmailSend = require('gmail-send')
let options = {}

const sendEmail = options => {
  const send = new gmailSend(options)
  send(
    {
      text: 'example 1',
      subject: 'foo'
    },
    (error, result, fullResult) => {
      if (error) console.error(error)
      console.log(result)
    }
  )
  send(
    {
      text: 'example 2',
      subject: 'bar'
    },
    (error, result, fullResult) => {
      if (error) console.error(error)
      console.log(result)
    }
  )
}

if (fs.existsSync(gmail_send_options)) {
  const options = require(gmail_send_options)
  sendEmail(options)
  console.log(JSON.stringify(options))
}
