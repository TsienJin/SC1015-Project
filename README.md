***Datasets used:***
- "Human Stress Detection in and through Sleep" (https://www.kaggle.com/laavanya/human-stress-detection-in-and-through-sleep?select=SaYoPillow.csv)
- "Stress Analysis" (https://data.world/dataorg1/stress-analysis/workspace/file?filename=Dataset.xlsx)

***Problem Definition based on dataset:***
\Using emotions to predict stress levels to predict sleep quality (potentially advising people how to improve their sleep quality)

***Data cleaning and preparation***\
    - We first converted the column of "Body temperature" in the Dataset "Human Stress Detection in and through Sleep" from farenheit, to celsius, so that it is easier for users to understand and input their data.\
    - Since the first dataset, "Human Stress Detection in and through Sleep", have 5 stress levels, namely, 0 - low/normal, 1 – medium low, 2 - medium, 3 - medium high, 4 - high.\
    - On the other hand, for the dataset, "Stress Analysis", have 4 stress levels, namely, 0 - no , 1 - mild, 2 - moderate, 3 - severe.\
    - Thus, by suitability, we relabelled the stress levels of the dataset "Human Stress Detection in and through Sleep" from 5 levels of stress to 4 levels of stress, so as to be able to compare with the "Stress Analysis" dataset. For the dataset "Human Stress Detection in and through Sleep", We re-categorised:\
        - 0 - low/normal to 0 - no\
        - 1 - medium low to 1 - mild\
        - 2 - medium, 3 - medium high, to 2 - moderate\
        - 4 - high to 3 - severe
        
***Exploratory data analysis/visualization to gather relevant insights***\
    - To prevent overfitting, we used a for loop, to determine the optimal depth of the tree. By plotting a graph of the classification accuracy and the depths of the tree, we are able to find the highest point of the graph, which is depth 8, which have the highest classification accruracy on the testing dataset.
    - Since the model of SVM on the categorical dataset "Stress Analysis", has the better classification accuracy of 1.0, we decided to proceed with the SVM model instead of decision trees.
    - Since now we have the models for both datasets, with the common categorial variable of "Stress Level", we are able to use the emotions, sentiment variables in the dataset "Stress Analysis", to predict the "Stress Level". We then can use that "Stress Level" to predict the quality of sleep, namely the variables "Eye Movement (REM)" and "Sleeping Hours".\

***Use of machine learning techniques to solve specific problem***\
    - We used Support Vector Machine (SVM), with Radial Basis function kernel, for machine learning of the dataset, "Stress Analysis", since they are all categorical variables. We have a classification accuracy of 1.0\
    - We also tried using Decision Trees, by splitting the "Stress Analysis" dataset into 80% training dataset, and 20% testing dataset. We then use Decision Tree to model based on the training dataset, then tested it on the testing dataset to get the classification accuracy.  By getting the optimal depth using a for loop, we obtained the optimal depth of 8, which have a classification accuracy of about 0.79554.\
    - We used linear regression on the dataset "Human Stress Detection in and through Sleep", so that we are able to use "Stress Level" to predict factors that affect sleep quality, which are "Eye Movement" (REM), and "Sleeping Hours". [NEED TO JUSTIFY WHY]\