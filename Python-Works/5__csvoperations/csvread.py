#import the csv module
import csv

#Open csv file
fl = open("example.csv", "r")

#Read the file
rd = csv.reader(fl, delimiter=",")

#Iterate & print the data
for x in rd:
    print(x)

#Close
fl.close()
