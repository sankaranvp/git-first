#import csv module
import csv

#Data to append
datas = ["03", "RAJESH", "PKD", "30"]

ok = True
#Open & Read the file firstly, for duplicate checking 
fll = open("example.csv", "r") # a = append
rd  = csv.reader(fll, delimiter=",")

for x in rd:
    if len(x) != 0 and (x[1] == datas[1] or x[0] == datas[0]):
        print("Name already exist!!!")
        ok = False
        break
    
#close the file
fll.close()
            

if ok:
    #Open file in append mode for write
    fl = open("example.csv", "a") # a = append
    #Write to the file
    wrt = csv.writer(fl)
    fl.write("\n")
    wrt.writerow(datas)
    #close the file
    fl.close()
