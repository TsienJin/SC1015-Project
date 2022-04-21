# SC1015 Data Science and AI Project
#### Contributors
1. [imevahans · GitHub](https://github.com/imevahans)
2. [PehYuZe · GitHub](https://github.com/PehYuZe)
3. [TsienJin (Tsien Jin) · GitHub](https://github.com/TsienJin)


#### Datasets used
- [Stress Analysis](https://data.world/dataorg1/stress-analysis) -- Dataset with descrete values related to emotions (Primary Dataset).
- [Human Stress Detection in and through Sleep | Kaggle](https://www.kaggle.com/laavanya/human-stress-detection-in-and-through-sleep?select=SaYoPillow.csv) -- Continous data obtained during sleep (Secondary Dataset).


## Problem
Our group set out to explore the connection between emotions and stress levels to predict sleep quality.


## Data Preperation
### Relableing Data
The dataset, "Human Stress Detection in and through Sleep", has ***5 stress levels***.
- 0 - low/normal
- 1 – medium low
- 2 - medium
- 3 - medium high
- 4 - high

On the other hand, for the dataset, "Stress Analysis", have ***4 stress levels***.
- 0 - no
- 1 - mild
- 2 - moderate
- 3 - severe

By suitability, we relabelled the stress levels of the dataset "Human Stress Detection in and through Sleep" from 5 levels of stress to 4 levels of stress, so as to be able to compare with the "Stress Analysis" dataset. For the dataset "Human Stress Detection in and through Sleep", We re-categorised:
- 0 - low/normal --> 0 - no
- 1 - medium low --> 1 - mild
- 2 - medium, 3 - medium high --> 2 - moderate
- 4 - high --> 3 - severe

![Relabeling stress level](https://i.imgur.com/ykpEpBt.png)

We also labeled the *Stress Analysis* dataset, from text to numeric values (in ML/Classification.ipynb) to facilitate machine learning.
- "No": 0
- "Mild": 1
- "Moderate": 2
- "Severe": 3

![Relabeling Primary Dataset](https://i.imgur.com/0AAc37X.png)

### Changing Units for Temperature
We first converted the column of *Body temperature* in the Dataset *Human Stress Detection in and through Sleep* from <u>farenheit</u> to <u>celsius</u>, so that it is easier for users to understand and input their data.

![Converting farenheight to celsius](https://i.imgur.com/xkq3Npp.png)


## EDA
### Primary Dataset
![Correlation Heatmap (Primary Dataset)](https://i.imgur.com/5na5Z5e.png)

From the above heatmap, we can see that the correlation between each variables in the predicting variables have almost no correlation. However, all the predicting variables have same correlation in relation to the variable to predict, of `0.33`  
Therefore, there is no one factor that affects `"Stress"` the most, and all the other variables have equal importance in predicting `"Stress"`.

![Distribution of stress levels](https://i.imgur.com/cCNfs3j.png)

Furthermore, we can observe that this dataset is biased towards `Stress_Label` of value `1` and `2` accounting for almost all the data entries. This may potentially hamper the classification accuracy of our machine models.


## Building Machine Learning Models
In order for us to choose the best model for our project, we compared a few different models agaisnt each other to find the most suitable model for the (primary) [Sleep Analysis](https://data.world/dataorg1/stress-analysis) dataset.
1. Classification Tree
2. Support Vector Machines (with various kernels)

The model of choice for the (secondary) [Human Stress Detection in and through Sleep](https://www.kaggle.com/laavanya/human-stress-detection-in-and-through-sleep?select=SaYoPillow.csv) dataset, we opted to go for a simple yet effective method for deriving a machine model.
1. Linear Regression

For us to determine the accuracy of each model, the data is split into test and train dataframes, with 20% of the data being used as test data and 80% being used as training data.

```python
data = pd.read_csv('../data.csv')
dataTrain, dataTest = train_test_split(data, train_size=0.8)
```


### Classification Tree
To dertermine the optimal depth for the decision tree, we iterated over a range of values to determine the optimal depth of the tree. By plotting a graph of the classification accuracy and the depths of the tree, we are able to find the highest point of the graph, which is ***depth 8***, which have the ***highest classification accruracy*** on the testing dataset as depicted in the graph below.

<img src="https://i.imgur.com/Rnbv8MI.png" title="" alt="Accuracy agaisnt varying depth of claddification tree." width="561">

Decision trees only takes into account one variable at every decision stage, as we only consider a single variable to make our classification decision (splitting of the data set) instead of taking all the variables at each node. Even if we determine the optimal depth for our model, we sacrifice the resolution of 7 other data points leading to a less refined classification model. Below is the decision tree of depth 8.

![Decision tree of depth 8](https://i.imgur.com/ZezsASy.png)



### Support Vector Machine
We compared 4 types of SVM models found in [scikit learn](https://scikit-learn.org/stable/modules/svm.html).
- linear SVM `sklearn.svm.LinearSVC`
- SVC with linear kernel `sklearn.svm.SVC(kernel=linear)`
- SVC with RBF kernel `sklearn.svm.SVC(kernel="rbf", gamma='auto')`
- SVC with poly kernel `sklearn.svm.SVC(kernel="poly", degree=4, gamma='auto')`


#### Support Vector Machine as Classifiers
Support Vector Machines (SVM) form hyper-planes or a set of hyper-planes in an infinite dimensional space to classify data points into labled subspaces.

![Visualisation of a hyperplane](https://scikit-learn.org/stable/_images/sphx_glr_plot_separating_hyperplane_001.png)
*Example of a hyper-plane in a 2 dimension space. (Scikit-learn, n.d.)*

The SVM model uses a cost-minimizing function while maximizing the distance between the hyper-plane and the support vectors to acheive a classification model with high accuracy (Scikit-learn, n.d.).


#### Strength of Linear Kernel
Training a SVM with a linear kernel `kernel = linear` is much faster than with other kernels. This is because when training a SVM with a linear kernel, only the optimisation of the `C` regularisation parameter is required. The `C` regularisation parameter tells the SVM optimization how much you want to avoid misclassifying each training point. For larger values of `C`, the optimization will choose a smaller margin hyperplane. For small values of `C`, the optimizer will look for larger-margin separating hyperplane, even if that hyperplane misclassifies more points.

![SVM C parameter](https://i.stack.imgur.com/07jiy.png)

Additionally, SVM with linear kernel is one of the simplest classifiers which leads to higher performance accuracy and lower cost in the long run.


#### Benefits of Radial Basis Function Kernel
Radial Basis Function (RBF) kernel is one of the default kernel used with the sklearn's SVM classification algorithm. It can be described using the following formula:

![RBF Kernel Definition](https://miro.medium.com/max/1400/1*dE_SI6I0EBFDJFuY6TDLfg.png)

The `gamma` of the model is a scalar that defines how much influence a single training point has. The larger gamma is, the closer other points must be to affect the model.

![Gamma formula](https://i.imgur.com/qQkubCH.png)

Using RBF we can set the `gamma` manually and control individual points' influence on the overall algorithm and model. This allows us to manipulate how much we want each variable to influence the classification process. (Less significant variables can be given a larger gamma while more significant variables can be given a lower gamma, note that gamma must always be more than zero).


#### Comparing our SVM Models
We plotted a bargraph to see the classification accuracy of different SVM kernel, where the SVM models with `linear` and `RBF` kernals have the highest classification accuracy of `1.0` on our test data set `dataTest`.

![Graph of accuracy agaisnt type of SVM](https://i.imgur.com/T9WluYB.png)

##### Linear SVC and SVC with Linear Kernel
These two models (Linear SVC and SVC with Linear Kernel) perform classification from different approaches, where `LinearSVC` minimizes the squared hinge loss (E. Z., 2017), while `SVC` with `kernel=linear` maximises the margin between classifications (Scikit-learn, n.d.).

- `LinearSVC` -- <u> Squared Hinge Loss</u> incurs cost on data points that are *easy to identify*. This occurs when the data points are within the region of correct classification, but is too far away from the support vector (Veen B. V., 2020).
- `SVC` -- <u>Maximizing margin</u> and incurring a penalty for misclassification is also a form of a hinge loss cost function. However, specific to `SVC`, the cost function has an allowable distance between some samples and the margin boundary (Scikit-learn, n.d.). This in turn allows for an acceptable range of error that can facilitate higher accuracy in classification.


**Accounting for Accuracy Differences**
The dataset used has only 4 distinct values for each data point. This results in a high probabilty of misclassification. `SVC`'s allowable margin for error accomodates for this through its provision of an acceptable range of error, in turn resulting in a noticably higher accuracy of `1.0` as compared to that of `LinearSVC`.

##### Comparing Linear Kernel and RBF Kernel
Both of these models have an accuracy of `1.0`. However, the complexity of an RBF model grows with the size of the training data, which results in it being more expensive to train as compared to a Linear Kernel SVM -- taking into account the additional expenses to fine tune the RBF kernel to our dataset.

Since our data is linearly separable using kernel LIN, follows for us to chose the Linear Kernel SVM which is less expensive and faster to train.


##### Low Accuracy with Poly Kernel
Since for our model, we only used the degree of `4` and `C = 1.0`, it may not be the best values to be used for our polynomial kernel. We also did not specify the `coef0`parameter. It is because the polynomial kernel is defined as:

![Polynomial Kernel Definition](https://i.imgur.com/Z52TQIQ.png)

With the parameter of `degree` relating to `b`, and `coef0` relating to `a`, by varying these parameters will change the polynomial function and thus lead to different higher dimension relationships between the two variables. There is no shortcut for us to choose the best parameters and we will need to try over a range of values to be able to find the best value for `degree`, `c` and `coef0`. However, the time complexity for such operation will be `x^3` as we have to vary 3 parameters. It will be both time and space consuming and thus not feasible to do so.


### Linear Regression
Refer to Sub-topic 2.


## Findings from Machine Model
### Primary Dataset
When comparing the classification accuracy of our four SVM models with different kernels (linear, LIN, RBF, and POLY), and our classification tree, we decided that the ***SVM kernel of Linear Function (LIN)*** is our model of choice.
1. Linear Kernel SVM outperforms the Decision Tree as it takes into account multiple factors simultaniously, as compared to iteratively selecting single data points, leading to a higher classification accuracy.
2. `LinearSVC` is not appropriate for our use case due to the nature of our dataset.
3. Poly Kernel SVM is expensive to train and fit to our dataset, and is outperformed using a less expensive Linear Kernel SVM.
4. While both RBF and Linear kernels have an accuracy of `1.0`, the RBF kernel SVM is significantly more expensive to train to obtain the same result, therefore the model with a Linear kernel is the optimal choice for our dataset.


### Secondary Dataset (TOUCH UP)
We used linear regression on the dataset "Human Stress Detection in and through Sleep", so that we are able to use "***Stress Level***" to predict factors that affect sleep quality, which are "***Eye Movement (REM)***:, and "***Sleeping Hours***"


# Sub-topic 1: How can we use the stress level predicted from emotions, to predict sleep quality
Since now we are able to predict stress levels using the primary dataset based on discrete emotional datapoints, we can then use the stress level to predict sleep quality

- We are using the variables `Eye Movement (REM)` and `Sleeping Hours` as measures for sleep quality, with higher REM and sleep hours indicating better sleep quality.
- We first split the dataset into train and test dataset, with the ratio of 80% train dataset and 20% test dataset uniformly in random
- We then did linear regression on the "Sleep Analysis" dataset, using "Stress Level (sl)" to predict "Eye Movement (rem)" and "Sleeping Hours (sr.1)"
- Then by getting the stress level predicted using emotions, we can then predict the values of "Eye Movement (rem)" and "Sleeping Hours (sr.1)"

![Linear regression code](https://i.imgur.com/fmBjULZ.png) ![Predicting REM using stress level](https://i.imgur.com/ocSPOZH.png) ![Linear regression line for REM using stress level](https://i.imgur.com/kppN846.png) ![Predicting sleep hours using stress level](https://i.imgur.com/98YAL7n.png) ![Linear regression line for REM using stress level](https://i.imgur.com/9BIdwRW.png)

### FINDINGS (MISSING)
- From the high Explained Variance (R^2) and low Mean Squared Error (MSE), we can tell that it is a good model of linear regression  
- Thus, with the coefficients of the linear regression model, we can now link both datasets and models together, using the common data of `"Stress Level"`, to predict sleep quality using emotions  
- However, since our stress level only have `four` discrete levels, it also means that our predicted values of `Eye Movement (REM)` and `Sleeping Hours` as measures for sleep quality, will only have `four` discrete values, which means everybody who have the same stress level, will have the same `Eye Movement (REM)` and `Sleeping Hours`, and thus same sleep quality  
- Since that is not the case, it means that our dataset could be further improved by having numeric values for stress, instead of categorical values for stress levels  

# Sub-topic 2: How can we use numeric sleeping data to predict stress level if emotions are unavailable
In the case of the user being unsure of his/her own emotions, he/she can also rely on his/her numeric sleeping data to predict his/her stress level.
- We first split the dataset into train and test dataset, with the ratio of 80% train dataset and 20% test dataset uniformly in random
- We then plotted the heatmap the see the correlation between all the `other variables` and `"Stress Level (sl)"`  

![Correlation Heatmap (Secondary Dataset](https://i.imgur.com/kwyTSSa.png)

- From the above heatmap, we can see that the correlation between each variables in the predicting variables have very high correlation, which means each factor is important in predicting another factor  
- However, all the predicting variables have about the same correlation in relation to the variable to predict, from 0.92 to 0.94  
- Therefore, there is no one factor that affects "Stress" the most, and all the other variables have about the same importance in predicting "Stress"  


- We then did linear regression on the "Sleep Analysis" dataset, to use `Sleeping Hours (sr.1), Body Temperature (t), Blood Oxygen (bo), Heart Rate (hr)` to predict `Stress Level (sl)`. This is because the four predicting factors are easily obtainable via the gadgets commonly available.

![Linear regression code](https://i.imgur.com/MF3PqPH.png)

For the train dataset:
- Explained Variance (R^2) : `0.9278968928291338`
- Mean Squared Error (MSE) : `0.0758360529790203`

For the test dataset:
- Explained Variance (R^2) : `0.9181485649048771`
- Mean Squared Error (MSE) : `0.07884567881769432`

![Linear regression for stress level](https://i.imgur.com/0PiGKRK.png)

From the above results, we can see that the classification accuracy is very high, thus it would be a good measure for `Sleeping Hours (sr.1), Body Temperature (t), Blood Oxygen (bo), Heart Rate (hr)` to predict `Stress Level (sl)`.

We then used the coefficients obtained from the linear regression model, and applied to our app, so that it is simpler for user to key in their numeric sleeping data to obtain a predicted stress level.

We also made it available for the users to be able to see some other numeric sleeping data that are less easily obtainable. For instance, `Snoring Rate (sr), Respiration Rate (rr), Limb Movement (lm), Eye Movement (rem)`.

![Predicting snoring rate & respiration rate](https://i.imgur.com/qjZNPWo.png) ![Predicting limb movement & REM](https://i.imgur.com/fPjynU6.png)


## Phone app to allow users to key in their easily obtained data to get stress level (TOUCH UP A BIT)
Easily obtained data would be "sleeping hours (sr.1)", "body temperature (t)", "blood oxygen (bo)", "heart rate (hr)"
- We chose these 4 factors as they are easier to obtain as compared to the other factors due to the technology devices available today
- After keying their numeric data into the app, they will be able to get their approximate stress level, together with the remaining sleeping data which may not be easily available for them previously
  - The remaining sleep data which are not easily obtainable will be `"Snoring rate (sr)", "Respiration rate (rr)", "Limb movement (lm)", "Eye movement (rem)"`
