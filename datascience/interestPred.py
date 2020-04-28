# -*- coding: utf-8 -*-
"""SDGP Data Science.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1VfcMyIHm_EOIvCxZ-RWbCsIUWX3JkW5l
"""

import copy

import flask
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
from flask import jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return jsonify(
        message="SUCCESS",
        detail="Flask backend for SDGP"
    )


# Import user responses
data = pd.read_csv('responses.csv')
data = data.dropna()

# Categorize all data into data frames
music_preference = data.iloc[:, 0:19]
tv_program_preference = data.iloc[:, 19:31]
phobias = data.iloc[:, 63:73]
interests = data.iloc[:, 31:63]
health = data.iloc[:, 73:76]
personal = data.iloc[:, 76:133]
spending = data.iloc[:, 133:140]
demographics = data.iloc[:, 140:150]

# Health section
health['Smoking'].unique()
health['Smoking'] = health['Smoking'].map(
    {'never smoked': 1, 'tried smoking': 2, 'former smoker': 3, 'current smoker': 4})

health['Alcohol'].unique()
health['Alcohol'] = health['Alcohol'].map({'drink a lot': 1, 'social drinker': 2, 'never': 3})

# Personal section
personal['Punctuality'].unique()
personal['Punctuality'] = personal['Punctuality'].map(
    {'i am often early': 1, 'i am always on time': 2, 'i am often running late': 3})

personal['Lying'].unique()
personal['Lying'] = personal['Lying'].map(
    {'never': 1, 'only to avoid hurting someone': 2, 'sometimes': 3, 'everytime it suits me': 4})

personal['Internet usage'].unique()
personal['Internet usage'] = personal['Internet usage'].map(
    {'no time at all': 1, 'less than an hour a day': 2, 'few hours a day': 3, 'most of the day': 4})

# Demographics section
demographics['Gender'] = demographics['Gender'].map({'male': 1, 'female': 2})

demographics['Left - right handed'] = demographics['Left - right handed'].map({'left handed': 1, 'right handed': 2})

demographics['Education'].unique()
demographics['Education'] = demographics['Education'].map({'currently a primary school pupil': 1, 'primary school': 2,
                                                           'secondary school': 3, 'college/bachelor degree': 4,
                                                           'masters degree': 5, 'doctorate degree': 6})

demographics['Only child'] = demographics['Only child'].map({'yes': 1, 'no': 0})

demographics['Village - town'].unique()
demographics['Village - town'] = demographics['Village - town'].map({'village': 1, 'city': 2})

demographics['House - block of flats'].unique()
demographics['House - block of flats'] = demographics['House - block of flats'].map(
    {'block of flats': 1, 'house/bungalow': 2})


# Copied methods from internet (for plotting purposes)
def do_ploting(x, y, figsize):  # draw only 1 bar
    fig, ax = plt.subplots(figsize=figsize)
    ax.set_title("Correlation coefficient of the variables")
    sns.barplot(x=x, y=y, ax=ax)
    ax.set_ylabel("Correlation coefficients")


# Copied methods from internet (for plotting purposes)
def correlation_plot(var_of_interest, catFilters, numFilters, figsize=(10, 30)):
    global new_data
    # Set dataframe
    df_main = new_data

    # Set categorical filters
    df_main = setCatFilters(catFilters, df_main)
    # Set numerical filters
    df_main = setNumFilters(numFilters, df_main)

    def calc_corr(var_of_interest, df, cols, figsize):  # calculate correlation
        lbls = []
        vals = []
        for col in cols:
            lbls.append(col)
            vals.append(np.corrcoef(df[col], df[var_of_interest])[0, 1])
        corrs = pd.DataFrame({'features': lbls, 'corr_values': vals})
        corrs = corrs.sort_values(by='corr_values')
        # do_ploting(corrs.corr_values, corrs['features'], figsize)
        return corrs

    # imputing the set
    df = copy.deepcopy(df_main)
    # df.replace(mapping, inplace = True)
    mean_values = df.mean(axis=0)
    df.fillna(mean_values, inplace=True)

    # correlating non-categorical varibales
    cols_floats = [col for col in df.columns if df[col].dtype != 'object']
    print(cols_floats)
    cols_floats.remove(var_of_interest)
    corrs_one = calc_corr(var_of_interest, df, cols_floats, figsize)

    # correlating categorical variables
    cols_cats = [col for col in df.columns if df[col].dtype == 'object']
    if cols_cats:
        df_dummies = pd.get_dummies(df[cols_cats])
        cols_cats = df_dummies.columns
        df_dummies[var_of_interest] = df[var_of_interest]
        corrs_two = calc_corr(var_of_interest, df_dummies, cols_cats, (5, 10))
    else:
        corrs_two = 0

    return corrs_one


# Concat the entire dataset
dfs = [demographics, interests, phobias, health, personal, spending, music_preference, tv_program_preference]
new_data = pd.concat(dfs, axis=1)

new_data.head(5)


# Defined methods to get outputs
@app.route('/getAudiences', methods=['POST'])
def getCorrInterests():
    # input parameters
    interest = flask.request.args.get("interest")
    gender = flask.request.args.get("gender")
    age_bound_1 = flask.request.args.get("age_bound_1")
    age_bound_2 = flask.request.args.get("age_bound_2")

    cat_filters = []
    num_filters = []

    if gender == "female":
        cat_filters.append(
            ["Gender", 2]
        )
    elif gender == "male":
        cat_filters.append(
            ["Gender", 1]
        )

    if age_bound_1 is not None and age_bound_2 is not None:
        num_filters.append(
            ["Age", int(age_bound_1), int(age_bound_2)]
        )

    print(num_filters)
    print(cat_filters)

    data = correlation_plot(interest, cat_filters, num_filters)

    response = app.response_class(
        response=data.to_json(),
        status=200,
        mimetype='application/json'
    )
    return response

# Filters for categotical values
def setCatFilters(filters, filtered_ds):
    for filter in filters:
        filtered_ds = filtered_ds[filtered_ds[filter[0]] == filter[1]]
    return filtered_ds


# Filtes for numerical valus
def setNumFilters(filters, filtered_ds):
    for filter in filters:
        filtered_ds = filtered_ds[filtered_ds[filter[0]] >= filter[1]]
        filtered_ds = filtered_ds[filtered_ds[filter[0]] <= filter[2]]
    return filtered_ds


app.run()
