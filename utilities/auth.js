
const jwt = require ('jsonwebtoken');

function generateAccessToken(id) {
    // expires after half and hour (1800 seconds = 30 minutes)
    // 2592000s ==> 30 days
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2592000s' });
}

module.exports = generateAccessToken;
