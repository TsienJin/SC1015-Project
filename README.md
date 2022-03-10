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

Coefficients of regression: ["sleep hours (sr.1)", "body temperature (t)", "blood oxygen (bo)", "heart rate (hr)"]

-----Predicting for sr-----
Train Set : (472, 1) (472, 4)
Test Set  : (158, 1) (158, 4)
Intercept of Regression 	: b =  [18.64486395]
Coefficients of Regression 	: a =  [[-1.93603405  5.74601578 -2.5387048   1.5012626 ]]

Goodness of Fit of Model 	Train Dataset
Explained Variance (R^2) 	: 0.9663021219586815
Mean Squared Error (MSE) 	: 12.533129148818286

Goodness of Fit of Model 	Test Dataset
Explained Variance (R^2) 	: 0.9673671714544374
Mean Squared Error (MSE) 	: 12.481483611174493

-----Predicting for rr-----
Train Set : (472, 1) (472, 4)
Test Set  : (158, 1) (158, 4)
Intercept of Regression 	: b =  [-4.]
Coefficients of Regression 	: a =  [[ 2.34047540e-16  8.88178420e-16 -4.30211422e-16  4.00000000e-01]]

Goodness of Fit of Model 	Train Dataset
Explained Variance (R^2) 	: 1.0
Mean Squared Error (MSE) 	: 7.674680671133234e-30

Goodness of Fit of Model 	Test Dataset
Explained Variance (R^2) 	: 1.0
Mean Squared Error (MSE) 	: 8.707426700667371e-30

-----Predicting for lm-----
Train Set : (472, 1) (472, 4)
Test Set  : (158, 1) (158, 4)
Intercept of Regression 	: b =  [6.27953374]
Coefficients of Regression 	: a =  [[-0.14477237  1.67989071 -0.83866685  0.39445008]]

Goodness of Fit of Model 	Train Dataset
Explained Variance (R^2) 	: 0.9869196438210048
Mean Squared Error (MSE) 	: 0.24434737622957178

Goodness of Fit of Model 	Test Dataset
Explained Variance (R^2) 	: 0.9854463474501931
Mean Squared Error (MSE) 	: 0.2586411436290266

-----Predicting for rem-----
Train Set : (472, 1) (472, 4)
Test Set  : (158, 1) (158, 4)
Intercept of Regression 	: b =  [111.40541977]
Coefficients of Regression 	: a =  [[-2.28684459 13.28375941 -5.6985275   0.84802542]]

Goodness of Fit of Model 	Train Dataset
Explained Variance (R^2) 	: 0.9126030402869361
Mean Squared Error (MSE) 	: 12.694074216049462

Goodness of Fit of Model 	Test Dataset
Explained Variance (R^2) 	: 0.9004872294536055
Mean Squared Error (MSE) 	: 12.49118411191302

-----Predicting for sl-----
Train Set : (472, 1) (472, 4)
Test Set  : (158, 1) (158, 4)
Intercept of Regression 	: b =  [5.29887679]
Coefficients of Regression 	: a =  [[-0.18860152  0.00624064 -0.07371507  0.06038059]]

Goodness of Fit of Model 	Train Dataset
Explained Variance (R^2) 	: 0.9947398070517717
Mean Squared Error (MSE) 	: 0.01033052840446127

Goodness of Fit of Model 	Test Dataset
Explained Variance (R^2) 	: 0.9948134847557526
Mean Squared Error (MSE) 	: 0.010665764023951757
