# How can we determine stress level from sleeping data?

Link to dataset: [Human Stress Detection in and through Sleep | Kaggle](https://www.kaggle.com/laavanya/human-stress-detection-in-and-through-sleep?select=SaYoPillow.csv)



## Dataset Headers

**sr** -- Snoring rate
**rr** -- Respiration rate
**t** -- Body temperature
**lm** -- Limb movement
**bo** -- Blood oxygen
**rem** -- Eye movement
**sr** -- Sleeping hours
**hr** -- Heart rate
**sl** -- Stress level

## Exploratory Data Analysis

~~~~~Predicting for sr~~~~~
Train Set : (472, 1) (472, 4)
Test Set  : (158, 1) (158, 4)
Intercept of Regression     : b =  [-85.63404042]
Coefficients of Regression     : a =  [[-1.92671402  3.44151854 -2.77159628  1.50229246]]

Goodness of Fit of Model     Train Dataset
Explained Variance (R^2)     : 0.966892961289167
Mean Squared Error (MSE)     : 12.448447818068825

Goodness of Fit of Model     Test Dataset
Explained Variance (R^2)     : 0.9656128279416544
Mean Squared Error (MSE)     : 12.746946933880063

~~~~~Predicting for rr~~~~~
Train Set : (472, 1) (472, 4)
Test Set  : (158, 1) (158, 4)
Intercept of Regression     : b =  [-4.]
Coefficients of Regression     : a =  [[ 2.07930750e-15 -6.66133815e-16 -2.35922393e-16  4.00000000e-01]]

Goodness of Fit of Model     Train Dataset
Explained Variance (R^2)     : 1.0
Mean Squared Error (MSE)     : 2.8505956778494867e-29

Goodness of Fit of Model     Test Dataset
Explained Variance (R^2)     : 1.0
Mean Squared Error (MSE)     : 2.787974237186158e-29

~~~~~Predicting for lm~~~~~
Train Set : (472, 1) (472, 4)
Test Set  : (158, 1) (158, 4)
Intercept of Regression     : b =  [-21.86623812]
Coefficients of Regression     : a =  [[-0.13227958  0.85334362 -0.77525628  0.39283942]]

Goodness of Fit of Model     Train Dataset
Explained Variance (R^2)     : 0.9864509343265749
Mean Squared Error (MSE)     : 0.2456991995804925

Goodness of Fit of Model     Test Dataset
Explained Variance (R^2)     : 0.9869853220312353
Mean Squared Error (MSE)     : 0.25091417510618824

~~~~~Predicting for rem~~~~~
Train Set : (472, 1) (472, 4)
Test Set  : (158, 1) (158, 4)
Intercept of Regression     : b =  [-121.19804392]
Coefficients of Regression     : a =  [[-2.19597676  7.0043358  -5.36103033  0.85715364]]

Goodness of Fit of Model     Train Dataset
Explained Variance (R^2)     : 0.9064247566355708
Mean Squared Error (MSE)     : 13.075436938061646

Goodness of Fit of Model     Test Dataset
Explained Variance (R^2)     : 0.9220706819226702
Mean Squared Error (MSE)     : 11.34213138942287

~~~~~Predicting for sl~~~~~
Train Set : (472, 1) (472, 4)
Test Set  : (158, 1) (158, 4)
Intercept of Regression     : b =  [4.31796476]
Coefficients of Regression     : a =  [[-0.19212247  0.05239107 -0.11484245  0.06149287]]

Goodness of Fit of Model     Train Dataset
Explained Variance (R^2)     : 0.9946817302241936
Mean Squared Error (MSE)     : 0.01057771927400055

Goodness of Fit of Model     Test Dataset
Explained Variance (R^2)     : 0.9951938707787839
Mean Squared Error (MSE)     : 0.009623039696894159
