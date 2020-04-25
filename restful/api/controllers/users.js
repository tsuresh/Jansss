const User = require("../models/user");

exports.get_matching_user = (req, res, next) => {
    User.find({ email: req.params.email }) 
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send("Something went wrong." + err);
        })
};
