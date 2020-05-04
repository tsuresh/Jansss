import flask
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from flask import request, send_file

csv = r'Historical Product Demand.csv'
df = pd.read_csv(csv)
# df.head(10)

app = flask.Flask(__name__)

@app.route('/demand', methods=['POST'])
def getDemand():
    req = request.get_json(force=True)
    cat = req['category']
    groupByCategory = df.groupby(['Product_Category']).size().reset_index(name='counts').sort_values(['counts'],ascending=False)
    # groupByCategory.head(10)

    categoryDf = df.loc[df['Product_Category'] == cat].sort_values(['Date'],ascending=False)
    categoryDf = categoryDf.drop(columns=['Warehouse','Product_Code','Product_Category'])
    # categoryDf.describe()

    categoryDf.index=pd.to_datetime(categoryDf.Date,format='%Y/%m/%d')
    categoryDf.drop(columns=['Date'],inplace=True)
    categoryDf['Order_Demand'] = categoryDf['Order_Demand'].astype(str)
    categoryDf['Order_Demand'] = categoryDf['Order_Demand'].map(lambda x: x.lstrip('(').rstrip(')'))
    categoryDf['Order_Demand'] = categoryDf['Order_Demand'].astype(int)

    categoryDemand = categoryDf.resample('M').sum()
    # categoryDemand.head(10)

    # categoryDemand.drop(categoryDemand.loc[categoryDemand['Order_Demand']==100000].index,inplace=True)
    # categoryDemand.Order_Demand.plot(figsize=(13,6), title= 'Product 1359 Demand', fontsize=14,color="Green")

    train = categoryDemand[:'2016-03-31']
    test = categoryDemand['2016-04-30':]

    # train.Order_Demand.plot(figsize=(13,6), title= 'Product 1359 - Train and Test', fontsize=12,color="Green")
    # test.Order_Demand.plot(figsize=(13,6), title= 'Product 1359 - Train and Test', fontsize=12)

    from statsmodels.tsa.api import SimpleExpSmoothing
    y_hat_avg = test.copy()
    fit2 = SimpleExpSmoothing(np.asarray(train['Order_Demand'])).fit(smoothing_level=0.6,optimized=False)
    y_hat_avg['SES'] = fit2.forecast(len(test))
    plt.figure(figsize=(14,6))
    plt.plot(train['Order_Demand'], label='Train',color="Green")
    plt.plot(test['Order_Demand'], label='Test')
    plt.plot(y_hat_avg['SES'], label='SES',color="Red")
    plt.title("Simple Smoothing")
    plt.legend(loc='best')

    # # Exponential Smoothing

    # exp_hat_avg = test.copy()
    # fit1 = ExponentialSmoothing(np.asarray(train['Order_Demand']) ,seasonal_periods=4 ,trend='additive', seasonal='additive',).fit()
    # exp_hat_avg['Exp_Smooth'] = fit1.forecast(len(test))
    # plt.figure(figsize=(14,6))
    # plt.plot( train['Order_Demand'], label='Train',color="Green")
    # plt.plot(test['Order_Demand'], label='Test')
    # plt.plot(exp_hat_avg['Exp_Smooth'], label='Exp_Smooth',color="Red")
    # plt.legend(loc='best')
    # plt.title("Exponential Smoothing");
    plt.savefig('demand.png')
    plt.show()

    import matplotlib.image as mpimg
    img = mpimg.imread('demand.png')
    plt.imshow(img)

    return send_file(img, mimetype='image/gif')

if __name__ == '__main__':
    app.run(port=5000, debug=True)