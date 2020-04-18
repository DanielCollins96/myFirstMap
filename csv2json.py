import csv
import json

worldcities = []

with open('simplemaps_worldcities_basicv1.6/worldcities.csv', newline='', encoding='utf-8') as csvfile:
     spamreader = csv.DictReader(csvfile)
     city = {}
     for row in spamreader :
         city['name'] = row['city_ascii'] 
         city['lat'] = row['lat']
         city['lng'] = row['lng']
         city['country'] = row['country']
         city['pop'] = row['population']
         print(city)
         worldcities.append(city)

with open('data.json', 'r') as f:
    data = json.load(f)
    # print(worldcities)
    print(data['features'])