import pandas as pd
import flask
from flask import Flask, request, jsonify

df = pd.read_csv("final.csv")
# df.info()
# df.head()
df = pd.DataFrame(df)
fil = []

app = flask.Flask(__name__)
@app.route('/',methods=['POST'])
def get():
    data = request.get_json(force=True)
    category = data['category']
    price = data['price']

    for row in df.itertuples(index=True, name='Pandas'):
       if row.category == category:
        fil.append([row.brand ,row.price] )
    df2=pd.DataFrame(fil)
    df2.columns = ['Brand', 'Price']

    pred = df2.iloc[(df2['Price']-price).abs().argsort()]
    dd = pred.drop_duplicates(subset='Brand')
    dd = pd.DataFrame(dd)
    i = 0
    res = []
    for row in dd.itertuples(index=True, name='Pandas'):
        if i < 5:
            res.append([row.Brand, row.Price])
            i += 1
    res2 = pd.DataFrame(res)
    res2.columns = ['Brand', 'Price']
    return res2.to_json()

if __name__ == '__main__':
    app.run(port=5000, debug=True)
