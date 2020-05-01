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
        self.data = pd.read_csv('datasets/audiences.csv')

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

        self.ageDf = self.data.iloc[:, 140:141]

        self.age_threshold = 5

    def get_similar_interests_age(self, age):
        dfs = [self.ageDf, self.general_interests]
        new_data = pd.concat(dfs, axis=1)
        new_data = new_data[(new_data['Age'] > age - self.age_threshold) & (new_data['Age'] < age + self.age_threshold)]
        x = new_data.drop('Age', axis=1)
        y = new_data['Age']
        return self.make_prediction(x, y)

    def get_similar_interests(self, interest):
        x = self.general_interests.drop(interest, axis=1)
        y = self.general_interests[interest]
        return self.make_prediction(x, y)

    def get_target_tv_programs(self, interest):
        dfs = [self.general_interests[interest], self.tv_program_preference]
        new_data = pd.concat(dfs, axis=1)
        x = new_data.drop(interest, axis=1)
        y = new_data[interest]
        return self.make_prediction(x, y)

    def get_target_tv_programs_age(self, age):
        dfs = [self.ageDf, self.tv_program_preference]
        new_data = pd.concat(dfs, axis=1)
        new_data = new_data[(new_data['Age'] > age - self.age_threshold) & (new_data['Age'] < age + self.age_threshold)]
        x = new_data.drop('Age', axis=1)
        y = new_data['Age']
        return self.make_prediction(x, y)

    def get_music_preferences(self, interest):
        dfs = [self.general_interests[interest], self.music_preference]
        new_data = pd.concat(dfs, axis=1)
        x = new_data.drop(interest, axis=1)
        y = new_data[interest]
        return self.make_prediction(x, y)

    def get_music_preferences_age(self, age):
        dfs = [self.ageDf, self.music_preference]
        new_data = pd.concat(dfs, axis=1)
        new_data = new_data[(new_data['Age'] > age - self.age_threshold) & (new_data['Age'] < age + self.age_threshold)]
        x = new_data.drop('Age', axis=1)
        y = new_data['Age']
        return self.make_prediction(x, y)

    def get_phobias(self, interest):
        dfs = [self.general_interests[interest], self.user_phobias]
        new_data = pd.concat(dfs, axis=1)
        x = new_data.drop(interest, axis=1)
        y = new_data[interest]
        return self.make_prediction(x, y)

    def get_phobias_age(self, age):
        dfs = [self.ageDf, self.user_phobias]
        new_data = pd.concat(dfs, axis=1)
        new_data = new_data[(new_data['Age'] > age - self.age_threshold) & (new_data['Age'] < age + self.age_threshold)]
        x = new_data.drop('Age', axis=1)
        y = new_data['Age']
        return self.make_prediction(x, y)

    def get_spending(self, interest):
        dfs = [self.general_interests[interest], self.spending_ability]
        new_data = pd.concat(dfs, axis=1)
        x = new_data.drop(interest, axis=1)
        y = new_data[interest]
        return self.make_prediction(x, y)

    def get_spending_Age(self, age):
        dfs = [self.ageDf, self.spending_ability]
        new_data = pd.concat(dfs, axis=1)
        new_data = new_data[(new_data['Age'] > age - self.age_threshold) & (new_data['Age'] < age + self.age_threshold)]
        x = new_data.drop('Age', axis=1)
        y = new_data['Age']
        return self.make_prediction(x, y)

    def get_demographics(self, interest):
        dfs = [self.general_interests[interest], self.user_data]
        new_data = pd.concat(dfs, axis=1)
        return self.arrange_categorical(new_data, interest)

    def get_personal(self, interest):
        dfs = [self.general_interests[interest], self.personal_data]
        new_data = pd.concat(dfs, axis=1)
        return self.arrange_categorical(new_data, interest)

    def make_prediction(self, x, y):
        x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=.50, random_state=115)
        kf = KFold(n_splits=5)
        kf.split(x_train)

        # Predict interests by logstic regression
        logreg = LogisticRegression(C=.01)
        logreg.fit(x_train, y_train)
        print('Average accuracy score on cv (KFold) set: {:.3f}'.format(
            np.mean(cross_val_score(logreg, x_train, y_train, cv=kf))))
        print('Accuracy score on test set is: {:.3f}'.format(logreg.score(x_test, y_test)))

        relavencies = pd.DataFrame(data=logreg.coef_[0], index=[x_train.columns], columns=['Relavency']).sort_values(
            by='Relavency', ascending=True)
        keys = []
        for key in relavencies.to_dict()['Relavency']:
            keys.append(key[0])
        return keys

    def arrange_categorical(self, df, input_var):
        cols_cats = [col for col in df.columns if df[col].dtype == 'object']
        if cols_cats:
            df_dummies = pd.get_dummies(df[cols_cats])
            df_dummies[input_var] = df[input_var]
            return self.make_prediction(df_dummies.drop(input_var, axis=1), df_dummies[input_var])
