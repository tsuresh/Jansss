import json

from flask import Flask, request

from campaigngen import CampaignGen
from models.vendorSuggestion import VendorSuggest

goal = "brand awareness"
name = "platinum business academy"
pstype = "mathematics tuition class"
budget = "100000"
industry = "Education"
audience = "retired"
location = "Colombo"
price = "1000 per lesson"
description = "music class"

app = Flask(__name__)


@app.route('/generate', methods=['POST'])
def generate_campaign():
    data = request.get_json(force=True)
    generator = CampaignGen(data['goal'], data['name'], data['pstype'], data['pstype'], data['industry'],
                            data['audience'], data['location'], data['price'], data['description'])
    response = app.response_class(
        response=json.dumps(generator.generate()),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route('/getVendors', methods=['POST'])
def get_vendors():
    data = request.get_json(force=True)
    vendor_suggest = VendorSuggest(data['pref'], data['typeV'], data['mcLat'], data['mcLng'])
    response = app.response_class(
        response=vendor_suggest.predict(),
        status=200,
        mimetype='application/json'
    )
    return response
