# Func example
def hello_func():
    print("hello World!")

hello_func()


# Func with args
def arg_func(firstName):
    print("Hello " + firstName)

arg_func("John")


# Sum of numbers
def addVal(num1, num2):
    print(num1 + num2)

addVal(10, 12)


# Named arguments : Usable for reordering the args
def reord_arg(firstName, lastName):
    print("Hai " + firstName +" "+ lastName);

reord_arg(lastName="Krishnan", firstName="Kutti")


# Default args
def def_args(firstName = "Adam"):
    print("Hello " + firstName)

def_args()        #Without passing
def_args("Smith") #With passing


# Variable scope
# Outside the func
total = 10

def var_scope(num1, num2):
    # Inside the func
    total = num1 + num2
    print(total)

var_scope(4, 4)
print(total)


# Function with return keyword
def ret_func(arg1, arg2):
    total = arg1 + arg2
    return total

res = ret_func(3, 3)
print(res * 2)

