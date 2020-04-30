from models.audiencePrediction import Audience
from models.outcomesPrediction import Outcomes

# Predict audiences [audience dropdown, ]

# Get user interests [desc]
audiences = Audience()

# Get spending abilities

# Campaign durations [occupations, ]

# Predict competitors [category, price] - DONE

# Get marketing methods and outcome
outcomes = Outcomes()

print(outcomes.predict(1000, 20, 30))
