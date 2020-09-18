const jwt = require ('jsonwebtoken');

function authenticateToken(req, res, next) {
    console.log(process.env.ACCESS_TOKEN_SECRET);
    // Gather the jwt access token from the request header
    const token = req.headers['authorization'];

    if (token == null) return res.sendStatus(401); // if there isn't any token

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.userId = user.id
        next() // pass the execution off to whatever request the client intended
    });
}

module.exports = authenticateToken;
