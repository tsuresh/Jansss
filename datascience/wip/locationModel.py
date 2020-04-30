{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "(760, 239) (190, 239) (50, 239)\n",
      "Model: \"sequential_1\"\n",
      "_________________________________________________________________\n",
      "Layer (type)                 Output Shape              Param #   \n",
      "=================================================================\n",
      "dense_3 (Dense)              (None, 64)                15296     \n",
      "_________________________________________________________________\n",
      "dense_4 (Dense)              (None, 64)                4160      \n",
      "_________________________________________________________________\n",
      "dense_5 (Dense)              (None, 1)                 65        \n",
      "=================================================================\n",
      "Total params: 19,521\n",
      "Trainable params: 19,521\n",
      "Non-trainable params: 0\n",
      "_________________________________________________________________\n"
     ]
    }
   ],
   "source": [
    "import tensorflow as tf\n",
    "from tensorflow import keras\n",
    "from tensorflow.keras import layers\n",
    "import numpy as np \n",
    "import tensorflow as tf \n",
    "import matplotlib.pyplot as plt \n",
    "import pandas as pd\n",
    "import seaborn as sns\n",
    "\n",
    "dataset_path = keras.utils.get_file(\"advertising.csv\", \"/Users/jihanjeeth/advertising.csv\")\n",
    "dataset_path\n",
    "\n",
    "column_names = ['Age','Country','Clicked on Ad']\n",
    "raw_dataset = pd.read_csv(dataset_path)\n",
    "\n",
    "dataset = raw_dataset.copy()\n",
    "dataset.tail()\n",
    "dataset.isna().sum()\n",
    "\n",
    "dataset = pd.get_dummies(dataset, prefix='', prefix_sep='')\n",
    "dataset.tail()\n",
    "\n",
    "\n",
    "prediction_dataset = dataset.sample(frac=0.05,random_state=0)\n",
    "dataset2 = dataset.drop(prediction_dataset.index)\n",
    "train_dataset = dataset2.sample(frac=0.8,random_state=0)\n",
    "test_dataset = dataset2.drop(train_dataset.index)\n",
    "print(train_dataset.shape, test_dataset.shape,prediction_dataset.shape)\n",
    "\n",
    "\n",
    "train_stats = train_dataset.describe()\n",
    "train_stats = train_stats.transpose()\n",
    "train_stats\n",
    "\n",
    "train_labels = train_dataset.pop('Clicked on Ad')\n",
    "test_labels = test_dataset.pop('Clicked on Ad')\n",
    "prediction_labels = prediction_dataset.pop('Clicked on Ad')\n",
    "\n",
    "def build_model():\n",
    "  model = keras.Sequential([\n",
    "    layers.Dense(64, activation='relu', input_shape=[len(train_dataset.keys())]),\n",
    "    layers.Dense(64, activation='relu'),\n",
    "    layers.Dense(1)\n",
    "  ])\n",
    "\n",
    "  optimizer = tf.keras.optimizers.RMSprop(0.001)\n",
    "\n",
    "  model.compile(loss='mse',\n",
    "                optimizer=optimizer,\n",
    "                metrics=['mae', 'mse'])\n",
    "  return model\n",
    "\n",
    "model = build_model()\n",
    "\n",
    "model.summary()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {},
   "outputs": [
    {
     "ename": "AttributeError",
     "evalue": "'Sequential' object has no attribute 'accuracy'",
     "output_type": "error",
     "traceback": [
      "\u001b[0;31m---------------------------------------------------------------------------\u001b[0m",
      "\u001b[0;31mAttributeError\u001b[0m                            Traceback (most recent call last)",
      "\u001b[0;32m<ipython-input-2-77f9e46ca115>\u001b[0m in \u001b[0;36m<module>\u001b[0;34m\u001b[0m\n\u001b[0;32m----> 1\u001b[0;31m \u001b[0mprint\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mmodel\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0maccuracy\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m",
      "\u001b[0;31mAttributeError\u001b[0m: 'Sequential' object has no attribute 'accuracy'"
     ]
    }
   ],
   "source": [
    "loss, accuracy = model.evaluate(test_ds)\n",
    "print(\"Accuracy\", accuracy)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.7.6"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
