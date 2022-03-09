# How can we predict the price of a bottle of wine?

**SC1015 SC8 Group 4**

Link to dataset: [Wine Reviews | Kaggle](https://www.kaggle.com/zynicide/wine-reviews?select=winemag-data-130k-v2.csv)





Xin Han is smart.

## 1. Exploratory Data Analysis

We performed Exploratory Data Analysis (EDA) to further understand the data to recognise patterns and relationships between data points. EDA was performed on the following areas of interest.

1. Relation between country of origin on price and score of the wine.

2. Sentiment analysis of description in relation to price and score of the wine.

3. Relation between score and price of wine.

### Country of Origin

Some EDA stuff here

### Sentiment Analysis of Description.

In order to determine the sentiment of the description, Natural Language Toolkit, `ntlk` was used.

```python
import nltk
nltk.download('stopwords')
nltk.download('vader_lexicon')
from nltk.sentiment import SentimentIntensityAnalyzer


# generate sentiment from string
def sentiment(string):
    sia = SentimentIntensityAnalyzer()
    score = sia.polarity_scores(string)
    return score
```

`sentiment(string)` returns a 4 values.

1. Negative sentiment

2. Neutral sentiment

3. Possitive sentiment

4. Combined sentiment

*Combined sentiment* combines the 3 former sentiments into a float between -1 (most negeative) and 1 (most positive sentiment). We can observe that the general sentiment lies as neutral.

![Unknown.png](https://raw.githubusercontent.com/TsienJin/SC1015-Project/main/readme_imgs/sentimentAnalysis/Screenshot%202022-03-09%20at%2012.07.34.png)

*Figure (X). Boxplot of sentiment values for the entire dataset.*

The following graph plots the sentiment of each of wine with its score. There is a weak correlation in the score and the sentiment.

![Unknown-1.png](https://raw.githubusercontent.com/TsienJin/SC1015-Project/main/readme_imgs/sentimentAnalysis/Screenshot%202022-03-09%20at%2012.08.40.png)

*Figure (X+1). `regplot` of points agaisnt various sentiment indicators.*

We can also observe a similarly week correlation between sentiment and price of the wine, as seen in the graph below.

![Unknown-2.png](https://raw.githubusercontent.com/TsienJin/SC1015-Project/main/readme_imgs/sentimentAnalysis/Screenshot%202022-03-09%20at%2012.09.04.png)

*Figure (X+2). `regplot` of price agaisnt various sentiment indicators*

We can obseve in Figure (X+1), the data widely spread around the regression line, given by the poor correlation. The regression line of price would be a poor indicator for points given the sentiment of the description.

Additionally, when comparing agaisnt price, the regression line does not accurately reflect any usable trend in the data.

As such, we can conclude that the sentiment of the description is not a good data point to use for the prediction of wine prices. There are two main reason on why this may be the case.

1. The model built for sentiment analysis was built around the personal voice of a speaker, not from a descriptive standpoint for wine.

2. Descriptions of wine contains words that do not convey personal opinion, and the model fails to highlight key terms that signify a quality wine over a bottom shelf wine.
