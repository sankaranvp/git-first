# Handling exceptions/errors
x = 10

try:
    print(x)
    ab = ["Red", "Green", "Blue"]
    #print(x + " " + ab)
    print(x/0)
    
except NameError:
    print("Name Error occurred!!")
    
except ZeroDivisionError:
    print("Division by zero is not possible!!")
    
except TypeError:
    print("Type Error occurred!!")
    
except:
    print("Error occurred!!")

print("Moving on...")
