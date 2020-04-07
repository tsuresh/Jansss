import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import confusion_matrix
from sklearn.model_selection import cross_val_score

df = pd.read_csv("advertising.csv")
df.info()
df.head()

numerical_columns = [col for col in df.columns if (df[col].dtype=='int64') and col != 'Exited']
 
#graph analysis for age 
plt.hist(df["Age"],bins=20)
plt.xlabel("Age")
plt.ylabel("Frequency")

#age and the possibility to click the addvertisement
plt.scatter(x=range(len(list(df["Age"][df["Clicked on Ad"]==1]))),y=df["Age"][df["Clicked on Ad"]==1],s=1)
plt.ylabel("Age")
plt.title("People who did click (Clicked on Ad = 1)")


df= pd.get_dummies(df, prefix='', prefix_sep='')

feat = df.drop(columns=['Clicked on Ad'],axis=1)
label = df["Clicked on Ad"]
X_train, X_test, y_train, y_test = train_test_split(feat, label, test_size=0.3)

sc_x = StandardScaler()
X_train = sc_x.fit_transform(X_train)
X_test = sc_x.fit_transform(X_test)

support_vector_classifier = SVC(kernel='rbf')
support_vector_classifier.fit(X_train,y_train)
y_pred_svc = support_vector_classifier.predict(X_test)

#get the matrix of prediction according to the prediction
cm_support_vector_classifier = confusion_matrix(y_test,y_pred_svc)
print("TP","FN")
print("FP","TN")
print(cm_support_vector_classifier,end='\n\n') 


#get accuracy
numerator = cm_support_vector_classifier[0][0] + cm_support_vector_classifier[1][1]
denominator = sum(cm_support_vector_classifier[0]) + sum(cm_support_vector_classifier[1])
acc_svc = (numerator/denominator) * 100
print("Accuracy : ",round(acc_svc,2),"%")

#cross validation
cross_val_svc = cross_val_score(estimator = SVC(kernel = 'rbf'), X = X_train, y = y_train, cv = 50)
print("Cross Validation Accuracy : ",round(cross_val_svc.mean() * 100 , 2),"%")