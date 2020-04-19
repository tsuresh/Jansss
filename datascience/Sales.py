import matplotlib.pyplot as plt
import pandas as pd
from sklearn import datasets, linear_model, metrics
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import flask
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/sales', methods=['POST'])
def predict():
    data = request.get_json(force=True)

    tv = data['tv']
    radio = data['radio']
    newspaper = data['newspaper']

    dataset = pd.read_csv("Category.csv")
    dataset = pd.DataFrame(dataset)

    data = []
    for i in range(len(dataset)):
        tv = (((dataset.loc[i, "TV"]) / dataset['TV'].max()) * 100)
        radio = (((dataset.loc[i, "radio"]) / dataset['radio'].max()) * 100)
        newspaper = (((dataset.loc[i, "newspaper"]) / dataset['newspaper'].max()) * 100)
        sales = (((dataset.loc[i, "sales"]) / dataset['sales'].max()) * 100)
        data.append([tv, radio, newspaper, sales])

    data = pd.DataFrame(data)
    data.columns = ['TV', 'RADIO', 'NEWSPAPER', 'SALES']

    X = data[['TV', 'RADIO', 'NEWSPAPER']].values
    y = data['SALES'].values

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.01)

    model = LinearRegression()
    model.fit(X_train, y_train)
    model.fit(X_test, y_test)

    # y_pred = model.predict(X_test)
    # df = pd.DataFrame({'Actual': y_test, 'Predicted': y_pred})

    # df.plot(kind='bar', figsize=(10, 8))
    # plt.grid(which='major', linestyle='-', linewidth='0.5', color='green')
    # plt.grid(which='minor', linestyle=':', linewidth='0.5', color='black')
    # plt.show()

    # print(f'Accuracy : {round((model.score(X_test, y_test)) * 100, 3)} %')
    predictedSales = model.predict([[tv, radio, newspaper]])
    success = predictedSales[0]
    successRate = str(round(success, 2)) + ' %'
    successRate

    return successRate


if __name__ == '__main__':
    app.run(port=5000, debug=True)