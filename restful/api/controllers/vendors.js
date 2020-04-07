const User = require("../models/user");
const Vendor = require("../models/vendor");
const mongoose = require("mongoose");
const express = require("express");


exports.get_all_vendors = (req, res, next) => {
    Vendor.find() //fetches all the vendors
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
};

exports.get_matching_vendors = (req, res, next) => {
    Vendor.findById(req.params.id) //filters the vendors by Id
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send("Something went wrong." + err);
        })
};

exports.get_vendor_filtered = (req, res, next) => {
    const {marketingTypes, searchText} = req.query;
    const query = {};
    if (marketingTypes != null) {query.marketingTypes = marketingTypes};
    if (searchText != null) {query.busName = searchText};
    Vendor.find(query)
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).send(err);
    })
};

exports.pass_camp_details = (req, res, next) => {

};

exports.get_vendor_confirmation = (req, res, next) => {

};