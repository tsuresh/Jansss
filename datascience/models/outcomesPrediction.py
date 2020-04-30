import pandas as pd
from sklearn.linear_model import LinearRegression
# %matplotlib inline
from sklearn.model_selection import train_test_split


class Outcomes:

    def __init__(self):
        self.dataset = pd.read_csv('../datasets/Category.csv')
        self.dataset.drop(self.dataset.columns[[0]], axis=1, inplace=True)

    def predict(self, tv, radio, newspaper):
        X = self.dataset[['TV', 'radio', 'newspaper']]
        y = self.dataset['sales']

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

        regressor = LinearRegression()
        regressor.fit(X_train, y_train)

        print(f'Accuracy : {round((regressor.score(X_test, y_test)) * 100, 3)} %')

        predict = regressor.predict([[1000, 49.6, 67.7]])

        return str(round(predict[0], 2)) + ' %'
