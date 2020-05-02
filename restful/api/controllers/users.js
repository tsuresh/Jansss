const User = require("../models/user");

exports.get_matching_user = (req, res, next) => {
    User.findById( req.params.id ) 
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send("Something went wrong." + err);
        })
};

exports.update_matching_user = (req, res, next) => {
    User.find( { _id: req.params.id } )
      .exec()
      .then(user => {
        if (user.length >= 1) {
          const user = new User({
            email: req.body.email,
            userName: req.body.userName,
            // password: hash,
            firstName: req.body.firstName,
            surName: req.body.surName,
            subscription: req.body.subscription,
            paymentMethod: req.body.paymentMethod
          });
         // console.log(req.params.id)
          User.updateOne({ _id: req.params.id }, user).then(
            () => {
              res.status(201).json({
                message: 'User updated successfully!'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
        } else {
          return res.status(409).json({
            message: "User not found"
          });
        }
      });
  }
  
