"""
This file contains helper methods to do word analysis of a string of text.
"""

from asyncore import write
import pandas as pd
import numpy as np
import json
import re
import csv

import nltk
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
from nltk import word_tokenize

# topWords = pd.read_csv('../../Data/topKeywords.csv')


# function that converts description into word count
def countWords(desc = "", returnJSON = False):
    # takes in string
    # returns JSON count of unique words
    
    cleanDesc = re.sub("[^0-9a-zA-Z%\- ]+", "", desc) # remove non-alphanumeric
    words = cleanDesc.lower().split(' ')
    
    count = {}
    for word in words:
        if word in count.keys():
            count[word] += 1
        else:
            count[word] = 1
        


    if returnJSON:
        return json.dumps(count)
    else:
        return count
    
    
    
    
# adds list of filtered words
def filteredWords(string):
    pass


# adds new column to dataframe for word analysis
def addWordCount(dataframe):
    
    overallCount = {}
    
    for index, row in dataframe.iterrows():
        count = countWords(row["description"], returnJSON=False)
        
        for key in count.keys():
            if key in overallCount:
                overallCount[key] += count[key]
            else:
                overallCount[key] = count[key]
        
        dataframe.at[index, "wordCount"] = json.dumps(count)
        
        # print(row["wordCount"])
        
    print(overallCount)
    return {
        'overallCount': overallCount,
        'df': dataframe
    }
    

        












if __name__ == '__main__':
    data = pd.read_csv('../../Data/winemag-data-130k-v2.csv')
    result = addWordCount(data)
    resData = result['df']
    resData.to_csv('../../Data/winemag-data-130k-v2_WITH_WORD_COUNT.csv', index=False)
    
    
    with open("../../Data/overallCount.json", "w") as outfile:
        json.dump(result['overallCount'], outfile)
        outfile.close()

    with open("../../Data/overallCount.csv", "w") as outfile:
        writer = csv.writer(outfile)
        writer.writerow(["keyWord", "count"])
        for key, value in result["overallCount"].items():
            writer.writerow([key, value])
        outfile.close()
