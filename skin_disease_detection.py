import os
import cv2
import pandas as pd
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow import keras
from keras.models import load_model,Model
from keras.layers import Dense,Dropout
from keras.optimizers import Adamax
from keras.applications import EfficientNetB2
from keras import regularizers
import numpy as np


model_path = 'EfficientNetB3-skin disease-83.79.h5'
csv_path = 'class_dict.csv'
model = load_model(model_path)
class_df = pd.read_csv(csv_path)
