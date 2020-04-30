import pandas as pd
df = pd.read_csv("2019-Nov.csv")
df2 = pd.read_csv("2019-Oct.csv")

import numpy as np

data = np.concatenate([df, df2])

d=pd.DataFrame(data)
d = d.drop_duplicates(subset=['product_id'], keep='first')

d.columns = ['0', '1','2','3','4','5','6','7','8']   
dataset = d[['4','5','6']]

dataset.columns = ['category', 'brand','price']   
dd = dataset
dd = dd.dropna(how='any',axis=0)

dd.to_csv('final.csv')