import pandas as pd
import flask
from flask import Flask, request, jsonify

df = pd.read_csv("bank.csv")
# df.info()
# df.head()
df = pd.DataFrame(df)

data = []
for row in df.itertuples(index=True, name='Pandas'):
    if row.pdays != -1:
        data.append(row)
data = pd.DataFrame(data)

app = flask.Flask(__name__)

@app.route('/duration', methods=['POST'])
def getDuration():
    req = request.get_json(force=True)
    age = req['age']
    if req['job'] == 'admin':
        job = 'admin.'
    else:
        job = req['job']

    a = (age // 10) * 10
    b = a + 10

    filtured = []
    for row in data.itertuples(index=True, name='Pandas'):
        if (row.age > a and row.age < b and row.job == job):
            filtured.append(row)
    x = pd.DataFrame(filtured)
    if int(x.size) != 0:
        filtured = pd.DataFrame(filtured)
        duration = filtured.loc[:, "pdays"].median()
        return str(duration)
    else:
        return 'Invalid age range!!'

if __name__ == '__main__':
    app.run(port=5000, debug=True)
