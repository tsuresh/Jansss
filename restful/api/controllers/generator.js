const axios = require('axios');


exports.get_competitors = (req, res, next) => {

};

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