const _ = require('lodash');
module.exports.authenticationMiddleware = (req,res,next) => {
    const token = req.headers.authorization
    if (_.isEmpty(token)) {
        return res.status(401).send({
            message: 'Unauthorized'
        })
    }
    return next();
}