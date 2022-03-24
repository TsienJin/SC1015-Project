***Datasets used:***
- Human Stress Detection in and through Sleep (https://www.kaggle.com/laavanya/human-stress-detection-in-and-through-sleep?select=SaYoPillow.csv)
- Stress Analysis (https://data.world/dataorg1/stress-analysis/workspace/file?filename=Dataset.xlsx)

***Problem Definition based on dataset:*** Using emotions to predict stress levels to predict sleep quality (potentially advising people how to improve their sleep quality)

***Data cleaning and preparation***
    - We first converted the column of "Body temperature" in the Dataset "Human Stress Detection in and through Sleep" from farenheit, to celsius, so that it is easier for users to understand and input their data.
    - Since the first dataset, "Human Stress Detection in and through Sleep", have 5 stress levels, namely, 0 - low/normal, 1 – medium low, 2 - medium, 3 - medium high, 4 - high. On the other hand, for the dataset, "Stress Analysis", have 4 stress levels, namely, 0 - no , 1 - mild, 2 - moderate, 3 - severe. Thus, by suitability, we relabelled the stress levels of the dataset "Human Stress Detection in and through Sleep" from 5 levels of stress to 4 levels of stress, so as to be able to compare with the "Stress Analysis" dataset. For the dataset "Human Stress Detection in and through Sleep", We re-categorised:
        - 0 - low/normal to 0 - no
        - 1 - medium low to 1 - mild
        - 2 - medium, 3 - medium high, to 2 - moderate
        - 4 - high to 3 - severe
        
- 