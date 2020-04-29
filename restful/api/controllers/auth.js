const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Vendor = require("../models/vendor");

exports.signup_user = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exist"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              userName: req.body.userName,
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
};

exports.signin_user = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Authentication failed."
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Authentication failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id
            },
            "secret",
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Authentication successful",
            userName: user[0].userName,
            _id: user[0]._id,
            expiresIn: 3600,
            token: token
          });
        }
        res.status(401).json({
          message: "Authentication failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.signup_vendor = (req, res, next) => {
  Vendor.find({ email: req.body.email })
    .exec()
    .then(vendor => {
      if (vendor.length >= 1) {
        return res.status(409).json({
          message: "Mail exist"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const vendor = new Vendor({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
              busName: req.body.busName,
              marketingTypes: req.body.marketingTypes,
              preferred: req.body.preferred,
              location: req.body.location,
              address: req.body.address,
              phoneNumber: req.body.phoneNumber,
              googleName: req.body.googleName,
              rating: req.body.rating
            });
            vendor
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "Vendor created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
};

exports.signin_vendor = (req, res, next) => {
  Vendor.find({ email: req.body.email })
    .exec()
    .then(vendor => {
      if (vendor.length < 1) {
        return res.status(401).json({
          message: "Authentication failed."
        });
      }
      bcrypt.compare(req.body.password, vendor[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Authentication failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: vendor[0].email,
              userId: vendor[0]._id
            },
            "secret",
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Authentication successful",
            token: token
          });
        }
        res.status(401).json({
          message: "Authentication failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
