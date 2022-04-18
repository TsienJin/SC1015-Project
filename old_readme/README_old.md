# How can we determine stress level from sleeping data?

Link to dataset: [Human Stress Detection in and through Sleep | Kaggle](https://www.kaggle.com/laavanya/human-stress-detection-in-and-through-sleep?select=SaYoPillow.csv)



## Dataset Headers

**sr** -- Snoring rate
**rr** -- Respiration rate
**t** -- Body temperature
**lm** -- Limb movement
**bo** -- Blood oxygen
**rem** -- Eye movement
**sr.1** -- Sleeping hours
**hr** -- Heart rate
**sl** -- Stress level



## Exploratory Data Analysis

- We went to find the correlation of the different data columns of the data, namely "Snoring rate", "Respiration rate", "Body temperature", "Limb movement", "Blood oxygen", "Eye movement", "Sleeping hours", "Heart rate" and "Stress level"

- We have found that the correlation of the variables are very strong, with most of the |correlation| more than 0.95

- Since the correlation of the variables are very strong, it would mean that the other variables can be important in helping to predict the "Stress level"

- We then split the dataset into train and test dataset, with the ratio of 75% train dataset and 25% test dataset uniformly in random

- We have used linear regression to get the coefficients of the different data columns of the data to predict the "Stress level" for the train dataset, then tested it on the test dataset. For the train dataset, the Explained Variance (R^2) 	: 0.9998961615248196, and Mean Squared Error (MSE) 	: 0.00021075504075371282. For the test dataset, the Explained Variance (R^2) 	: 0.9998722412032275, and Mean Squared Error (MSE) 	: 0.0002441767229454771.

- This shows that the model fits the data very well, with very minimal error

- To cross validate the result, we have also used clustering, namely the K Means clustering algorithm.

- Since K means clustering algorithm is an unsupervised machine learning algorithm, we do not have to split the data set into training data and test data

- First we tried using the "Elbow method" to identify the optimum number of clusters for both the "Sleeping hours" with "Stress level", and "Body temperature" with "Stress level". The answer was 5, which was what we were loooking for as well

- We then used sk.learn's KMeans function, with 5 clusters (as we identified before), to fit both the "Sleeping hours" with "Stress level", and "Body temperature" with "Stress level". However, by plotting out the graphs, we discovered that the clustering of the dataset was not as acccurate as what we wanted, however, this may be due to the small datasize that we have which caused this inaccuracy

- We also tried using the "Elbow method" on the dataset as a whole, without splitting into "Sleeping hours" and "Body temperature", however, the result optimum number of clusters was 4, which was not what we expected.

- Nevertheless, we tried using the sk.learn KMeans function to fit the dataset into 4 clusters (as what "Elbow method" suggested), by plotting out the graph, expectedly, the clusters of the data points was worse than simply clustering "Sleeping hours" and "Body temperature".

Coefficients of regression: ["sleeping hours (sr.1)", "body temperature (t)", "blood oxygen (bo)", "heart rate (hr)"]

-----FOR ALL 8 COEFFICIENTS-----
["sr", "rr", "t", "lm", "bo", "rem", "sr.1", "hr"]
Intercept of Regression 	: b =  [2.30958516]
Coefficients of Regression 	: a =  [[ 0.00967718  0.01734862 -0.29588161 -0.07744968  0.04731092  0.03202785
  -0.11154598  0.04337155]]
  
-----Predicting for sr-----

Intercept of Regression 	: b =  [18.64486395]
Coefficients of Regression 	: a =  [[-1.93603405  5.74601578 -2.5387048   1.5012626 ]]

-----Predicting for rr-----

Intercept of Regression 	: b =  [-4.]
Coefficients of Regression 	: a =  [[ 2.34047540e-16  8.88178420e-16 -4.30211422e-16  4.00000000e-01]]

-----Predicting for lm-----

Intercept of Regression 	: b =  [6.27953374]
Coefficients of Regression 	: a =  [[-0.14477237  1.67989071 -0.83866685  0.39445008]]

-----Predicting for rem-----

Intercept of Regression 	: b =  [111.40541977]
Coefficients of Regression 	: a =  [[-2.28684459 13.28375941 -5.6985275   0.84802542]]

-----Predicting for sl-----

Intercept of Regression 	: b =  [5.29887679]
Coefficients of Regression 	: a =  [[-0.18860152  0.00624064 -0.07371507  0.06038059]]