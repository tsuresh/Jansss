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
        print(match)

    def generate(self):
        print("Test")
