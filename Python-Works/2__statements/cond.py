#Python statements

a = 12
b = 10

print("1) 'if','elif','else' statements : ")
if (a > b):
    print("a > b")
elif (a < b):
    print("b > a")
else:
    print("a = b")

    


print("\n2) 'if', 'else' with 'and' statements : ")
if a > 10 and a < 20 :
    print("Permission Granted")
else:
    print("Permission Denied")

    
    

print("\n3) 'if', 'else' with 'or' statements : ")
if a < 10 or a < 20 :
    print("Permission Granted")
else:
    print("Permission Denied")


print("\n4) While Loop statements : ")
i = 1

while i <=4:
    print(i)
    i +=1


print("\n5) While loop, break statements : ")
import random

i = 1
while i <=20:
    newRand = random.randint(0,20)
    if newRand == 6 :
        break
    print(newRand)
    i +=1
    

print("\n6) While loop, continue statements : ")
i = 0
while i <=6:
    i +=1    
    if i == 5:
        continue
    print(i)



print("\n7) for loop statements [through string value, range also] : ")
myList = ["Red", "green", "blue"]
myStr  = "Hello"

for x in myList:
    print(x)

print("\n")

for q in myStr:
    print(q)

print("\n")

for y in range(0,10,2): # range(end) OR range(start, end, interval/step)
    print(y)
else:
    print("Loop iteration is completed.")