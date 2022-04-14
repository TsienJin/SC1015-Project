# Datasets used:

- [Sleep Analysis](https://data.world/dataorg1/stress-analysis)

- [Human Stress Detection in and through Sleep | Kaggle](https://www.kaggle.com/laavanya/human-stress-detection-in-and-through-sleep?select=SaYoPillow.csv)

# Problem Definition based on dataset:

Analysing emotions to catagorize stress levels to predict sleep quality (potentially advising people how to improve their sleep quality).

# Data cleaning and preparation

### Changing units for temperature

We first converted the column of *Body temperature* in the Dataset *Human Stress Detection in and through Sleep* from <u>farenheit</u> to <u>celsius</u>, so that it is easier for users to understand and input their data.

<img title="" src="https://i.imgur.com/xkq3Npp.png" alt="Converting farenheight to celsius." data-align="inline" width="392">

### Relableing data

The dataset, "Human Stress Detection in and through Sleep", has ***5 stress levels***. 

- 0 - low/normal

- 1 – medium low,

- 2 - medium

- 3 - medium high

- 4 - high  

On the other hand, for the dataset, "Stress Analysis", have ***4 stress levels***.

- 0 - no

- 1 - mild

- 2 - moderate

- 3 - severe

Thus, by suitability, we relabelled the stress levels of the dataset "Human Stress Detection in and through Sleep" from 5 levels of stress to 4 levels of stress, so as to be able to compare with the "Stress Analysis" dataset. For the dataset "Human Stress Detection in and through Sleep", We re-categorised:  

- 0 - low/normal --> 0 - no  

- 1 - medium low --> 1 - mild  

- 2 - medium, 3 - medium high --> 2 - moderate  

- 4 - high --> 3 - severe  

<img title="" src="https://i.imgur.com/ykpEpBt.png" alt="Relabeling stress level." data-align="inline" width="392">

We also labeled the *Stress Analysis* dataset, from text to numeric values (in ML/Classification.ipynb).

- "No": 0
- "Mild": 1
- "Moderate": 2
- "Severe": 3

### Choosing the best model

###### Classification Tree

To prevent overfitting of the decision trees, we iterated over a range of values to determine the optimal depth of the tree. By plotting a graph of the classification accuracy and the depths of the tree, we are able to find the highest point of the graph, which is ***depth 8***, which have the ***highest classification accruracy*** on the testing dataset as depicted in the graph below.

<img title="" src="https://i.imgur.com/Rnbv8MI.png" alt="Accuracy agaisnt varying depth of claddification tree." width="393">

`Breakdown of classification tree here`

> 1. Justify why tree not very good (Drawbacks and limitations)
> 
> 2. Find somewhere to insert descision tree

### Why decision trees may not be the optimal model

Decision trees only takes into account one variable at every decision stage, may would result in a lower accuracy rating as we only consider a single variable to make our classification decision (splitting of the data set) instead of taking all the variables at once. 

Each decision in the decision tree can be viewed as an individual IF-ELSE statement. Hence, each only only can go 2 ways (True or False), this is not applicable to our data sets since we are using more than 2 distinct levels of classification (there are 4 levels of stress).

The tree may grow to be very complicated with complicated data set like ours (8 different variables to predict 1 variable) and be prone to overfitting in the process of building a larger tree to achieve higher purity.

###### Support Vector Machine

We compared 4 types of SVM models found in [scikit learn](https://scikit-learn.org/stable/modules/svm.html).

- linear SVM `sklearn.svm.LinearSVC`

- SVC with linear kernel `sklearn.svm.SVC(kernel=linear)`

- SVC with RBF kernel `sklearn.svm.SVC(kernel="rbf", gamma='auto')`

- SVC with poly kernel `sklearn.svm.SVC(kernel="poly", degree=4, gamma='auto')`

The data is split into test and train dataframes, with 20% of the data being used as test data.

```python
data = pd.read_csv('../data/labeled_data.csv')
dataTrain, dataTest = train_test_split(data, train_size=0.8)
```

We plotted a bargraph to see the classification accuracy of different SVM kernel, where the SVM models with `linear` and `RBF` kernals have the highest classification accuracy of `1.0` on our test data set `dataTest`.

<img src="https://i.imgur.com/T9WluYB.png" title="" alt="Graph of accuracy agaisnt type of SVM" width="419">

`Limits of SVM (TJ)`

> 1. Why linear SVM is not as accurate as linear kernal.
>    
>    1. Explain how the results are predicted (process).
>    
>    2. Justify [difference](https://stackoverflow.com/questions/45384185/what-is-the-difference-between-linearsvc-and-svckernel-linear) in linear kernal and linear SVM.

### Support Vector Machine as Classifiers

Support Vector Machines (SVM) form hyper-planes or a set of hyper-planes in an infinite dimensional space to classify data points into labled subspaces.

<img src="https://scikit-learn.org/stable/_images/sphx_glr_plot_separating_hyperplane_001.png" title="" alt="Visualisation of a hyper-plane" width="347">

*Example of a hyper-plane in a 2 dimension space. (Scikit-learn, n.d.)*

The SVM model uses a cost-minimizing function while maximizing the distance between the hyper-plane and the support vectors to acheive a classification model with high accuracy (Scikit-learn, n.d.).

### Comparing Linear SVC and SVC with linear kernel

These two models perform classification from different approaches, where `LinearSVC` minimizes the squared hinge loss (E. Z., 2017), while `SVC` with `kernel=linear` maximises the margin between classifications (Scikit-learn, n.d.).

- `LinearSVC` --<u> Squared Hinge Loss</u> incurs cost on data points that are *easy to identify*. This occurs when the data points are within the region of correct classification, but is too far away from the support vector (Veen B. V., 2020).
- `SVC` -- <u>Maximizing margin</u> and incurring a penalty for misclassification is also a form of a hinge loss cost function. However, specific to `SVC`, the cost function has an allowable distance between some samples and the margin boundary (Scikit-learn, n.d.). This in turn allows for an acceptable range of error that can facilitate higher accuracy in classification.

### Difference in classification accuracy between Linear SVC and SVC with linear kernel

The dataset used has only 4 distinct values for each data point. This results in a high probabilty of misclassification. `SVC`'s allowable margin for error accomodates for this through its provision of an acceptable range of error, in turn resulting in a noticably higher accuracy of `1.0` as compared to that of `LinearSVC`.

`Comparing SVM kernals (YZ)`

> 1. Strength of linear kernal
> 
> 2. Why RBF kernal is good (also explain briefly what is RBF kernal)

### Strength of linear kernel

Training a SVM with linear = kernel is much faster than with other kernels. This is because when training a SVM with a linear kernel, only the optimisation of the C regularisation parameter is required. The c regularisation parameter tells the SVM optimization how much you want to avoid misclassifying each training point. For larger values of C, the optimization will choose a smaller margin hyperplane. For small values of C, the optimizer will look for larger-margin separating hyperplane, even if that hyperplane misclassifies more points.

<img src="https://i.stack.imgur.com/07jiy.png" title="" alt="SVM C parameter" width="419">

Also, SVM with linear kernel is one of the simplest classifiers which leads to higher performance accuracy and lower cost in the long run.

### Why RBF kernal is good

Radial Basis Function (RBF) kernel is one of the default kernel used with the sklearn's SVM classification algorithm. It can be described using the following formula: 

<img src="https://miro.medium.com/max/1400/1*dE_SI6I0EBFDJFuY6TDLfg.png" title="" alt="RBF Kernel Definition" width="419">

Formula for gamma:

<img src="https://i.imgur.com/qQkubCH.png" title="" alt="Gamma formula" width="419">

The gamma of the model is a scalar that defines how much influence a single training point has. The larger gamma is, the closer other points must be to affect the model. Using RBF we can set the gamma manually and control individual points' influence on the overall algorithm and model. This allows us to manipulate how much we want each variable to influence the classification process. (Less significant variables can be given a larger gamma while more significant variables can be given a lower gamma, note that gamma must always be more than zero)

`Limits of SVM poly kernal (XH)`

> 1. Why poly kernal has significantly lower accuracy.
> 
> 2. Why poly kernal is not suitable for our dataset.

`Why SVM`

> 1. Justify why SVM (and which model) is better over classification tree

### Why does the polynomial kernel have low accuracy?

Since for our model, we only used the degree of `4` and c of `1.0`, it may not be the best values to be used for our polynomial kernel. We also did not specify the coef0 parameter. It is because the polynomial kernel is defined as:  

<img src="https://i.imgur.com/Z52TQIQ.png" title="" alt="Polynomial Kernel Definition" width="419">  

With the parameter of `degree` relating to `b`, and `coef0` relating to `a`, by varying these parameters will change the polynomial function and thus lead to different higher dimension relationships between the two variables. There is no shortcut for us to choose the best parameters and we will need to try over a range of values to be able to find the best value for `degree`, `c` and `coef0`. However, the time complexity for such operation will be `x^3` as we have to vary 3 parameters. It will be both time and space consuming and thus not feasible to do so.  

Since the model of SVM on the categorical dataset "Stress Analysis", has the better classification accuracy of `1.0`, as comapred to Decision Tree's classification accuracy of `0.79554`, we decided to proceed with the SVM model instead of decision trees.  

`Since now we have the models for both datasets, with the common categorial variable of "Stress Level", we are able to use the emotions, sentiment variables in the dataset "Stress Analysis", to predict the "Stress Level". We then can use that "***Stress Level***" to predict the quality of sleep, namely the variables "***Eye Movement (REM)***" and "***Sleeping Hours***".`

# Use of machine learning techniques to solve specific problem

- We used Support Vector Machine (SVM), with Radial Basis function kernel, for machine learning of the dataset, "Stress Analysis", since they are all categorical variables. We have a classification accuracy of 1.0.  
  - We compared four different kernels, namely linear, LIN, RBF, and POLY. After comparing their classification accuracy, we chose ***SVM kernel of Linear Function (LIN)***, since it has the ***highest classification accuracy of 1.0***. Even though the kernel RBF also have classification accuracy of 1.0, we still chose the kernel LIN.  
  - We also tried using Decision Trees, by splitting the "Stress Analysis" dataset into 80% training dataset, and 20% testing dataset. We then use Decision Tree to model based on the training dataset, then tested it on the testing dataset to get the classification accuracy.  By getting the optimal depth using a for loop, we obtained the ***optimal depth of 8***, which have a ***classification accuracy of about 0.79554***.  
- We used linear regression on the dataset "Human Stress Detection in and through Sleep", so that we are able to use "***Stress Level***" to predict factors that affect sleep quality, which are "***Eye Movement (REM)***:, and "***Sleeping Hours***"   

### Why we chose kernel LIN over kernel RBF

- It is because linear SVM is a parametric model, and RBF kernel SVM isn't, and the complexity of the latter grows with the size of the training set. Not only is it more expensive to train an RBF kernel SVM, there is also a need to keep the kernel matrix around, and the projection into this "infinite" higher dimensional space where the data becomes linearly separable is more expensive as well during prediction. Furthermore, there are more hyperparameters to tune, so model selection is more expensive. It is also much easier to overfit a complex model using kernel RBF.  
- Since our data is linearly separable using kernel LIN, it would not make sense if we chose to adopt a more complex model that is more expensive in terms on time and space, and also risk the chance of overfitting of our dataset.  

## Sub-topic 1: How can we use the stress level predicted from emotions, to predict sleep quality
- Since now we are able to predict stress levels using the emotions dataset, we can then use the stress level to predict sleep quality
- We are using the variables `Eye Movement (REM)` and `Sleeping Hours` as measures for sleep quality, with higher REM and sleep hours indicating better sleep quality.
- We first split the dataset into train and test dataset, with the ratio of 75% train dataset and 25% test dataset uniformly in random  
- We then did linear regression on the "Sleep Analysis" dataset, using "Stress Level (sl)" to predict "Eye Movement (rem)" and "Sleeping Hours (sr.1)"
- Then by getting the stress level predicted using emotions, we can then predict the values of "Eye Movement (rem)" and "Sleeping Hours (sr.1)"

<img src="https://i.imgur.com/0cjn0Jo.png" title="" alt="Linear regression code" width="419">
<img src="https://i.imgur.com/YCQZYh8.png" title="" alt="Predicting REM using stress level" width="419">
<img src="https://i.imgur.com/Z9LV4mM.png" title="" alt="Linear regression line for REM using stress level" width="500">
<img src="https://i.imgur.com/JXd93wQ.png" title="" alt="Predicting sleep hours using stress level" width="419">
<img src="https://i.imgur.com/yjE1ZZr.png" title="" alt="Linear regression line for REM using stress level" width="500">

## Sub-topic 2: How can we use numeric sleeping data to predict stress level if emotions are unavailable

- In the case if the user is unsure of his own emotions, he can also rely on his numeric sleeping data to predict his stress level  
- We first split the dataset into train and test dataset, with the ratio of 75% train dataset and 25% test dataset uniformly in random  
- We then did linear regression on the "Sleep Analysis" dataset, to use `Sleeping Hours (sr.1), Body Temperature (t), Blood Oxygen (bo), Heart Rate (hr)` to predict `Stress Level (sl)`. It is because the four predicting factors are easily obtainable now via the gadgets available  

<img src="https://i.imgur.com/JkgbYgx.png" title="" alt="Linear regression code" width="419">

- For the train dataset:  
    - Explained Variance (R^2) : `0.9252379512936114`  
    - Mean Squared Error (MSE) : `0.0758114100891848`  
- For the test dataset:
    - Explained Variance (R^2) : `0.9295827987614113`  
    - Mean Squared Error (MSE) : `0.07817144279462471`  
    
<img src="https://i.imgur.com/HbsP27r.png" title="" alt="Linear regression for stress level" width="419">

- From the above results, we can see that the classification accuracy is very high, thus it would be a good measure for `Sleeping Hours (sr.1), Body Temperature (t), Blood Oxygen (bo), Heart Rate (hr)` to predict `Stress Level (sl)`   
- We then used the coefficients obtained from the linear regression model, and applied to our app, so that it is simpler for user to key in their numeric sleeping data to obtain a predicted stress level  
- We also made it available for the users to be able to see some other numeric sleeping data that are less easily obtainable. For instance, `Snoring Rate (rr), Respiration Rate (rr), Limb Movement (lm), Eye Movement (rem)`  

<img src="https://i.imgur.com/aCOixB3.png" title="" alt="Predicting snoring rate & respiration rate" width="419">
<img src="https://i.imgur.com/ybyj5q3.png" title="" alt="Predicting limb movement & REM" width="419">

### Phone app to allow users to key in their easily obtained data to get stress level

- Easily obtained data would be "sleeping hours (sr.1)", "body temperature (t)", "blood oxygen (bo)", "heart rate (hr)"
  - We chose these 4 factors as they are easier to obtain as compared to the other factors due to the technology devices available today
- After keying their numeric data into the app, they will be able to get their approximate stress level, together with the remaining sleeping data which may not be easily available for them previously   
    - The remaining sleep data which are not easily obtainable will be `"Snoring rate (sr)", "Respiration rate (rr)", "Limb movement (lm)", "Eye movement (rem)"`   

## References

- [How to Build and Train K-Nearest Neighbors and K-Means Clustering ML Models in Python](https://www.freecodecamp.org/news/how-to-build-and-train-k-nearest-neighbors-ml-models-in-python/)
- [scikit learn - What is the difference between LinearSVC and SVC(kernel=&quot;linear&quot;)? - Stack Overflow](https://stackoverflow.com/questions/45384185/what-is-the-difference-between-linearsvc-and-svckernel-linear)
- [1.4. Support Vector Machines &mdash; scikit-learn 1.0.2 documentation](https://scikit-learn.org/stable/modules/svm.html#mathematical-formulation)
- [A definitive explanation to the Hinge Loss for Support Vector Machines - Towards Data Science](https://towardsdatascience.com/a-definitive-explanation-to-hinge-loss-for-support-vector-machines-ab6d8d3178f1)
- [Hinge Loss for Binary Classifiers - YouTube](https://www.youtube.com/watch?v=PM2MSAYmzXM)
- [How to Select Support Vector Machine Kernels - KDnuggets](https://www.kdnuggets.com/2016/06/select-support-vector-machine-kernels.html#:~:text=Linear%20SVM%20is%20a%20parametric,size%20of%20the%20training%20set)
- [K-Means-Clustering-Arti-Kushwaha/K_Means_Clusteing_Arti_Kushwaha.ipynb at main · artikwh/K-Means-Clustering-Arti-Kushwaha · GitHub](https://github.com/artikwh/K-Means-Clustering-Arti-Kushwaha/blob/main/K_Means_Clusteing_Arti_Kushwaha.ipynb) 
- [Support Vector Machines Part 2: The Polynomial Kernel (Part 2 of 3)](https://www.youtube.com/watch?v=Toet3EiSFcM)
- [SUPPORT VECTOR MACHINES(SVM)](https://towardsdatascience.com/support-vector-machines-svm-c9ef22815589#:~:text=Polynomial%20kernel%3A,the%20power%20of%20the%20kernel.&text=In%20order%20to%20solve%20the,\)%20Za%20%5Et%20and%20Zb)
- [How to Select Support Vector Machine Kernels](https://www.kdnuggets.com/2016/06/select-support-vector-machine-kernels.html)
- [creating linear kernel svm in python](https://www.geeksforgeeks.org/creating-linear-kernel-svm-in-python/)
- [SVM classifier and RBF kernel how to make better models in python](https://towardsdatascience.com/svm-classifier-and-rbf-kernel-how-to-make-better-models-in-python-73bb4914af5b#:~:text=Radial%20Basis%20Function%20(RBF)%20kernel%20and%20Python%20examples,and%20has%20to%20be%20%3E0.)
