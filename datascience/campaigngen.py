import spacy

from models.audiencePrediction import Audience
from models.durationPrediction import DurationPrediction
from models.marketPrediction import MarketPrediction
from models.outcomesPrediction import Outcomes


class CampaignGen:

    # Initialise campaign generator
    def __init__(self):
        # Initialise NLP libraries here
        self.nlp = spacy.load("en_core_web_md")

        # Initialise models here
        self.audiences = Audience()
        self.durations = DurationPrediction()
        self.outcomes = Outcomes()
        self.market = MarketPrediction()

        self.goal = ""
        self.name = ""
        self.ptype = ""
        self.budget = ""
        self.industry = ""
        self.audience = ""
        self.location = ""
        self.price = ""
        self.description = ""

    def set_data(self, goal, name, ptype, budget, industry, audience, location, price, description):
        self.goal = goal
        self.name = name
        self.ptype = ptype
        self.budget = budget
        self.industry = industry
        self.audience = audience
        self.location = location
        self.price = price
        self.description = description

    # Calculate text similarity
    def calculate_similarity(self, text1, text2):
        base = self.process_text(text1)
        compare = self.process_text(text2)
        return self.nlp(base).similarity(self.nlp(compare))

    # NLP text processing
    def process_text(self, text):
        doc = self.nlp(text.lower())
        result = []
        for token in doc:
            if token.text in self.nlp.Defaults.stop_words:
                continue
            if token.is_punct:
                continue
            if token.lemma_ == '-PRON-':
                continue
            result.append(token.lemma_)
        return " ".join(result)

    # Map correct use interest with NLP
    def get_matching_interest(self, text):
        highestScore = 0
        match = ""
        for interest in self.audiences.get_interests():
            score = self.calculate_similarity(text, interest.replace(',', ' '))
            if score > highestScore:
                highestScore = score
                match = interest
        return match

    def get_matching_category(self, text):
        highestScore = 0
        match = ""
        for category in self.market.get_categories():
            score = self.calculate_similarity(text, category.replace('.', ' ').replace('_', ' '))
            if score > highestScore:
                highestScore = score
                match = category
        return match

    # Generate marketing method [Rule Based]
    def get_marketing_methods(self, age, budget):
        if int(budget) > 500000 and int(age) > 50:
            self.get_method_combination(int(budget))
            return ["TV", "Radio", "Newspaper"]
        elif int(budget) > 500000 and int(age) < 50:
            return ["TV", "Social media", "Event"]
        elif int(budget) > 100000 and int(age) > 50:
            return ["Radio", "Newspaper"]
        elif int(budget) > 100000 and int(age) < 50:
            return ["TV", "Social media", "Banners", "Online"]
        elif int(budget) > 50000:
            return ["Social media", "Online", "Banners", "Word of mouth"]
        else:
            return ["Social media", "Online"]

    # Marketing method combination for TV and radio
    def get_method_combination(self, budget):
        budget = budget / 100
        tv = budget / 100
        budget = budget - tv
        radio = budget / 50
        budget = budget - radio

    def generate(self):

        points = []
        methods = []

        mappedInterest = self.get_matching_interest(self.ptype + " " + self.description)

        # Get similar interests
        interests = self.audiences.get_similar_interests(mappedInterest)
        points.append(
            "Following interested has been identified as relavent interests for your product/service; " + ', '.join(
                interests[0:5]) + ". Make sure to target the above interests when running social media campaigns.")

        # Get targeted TV programs
        tvPrograms = self.audiences.get_target_tv_programs(mappedInterest
                                                           )
        points.append(
            "When running TV advertisements ensure to run the ads during these programs: " + ', '.join(tvPrograms[0:5]))

        # Get spending abilities of audiences
        spending = self.audiences.get_spending(mappedInterest)
        points.append(
            "The following spending habbits has been identified for the given audience category. Majority of the "
            "audience does spending " +
            spending[0] + ". And they spend on " + ', '.join(
                spending[1:3]) + " as well. Make sure to align your campaign for this group.")

        # Get general demographics
        demographics = self.audiences.get_demographics(mappedInterest)
        for demographic in demographics:
            key = demographic.split('_')[0]
            value = demographic.split('_')[1]
            if key is 'Gender':
                points.append("Majority of your audience is " + value)
            elif key is 'Village - town':
                points.append(
                    "Majority of your audience are from " + value + ". You can consider consulting regional marketing "
                                                                    "agents. As we suggest")

        # Predict campaign outcome
        outcomeRate = self.outcomes.predict(100, 20, 30)

        # Get matching category
        category = self.get_matching_category(self.ptype)
        points.append("Your product belongs to " + category.replace('.', ' ').replace('_', ' '))

        # Get matching competitors
        competitors = self.market.getComp(category, int(self.price))
        points.append("We have identified the following are your competitors. " + ', '.join(competitors))

        # Get price range
        price_range = self.market.getPrice(category)
        price_range_1 = round(price_range[0][0])
        price_range_2 = round(price_range[0][1])
        medium_price = round((price_range_1 + price_range_2) / 2)
        points.append("We have identified the following average price for your product " + str(medium_price))

        # Get age range for a given audience type
        age_range = self.durations.get_age_range(self.audience)
        age_range_1 = round(age_range[0][1])
        age_range_2 = round(age_range[0][0])
        points.append(
            "The medium age group for your chosen audience is " + str(age_range_1) + "-" + str(age_range_2) + ". ")

        # Get campaign duration
        duration_1 = round(float(self.durations.get_duration(age_range_1, self.audience)))
        duration_2 = round(float(self.durations.get_duration(age_range_2, self.audience)))
        points.append(
            "You need to run your campaign approximately for " + str(duration_1) + "-" + str(
                duration_2) + " days in order to "
                              "reach the get the "
                              "maximum audience "
                              "conversion.")

        # Get marketing methods
        methods.append(self.get_marketing_methods(age_range, self.budget))

        pointsArr = {
            "plan": points,
            "methods": methods
        }

        return pointsArr
