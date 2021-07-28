const secrets = require('../secrets/secrets.json')
module.exports = {
    emailMe: (mailaddr) =>
        require('node-fetch')(secrets.mailjet.url,
            {
                method: 'POST', headers: {
                    Accept: 'application/json',
                    Authorization: `Basic ${secrets.mailjet.token}`,
                },
                body: JSON.stringify({
                        "Messages": [
                            {
                                "From": {
                                    "Email": "gilad@maoz.dev",
                                    "Name": "Gilad"
                                },
                                "To": [
                                    {
                                        "Email": mailaddr,
                                        "Name": "Gilad"
                                    }
                                ],
                                "Subject": "Yayyyyy!!!",
                                "TextPart": "Greetings from my stupid demo.",
                                "HTMLPart": "<h3>You really think that im gonna invest in writing a real email for a demo?!</h3>",
                                "CustomID": "Gotcha"
                            }]
                    }
                )
            })
            .then(res => res.status === 200 ? 'OK' : res.statusText)
            .catch(err => console.error(err.message))
}
