var express = require('express')
var app = express()
const wsfed = require('wsfed')
const fs = require('fs')
const path = require('path')

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/wsfed', wsfed.auth({
    issuer:     'the-issuer',
    cert:       fs.readFileSync(path.join(__dirname, 'some-cert.pem')),
    key:        fs.readFileSync(path.join(__dirname, 'some-cert.key')),
    getPostUrl: function (wtrealm, wreply, req, callback) {
        return cb( null, 'http://someurl.com' )

    }

}));

app.listen(3000)
