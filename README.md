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