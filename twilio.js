const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
    to: '+91730355xxx',
    from: '+15017122661',
    body: 'hello visheshk27',
  })
  .then(message => console.log(message.sid));
