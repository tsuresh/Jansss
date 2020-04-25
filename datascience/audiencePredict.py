# -*- coding: utf-8 -*-
"""sdgp interest preduction

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1p3XljBYzqc8lw-PzTf9TEVixtF_l8VAa
"""

import warnings

import numpy as np
import pandas as pd

warnings.filterwarnings("ignore")
from sklearn.model_selection import KFold, train_test_split, cross_val_score
from sklearn.linear_model import LogisticRegression


class Audience:

    def __init__(self):
        self.data = pd.read_csv('responses.csv')

        self.data = self.data.dropna()

        # Music categories
        self.music_preference = self.data.iloc[:, 1:19]

        # TV Program preferences
        self.tv_program_preference = self.data.iloc[:, 20:31]

        # User phobias
        self.user_phobias = self.data.iloc[:, 63:73]

        # General user interests
        self.general_interests = self.data.iloc[:, 31:63]
        self.concat_interests = [self.general_interests, self.data.iloc[:, 0:1],
                                 self.data.iloc[:, 19:20]]  # Add music and movies to general interests
        self.general_interests = pd.concat(self.concat_interests, axis=1)

        # Health habbits
        self.health_behaviours = self.data.iloc[:, 73:76]

        # Personal data
        self.personal_data = self.data.iloc[:, 76:133]

        # Spending ability
        self.spending_ability = self.data.iloc[:, 133:140]

        # User general data
        self.user_data = self.data.iloc[:, 140:150]

    def getSimilarInterests(self, interest):
        x = self.general_interests.drop(interest, axis=1)
        y = self.general_interests[interest]
        return self.predictResults(x, y)

    def getTargetTvPrograms(self, interest):
        dfs = [self.general_interests[interest], self.tv_program_preference]
        new_data = pd.concat(dfs, axis=1)
        x = new_data.drop(interest, axis=1)
        y = new_data[interest]
        return self.predictResults(x, y)

    def getMusicPreferences(self, interest):
        dfs = [self.general_interests[interest], self.music_preference]
        new_data = pd.concat(dfs, axis=1)
        x = new_data.drop(interest, axis=1)
        y = new_data[interest]
        return self.predictResults(x, y)

    def getPhobias(self, interest):
        dfs = [self.general_interests[interest], self.user_phobias]
        new_data = pd.concat(dfs, axis=1)
        x = new_data.drop(interest, axis=1)
        y = new_data[interest]
        return self.predictResults(x, y)

    def predictResults(self, x, y):
        x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=.50, random_state=115)
        kf = KFold(n_splits=5)
        kf.split(x_train)

        # Predict interests by logstic regression
        logreg = LogisticRegression(C=.01)
        logreg.fit(x_train, y_train)
        print('Average accuracy score on cv (KFold) set: {:.3f}'.format(
            np.mean(cross_val_score(logreg, x_train, y_train, cv=kf))))
        print('Accuracy score on test set is: {:.3f}'.format(logreg.score(x_test, y_test)))

        relavencies = pd.DataFrame(data=logreg.coef_[0], index=[x_train.columns], columns=['Relavency'])
        return relavencies.sort_values(by='Relavency', ascending=True)
