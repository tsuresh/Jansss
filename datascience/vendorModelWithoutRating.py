#returns the nearest vendor depending on the category without considering the rating
import requests
import pandas as pd
import json
from math import sin, cos, sqrt, atan2, radians

response = requests.get("https://jansss.herokuapp.com/vendors/all")
response
responseJ = response.json()
responseJ

x = len(response.json())
print (x)

edu = 'Education'  #should get from user

selectedPref = []
for x in responseJ:
    if edu in x["preferred"]:
        selectedPref.append (x)
selectedPref

vendors = []
distances = []
for x in selectedPref:
    lat = x["location"]["lat"]
    lng = x["location"]["lng"]
    vendors.append([x['busName'], x['googleName'],x['address'], 
                  x['phoneNumber'],x['preferred'], x['marketingTypes'],x['rating'], lat , lng] )

dataset = pd.DataFrame(vendors)
dataset.columns = ['BusName', 'GoogleName', 'Address', 'Contact', 'Preferred', 'MarketingTypes', 'Rating', 'Lat', 'Lng']
dataset

topVendors = []
topVendors.append(dataset[dataset.Rating == dataset.Rating.max()]) #check max rated once

def getDistance(flat1, flon1, clat2, clon2):
    R = 6373.0
    lat1 = radians(flat1)
    lon1 = radians(flon1)
    lat2 = radians(clat2)
    lon2 = radians(clon2)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c
    
    return distance


mcLat = 6.8940  #should get from user
mcLng = 79.8547  #should get from user
distances = []

for x in dataset.itertuples():
    distances.append(getDistance(x.Lat, x.Lng , mcLat, mcLng))
    
minIndex = 0
minVal = distances[0]
for i, val in enumerate(distances):
    if val < minVal:
        minVal = val
        minIndex = i

        
dataset.iloc[minIndex] 