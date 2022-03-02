"""
This script calculates the sentiment of the description.
"""

import pandas as pd
import numpy as np
import json
import csv
import re

import nltk
nltk.download('stopwords')
nltk.download('vader_lexicon')
from nltk.corpus import stopwords
stopWords = list(set(stopwords.words('english')))
from nltk.sentiment import SentimentIntensityAnalyzer



# generate sentiment from string
def sentiment(string):
    sia = SentimentIntensityAnalyzer()
    score = sia.polarity_scores(string)
    return score



# creates new column for data
def sentimentCol(dataframe):
    
    for index, row in dataframe.iterrows():
        sentVal = sentiment(row['description'])
        
        dataframe.at[index, "sentiment_neg"] = sentVal['neg']
        dataframe.at[index, "sentiment_neu"] = sentVal['neu']
        dataframe.at[index, "sentiment_pos"] = sentVal['pos']
        dataframe.at[index, "sentiment_compound"] = sentVal['compound']
        
    return dataframe




if __name__ == '__main__':
    # print(sentiment("Here's a bright, informal red that opens with aromas of candied berry, white pepper and savory herb that carry over to the palate. It's balanced with fresh acidity and soft tannins."))

    data = pd.read_csv("../../Data/winemag-data-130k-v2_WITH_WORD_COUNT.csv")
    newData = sentimentCol(data)
        
    newData.to_csv("../../Data/winedata-v1.1.csv", index=False)
    