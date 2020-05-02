import pandas as pd


class MarketPrediction:

    def __init__(self):
        self.df = pd.read_csv("datasets/final.csv")
        self.df = pd.DataFrame(self.df)

    def getComp(self, category, price):
        fil = []
        for row in self.df.itertuples(index=True, name='Pandas'):
            if row.category == category:
                fil.append([row.brand, row.price])
        df2 = pd.DataFrame(fil)
        df2.columns = ['Brand', 'Price']

        pred = df2.iloc[(df2['Price'] - price).abs().argsort()]
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

    def getPrice(self, category):
        priceRange = []
        for row in self.df.itertuples(index=True, name='Pandas'):
            if row.category == category:
                priceRange.append([row.category, row.brand, row.price])
        priceRange = pd.DataFrame(priceRange)
        priceRange.columns = ['Category', 'Brand', 'Price']
        res = tuple((priceRange.Price.min(), priceRange.Price.max()))
        res = pd.DataFrame(res)
        return res.to_json()
