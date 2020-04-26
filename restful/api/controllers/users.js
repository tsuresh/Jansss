const User = require("../models/user");

exports.get_matching_user = (req, res, next) => {
    User.findById( req.params.id ) 
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send("Something went wrong." + err);
        })
};
