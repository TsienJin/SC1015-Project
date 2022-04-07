# Datasets used:

- [Sleep Analysis](https://data.world/dataorg1/stress-analysis)

- [Human Stress Detection in and through Sleep | Kaggle](https://www.kaggle.com/laavanya/human-stress-detection-in-and-through-sleep?select=SaYoPillow.csv)

# Problem Definition based on dataset:

Analysing emotions to catagorize stress levels to predict sleep quality (potentially advising people how to improve their sleep quality).

# Data cleaning and preparation

### Changing units for termperature

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

We also labeled the *Stress Analysis* dataset, from text to numeric values (in ML/Classification.ipynb)

- "No": 0
- "Mild": 1
- "Moderate": 2
- "Severe": 3

### Choosing the best model

###### Classicification Tree

To prevent overfitting of the decision trees, we iterated over a range of values to determine the optimal depth of the tree. By plotting a graph of the classification accuracy and the depths of the tree, we are able to find the highest point of the graph, which is ***depth 8***, which have the ***highest classification accruracy*** on the testing dataset as depicted in the graph below.

<img title="" src="https://i.imgur.com/Rnbv8MI.png" alt="Accuracy agaisnt varying depth of claddification tree." width="393">



`Breakdown of classification tree here`

> 1. Justify why tree not very good (Drawbacks and limitations)
> 
> 2. Find somewhere to insert descision tree





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
>    2. Justify difference in linear kernal and linear SVM.



`Comparing SVM kernals (YZ)`

> 1. Strength of linear kernal
> 
> 2. Why RBF kernal is good (also explain briefly what is RBF kernal)



`Limits of SVM poly kernal (XH)`

> 1. Why poly kernal has significantly lower accuracy.
> 
> 2. Why poly kernal is not suitable for our dataset.





`Why SVM`

> 1. Justify why SVM (and which model) is better over classification tree

Since the model of SVM on the categorical dataset "Stress Analysis", has the better classification accuracy of `1.0`, as comapred to Decision Tree's classification accuracy of `0.79554`, we decided to proceed with the SVM model instead of decision trees.  

`Since now we have the models for both datasets, with the common categorial variable of "Stress Level", we are able to use the emotions, sentiment variables in the dataset "Stress Analysis", to predict the "Stress Level". We then can use that "***Stress Level***" to predict the quality of sleep, namely the variables "***Eye Movement (REM)***" and "***Sleeping Hours***".`

# Use of machine learning techniques to solve specific problem

- We used Support Vector Machine (SVM), with Radial Basis function kernel, for machine learning of the dataset, "Stress Analysis", since they are all categorical variables. We have a classification accuracy of 1.0.  
  - We compared four different kernels, namely linear, LIN, RBF, and POLY. After comparing their classification accuracy, we chose ***SVM kernel of Linear Function (LIN)***, since it has the ***highest classification accuracy of 1.0***. Even though the kernel RBF also have classification accuracy of 1.0, we still chose the kernel LIN.  
  - It is because linear SVM is a parametric model, an RBF kernel SVM isn't, and the complexity of the latter grows with the size of the training set. Not only is it more expensive to train an RBF kernel SVM, there is also a need to keep the kernel matrix around, and the projection into this "infinite" higher dimensional space where the data becomes linearly separable is more expensive as well during prediction. Furthermore, there are more hyperparameters to tune, so model selection is more expensive. And finally, it's much [easier to overfit a complex model]([How to Select Support Vector Machine Kernels - KDnuggets](https://www.kdnuggets.com/2016/06/select-support-vector-machine-kernels.html#:~:text=Linear%20SVM%20is%20a%20parametric,size%20of%20the%20training%20set))! 
- We also tried using Decision Trees, by splitting the "Stress Analysis" dataset into 80% training dataset, and 20% testing dataset. We then use Decision Tree to model based on the training dataset, then tested it on the testing dataset to get the classification accuracy.  By getting the optimal depth using a for loop, we obtained the ***optimal depth of 8***, which have a ***classification accuracy of about 0.79554***.  
- We used linear regression on the dataset "Human Stress Detection in and through Sleep", so that we are able to use "***Stress Level***" to predict factors that affect sleep quality, which are "***Eye Movement (REM)***:, and "***Sleeping Hours***". [NEED TO JUSTIFY WHY]  

## Sub-topic: How can we use numeric sleeping data to predict stress level if emotions are unavailable

- 
- We first split the dataset into train and test dataset, with the ratio of 75% train dataset and 25% test dataset uniformly in random

### Phone app to allow users to key in their easily obtained data to get stress level

- Easily obtained data would be "sleeping hours (sr.1)", "body temperature (t)", "blood oxygen (bo)", "heart rate (hr)"
  - We chose these 4 factors as they are easier to obtain as compared to the other factors due to the technology devices available today
- After keying their numeric data into the app, they will be able to get their approximate stress level, together with the remaining sleeping data which may not be easily available for them previously   
  - The remaining sleep data which are not easily obtainable will be "Snoring rate (sr)", "Respiration rate (rr)", "Limb movement (lm)", "Eye movement (rem)"  

## References

- https://www.kdnuggets.com/2016/06/select-support-vector-machine-kernels.html#:~:text=Linear%20SVM%20is%20a%20parametric,size%20of%20the%20training%20set
- https://github.com/artikwh/K-Means-Clustering-Arti-Kushwaha/blob/main/K_Means_Clusteing_Arti_Kushwaha.ipynb  
- https://www.freecodecamp.org/news/how-to-build-and-train-k-nearest-neighbors-ml-models-in-python/  