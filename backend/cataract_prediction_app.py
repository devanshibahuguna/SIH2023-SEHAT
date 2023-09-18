import numpy as np
from tensorflow import keras
from keras.preprocessing import image
from keras.models import load_model

# Load the pre-trained model
loaded_model = load_model("my_model.h5")  # Replace with your model's filename

# Function to preprocess the image
def preprocess_image(image_path, target_size):
    img = image.load_img(image_path, target_size=target_size)
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img / 255.0  # Normalize the pixel values to [0, 1] if your model expects this
    return img

# Function to make predictions
def predict_cataract(model, image_path, target_size):
    img = preprocess_image(image_path, target_size)
    prediction = model.predict(img)
    return prediction[0]  # Extract the prediction for the single input image

# Specify the path to the image you want to classify
image_path_to_predict = "0_left.jpg"  # Replace with the actual image path
target_size = (224, 224)

# Make a prediction
prediction = predict_cataract(loaded_model, image_path_to_predict, target_size)

# Determine the result (e.g., "Cataract" or "Normal") based on the prediction threshold
threshold = 0.65  # Adjust this threshold as needed
result = "Cataract" if prediction >= threshold else "Normal"

print(f"The image is classified as: {result}")
#glaucoma is when only the iris area is covered