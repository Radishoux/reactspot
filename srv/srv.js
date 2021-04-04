const express = require("express")
const cors = require("cors")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

var redirect_uri = 'http://localhost:3000'
var client_id = '06b399096b834aa4889d88263fe2d969'
var client_secret = 'ce9ff0594b9d4d0f9247bde6b525e6b6'

app.post("/login", (req, res) => {
    console.log("loginning")
    const spotifyApi = new SpotifyWebApi({
        redirectUri: redirect_uri,
        clientId: client_id,
        clientSecret: client_secret,
    })
    
    spotifyApi
    .authorizationCodeGrant(req.body.code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch(err => {
        res.sendStatus(400)
        console.log(err)
    })
})

app.post("/refresh", (req, res) => {
    console.log("refreshing token")
    const spotifyApi = new SpotifyWebApi({
        redirectUri: redirect_uri,
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken : req.body.refreshToken,
    })
    
    spotifyApi
    .refreshAccessToken()
    .then(data => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn,
        })
    })
    .catch(err => {
        res.sendStatus(400)
        console.log(err)
    })
})

app.listen(3001)