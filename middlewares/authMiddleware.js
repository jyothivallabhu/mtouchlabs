const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const token = req.headers("Authorization");
    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }
    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
}
