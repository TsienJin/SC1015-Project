from asyncore import write
import pandas as pd
import numpy as np
import json
import re
import csv
import os

import nltk
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
from nltk import word_tokenize



def getKeyWords(string):
    
    types = ['JJ', 'NN']

    keyWords = []    

    try:
        words = nltk.pos_tag(word_tokenize(string))

        for word in words:
            if word[1] in types:
                keyWords.append(word[0])
    except:
        print("error!")
            
    return keyWords





if __name__ == '__main__':
    # print(getKeyWords("This is a fine wine, very sweet and balanced acidity."))
    
    filteredWords = []
    
    topWords = pd.read_csv('../../Data/topKeywords.csv')
    
    for word in topWords['keyWord']:
        filteredWords.extend(getKeyWords(word))
            
    res = list(set(filteredWords))
    print(res)
    
    with open("../../Data/topKeywords.csv", "w") as outfile:
        writer = csv.writer(outfile)
        writer.writerow(["keyWord"])
        for word in res:
            writer.writerow(word)
        outfile.close()
    