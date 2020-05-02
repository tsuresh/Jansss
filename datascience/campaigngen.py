import spacy

from models.audiencePrediction import Audience
from models.durationPrediction import DurationPrediction
from models.outcomesPrediction import Outcomes


class CampaignGen:

    def __init__(self, goal, name, type, budget, industry, audience, location, price, description):
        # Initialise NLP libraries here
        self.nlp = spacy.load("en_core_web_sm")

        # Initialise models here
        self.audiences = Audience()
        self.durations = DurationPrediction()
        self.outcomes = Outcomes()
        # self.market = MarketPrediction()

        self.goal = goal
        self.name = name
        self.type = type
        self.budget = budget
        self.industry = industry
        self.audience = audience
        self.location = location
        self.price = price
        self.description = description

    def calculate_similarity(self, text1, text2):
        base = self.nlp(self.process_text(text1))
        compare = self.nlp(self.process_text(text2))
        return base.similarity(compare)

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

    def get_matching_interest(self, text):
        highestScore = 0
        match = ""
        for interest in self.audiences.get_interests():
            score = self.calculate_similarity(text, interest)
            if score > highestScore:
                highestScore = score
                match = interest
        return match

    def get_marketing_method(self, age, budget):
        if budget > 200000:
            return "TV"
        elif budget > 100000:
            return "radio"
        elif budget > 50000:
            return "newspaper"

    def get_method_combination(self, budget):
        budget = budget / 100
        tv = budget / 100
        budget = budget - tv
        radio = budget / 50
        budget = budget - radio

    def generate(self):

        points = []

        mappedInterest = self.get_matching_interest(self.description)

        # Get similar interests
        interests = self.audiences.get_similar_interests(mappedInterest)
        points.append(
            "Following interested has been identified as relavent interests for your product/service; " + ', '.join(
                interests[0:5]) + ". Make sure to target the above interests when running social media campaigns.")

        # Get targeted TV programs
        tvPrograms = self.audiences.get_target_tv_programs(mappedInterest)
        points.append(
            "When running TV advertisements ensure to run the ads during these programs: " + ', '.join(tvPrograms[0:5]))

        # Get spending abilities of audiences
        spending = self.audiences.get_spending(mappedInterest)
        points.append(
            "The following spending habbits has been identified for the given audience category. Majority of the audience does spending " +
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
                    "Majority of your audience are from " + value + ". You can consider consulting regional marketing agents. As we suggest")

        # Predict campaign outcome
        outcomeRate = self.outcomes.predict(100, 20, 30)

        # Get competitors
        # self.market.getPrice("electronics.smartphone")

        # Get price range

        # Get age range for a given audience type
        age_range = self.durations.get_age_range(self.audience)
        points.append("The medium age group for your chosen audience is " + age_range + ". ")

        # Get campaign duration
        duration = self.durations.get_duration(round(float(age_range)), self.audience)
        points.append(
            "You need to run your campaign approximately for " + duration + " days in order to reach the get the maximum audience conversion.")

        print(points)
