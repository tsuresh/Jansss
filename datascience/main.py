from __future__ import absolute_import, division, print_function, unicode_literals

import pandas as pd
import tensorflow as tf
from sklearn.model_selection import train_test_split
from tensorflow import feature_column
from tensorflow.keras import layers

URL = 'audiences.csv'
dataframe = pd.read_csv(URL)
dataframe.head()

train, test = train_test_split(dataframe, test_size=0.2)
train, val = train_test_split(train, test_size=0.2)
print(len(train), 'train examples')
print(len(val), 'validation examples')
print(len(test), 'test examples')


# A utility method to create a tf.data dataset from a Pandas Dataframe
def df_to_dataset(dataframe, shuffle=True, batch_size=32):
    dataframe = dataframe.copy()
    labels = dataframe.pop('Approved_Conversion')
    ds = tf.data.Dataset.from_tensor_slices((dict(dataframe), labels))
    if shuffle:
        ds = ds.shuffle(buffer_size=len(dataframe))
    ds = ds.batch(batch_size)
    return ds


batch_size = 5  # A small batch sized is used for demonstration purposes
train_ds = df_to_dataset(train, batch_size=batch_size)

for feature_batch, label_batch in train_ds.take(1):
    print('Every feature:', list(feature_batch.keys()))
    print('A batch of interests:', feature_batch['interest'])
    print('A batch of targets:', label_batch)

# We will use this batch to demonstrate several types of feature columns
example_batch = next(iter(train_ds))[0]


# A utility method to create a feature column
# and to transform a batch of data
def demo(feature_column):
    feature_layer = layers.DenseFeatures(feature_column)
    print(feature_layer(example_batch).numpy())


feature_columns = []
# age column
age = feature_column.categorical_column_with_vocabulary_list(
    'age', ['30-34', '35-39', '40-44', '45-49'])
age_column = feature_column.indicator_column(age)
feature_columns.append(age_column)

# user interest
interest = feature_column.categorical_column_with_vocabulary_list(
    'interest', dataframe['interest'].unique())
interest_column = feature_column.embedding_column(interest, dimension=112)
feature_columns.append(interest_column)

# gender column
gender = feature_column.categorical_column_with_vocabulary_list(
    'gender', ['M', 'F'])
gender_column = feature_column.indicator_column(gender)
feature_columns.append(gender_column)

feature_layer = tf.keras.layers.DenseFeatures(feature_columns)

batch_size = 1144
train_ds = df_to_dataset(train, batch_size=batch_size)
val_ds = df_to_dataset(val, shuffle=False, batch_size=batch_size)
test_ds = df_to_dataset(test, shuffle=False, batch_size=batch_size)

model = tf.keras.Sequential([
    feature_layer,
    layers.Dense(128, activation='relu'),
    layers.Dense(128, activation='relu'),
    layers.Dense(1)
])

model.compile(optimizer='adam',
              loss=tf.keras.losses.BinaryCrossentropy(from_logits=True),
              metrics=['accuracy'])

model.fit(train_ds,
          validation_data=val_ds,
          epochs=5)

loss, accuracy = model.evaluate(test_ds)
print("Accuracy", accuracy)

print(test_ds)
