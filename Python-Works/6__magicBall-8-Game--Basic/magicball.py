#Python Magic 8 Ball Game

#import modules
import sys
import random

#variables
responses = ["It is certain", "Yu may rely on it", "As I see it, Yes", "Outlook Good", "Most Likely", "It is decidely so", "Without a Doubt", "Yes, definitly"]
questions = True

#loop
while questions:
    ques = input("Please ask the magic 8 ball question")
    if(ques == ""):
        sys.exit()
    else:
        print(responses[random.randint(0,7)])
        
