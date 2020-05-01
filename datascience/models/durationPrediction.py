import pandas as pd


class DurationPrediction:

    def __init__(self):
        self.df = pd.read_csv("datasets/durations.csv")
        self.df = pd.DataFrame(self.df)
        self.data = []
        for row in self.df.itertuples(index=True, name='Pandas'):
            if row.pdays != -1:
                self.data.append(row)
        self.data = pd.DataFrame(self.data)

    def get_duration(self, age, job):
        if job == 'admin':
            job = 'admin.'

        a = (age // 10) * 10
        b = a + 10
        filtured = []
        for row in self.data.itertuples(index=True, name='Pandas'):
            if a < row.age < b and row.job == job:
                filtured.append(row)
        x = pd.DataFrame(filtured)
        if int(x.size) != 0:
            filtured = pd.DataFrame(filtured)
            duration = filtured.loc[:, "pdays"].median()
            return str(duration)
        else:
            return 'Invalid age range!!'

    def getAgeRange(self, job):
        if job == 'admin':
            job = 'admin.'

        filtured = []
        for row in self.data.itertuples(index=True, name='Pandas'):
            if (row.job == job):
                filtured.append(row)
        x = pd.DataFrame(filtured)
        filtured = pd.DataFrame(filtured)
        ageMed = filtured.loc[:, "age"].median()
        return str(ageMed)
