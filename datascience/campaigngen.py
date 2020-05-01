from models.audiencePrediction import Audience
from models.durationPrediction import DurationPrediction
from models.outcomesPrediction import Outcomes

# Predict audiences [audience dropdown, ]

# Get user interests [desc]
audiences = Audience()

# Get spending abilities

# Campaign durations [occupations, ]
durations = DurationPrediction()

# Predict competitors [category, price] - DONE
# market = MarketPrediction()

# Get marketing methods and outcome
outcomes = Outcomes()

print(audiences.get_similar_interests("PC"))
