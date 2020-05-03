from campaigngen import CampaignGen

goal = "brand awareness"
name = "platinum business academy"
pstype = "mobile phone"
budget = "100000"
industry = "Education"
audience = "retired"
location = "Colombo"
price = "1000"
description = "music class"

generator = CampaignGen(goal, name, pstype, budget, industry, audience, location, price, description)
print(generator.generate())
