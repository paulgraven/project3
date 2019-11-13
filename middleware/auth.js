const config = require("config");
const jwt = require("jsonwebtoken");

//Custom middleware for jwttokens
//Whenever we want a private route, we can add this piece of middleware as a second parameter in the end-points
function auth(req, res, next) {
  //Get token sent from React front-end to access private routes
  //Header value to check for the token = x-auth-token
  const token = req.header("x-auth-token");

  //Check for token
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    //Verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //Take the user from the token (id) and tWhenever the token is sent, have that user stored in the req value
    //Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
