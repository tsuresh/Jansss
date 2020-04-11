import requests
from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient("mongodb+srv://admin:pumd3khVTify6wk8@jansss-ik1ov.mongodb.net/test?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE")
db = client.test

records = db.vendors

print("Updating ",format(records.count_documents({}))," vendor records.")

place_ids = ["ChIJl-8y97n34joREIybXt7MWn0", "ChIJBc4QpNlb4joRH0A4W1jNb-I"]
vendor_ids = ["5e91c83eeda2d205c7256493", "5e91c9a7eda2d205c7256494"]

main_url1 = 'https://maps.googleapis.com/maps/api/place/details/json?place_id='
main_url2 = '&fields=name,rating,formatted_phone_number,geometry,formatted_address&key=AIzaSyBSnrY80HKA1R78FdhfxP9hKV_-DIgjttE'

array_length = len(place_ids)

for i in range(array_length):
    place_id = place_ids[i]
    vendor_id = vendor_ids[i]
    
    completeURL = main_url1 + place_id + main_url2
    
    json_data = requests.get(completeURL).json()
    location = json_data['result']['geometry']['location']
    formatted_address = json_data['result']['formatted_address']
    formatted_phone_number = json_data['result']['formatted_phone_number']
    name = json_data['result']['name']
    rating = json_data['result']['rating']

    vendor_updates = {
        'location': location,
        'address': formatted_address,
        'phoneNumber': formatted_phone_number,
        'googleName': name,
        'rating': rating
    }

    records.update_one({'_id': ObjectId(vendor_id)}, {'$set': vendor_updates})

    print(formatted_address)
    print(formatted_phone_number)
    print(name)
    print(rating)
   
 
