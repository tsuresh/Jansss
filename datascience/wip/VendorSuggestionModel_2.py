# this model returns the best vendor considering the rating, distance and thetypes of campaigns
from math import sin, cos, sqrt, atan2, radians

import pandas as pd
import requests

response = requests.get("https://jansss.herokuapp.com/vendors/all")
response
responseJ = response.json()
responseJ

x = len(response.json())
# print (x)

typeV = 'Event'  # should get from user

selectedPref = []
for x in responseJ:
    if typeV in x["marketingTypes"]:
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

def getDistance(flat1, flon1, clat2, clon2):   #https://stackoverflow.com/questions/19412462/getting-distance-between-two-points-based-on-latitude-longitude
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
        
        
maxIndex = 0
maxVal = distances[0]
for i, val in enumerate(distances):
    if val > maxVal:
        maxVal = val
        maxIndex = i

         
distanceAn = []   #higher is the nearest vendor
for x in distances:
    distanceAn.append(((maxVal-x)/maxVal)*100)
    
ratingAn = []  #higher is the best vendor
maxRating = dataset["Rating"].max()

for x in dataset.itertuples():
    ratingAn.append((x.Rating/maxRating)*100)
    
finalAn = []
i=0
for x in distanceAn:
    finalAn.append((x + ratingAn[i])/2)
    i += 1 
    
bestIndex = 0
bestVal = finalAn[0]
for i, val in enumerate(finalAn):
    if val > bestVal:
        bestVal = val
        bestIndex = i
        
dataset.iloc[bestIndex]