const axios = require('axios');
const request = require("request");
const User = require("../models/user");

exports.get_competitors = (req, res, next) => {

};

exports.get_subscription = (req, res, next) => {
    User.findById( req.params.id ) 
        .then(result => {
            if (result.subscription == "Premium Subscription") {
                res.send(true);
            } else {
                res.send(false);
            }
        }).catch(err => {
            res.status(400).send("Something went wrong." + err);
        })
};

exports.get_vendors = (req, res, next) => {
    let pref = req.body.pref || "";
    if (pref === "") {
        return res.status(501).json({
            message: "Vendor preference type is required"
        });
    }

    let typeV = req.body.typeV || "";
    if (typeV === "") {
        return res.status(501).json({
            message: "Vendor preference type is required"
        });
    }

    let mcLat = req.body.mcLat || "";
    if (mcLat === "") {
        return res.status(501).json({
            message: "Latitude is required"
        });
    }

    let mcLng = req.body.mcLng || "";
    if (mcLng === "") {
        return res.status(501).json({
            message: "Longitude is required"
        });
    }

    axios.post('https://data.jansss.live/getVendors', req.body).then(function (response) {
        return res.status(200).json(response.data);
    }).catch(function (error) {
        return res.status(501).json({
            message: error
        });
    });
}

exports.get_plan = (req, res, next) => {
    let goal = req.body.goal || "";
    if (goal === "") {
        return res.status(501).json({
            message: "Campaign goal 'goal' is required"
        });
    }

    let name = req.body.name || "";
    if (name === "") {
        return res.status(501).json({
            message: "Campaign name 'name' is required"
        });
    }

    let pstype = req.body.pstype || "";
    if (pstype === "") {
        return res.status(501).json({
            message: "Product/service type 'pstype' is required"
        });
    }

    let budget = req.body.budget || "";
    if (budget === "") {
        return res.status(501).json({
            message: "Campaign budget 'budget' is required"
        });
    }

    let industry = req.body.industry || "";
    if (industry === "") {
        return res.status(501).json({
            message: "Industry 'industry' is required"
        });
    }

    let audience = req.body.audience || "";
    if (audience === "") {
        return res.status(501).json({
            message: "Campaign audience 'audience' is required"
        });
    }

    let location = req.body.location || "";
    if (location === "") {
        return res.status(501).json({
            message: "Campaign location 'location' is required"
        });
    }

    let price = req.body.price || "";
    if (price === "") {
        return res.status(501).json({
            message: "Price 'price' is required"
        });
    }

    let description = req.body.description || "";
    if (description === "") {
        return res.status(501).json({
            message: "Campaign description 'description' is required"
        });
    }

    axios.post('https://data.jansss.live/generate', req.body).then(function (response) {
        return res.status(200).json(response.data);
    }).catch(function (error) {
        return res.status(501).json({
            message: error
        });
    });
};

exports.get_geocode = (req, res, next) => {
    let address = req.params.address;
    let BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    let key = "&key=AIzaSyBSnrY80HKA1R78FdhfxP9hKV_-DIgjttE";
    let url = BASE_URL + address + key;

    axios.post(url, req.body).then(function (response) {
        return res.status(200).json(response.data);
    }).catch(function (error) {
        return res.status(501).json({
            message: error
        });
    });
};