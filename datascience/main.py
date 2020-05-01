from campaigngen import CampaignGen

goal = "brand awareness"
name = "platinum business academy"
pstype = "mathematics tuition class"
budget = "100000"
industry = "Education"
audience = "Students"
location = "Colombo"
price = "1000 per lesson"
description = "computer class"

campaigngen = CampaignGen(goal, name, pstype, budget, industry, audience, location, price, description)
campaigngen.generate()
