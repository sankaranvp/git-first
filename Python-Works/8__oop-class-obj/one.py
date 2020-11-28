# OOP : Python class

# Empty class with 'pass' keyword
class one:
    pass
    
instance1 = one()
print(type(instance1))


# Class with properties
class two:
    name   = "Donald"
    colors = ["Red", "green", "blue"]
    
inst2 = two()
print(inst2.name)
print(inst2.colors)


# Class with init
class course:
    def __init__(self, name):
        self.name     = name
        self.students = []

c1 = course("Python")
print(c1.name)
print(c1.students)


# Class functions, return keyword
class newCourse:
    def __init__(self, name):
        self.name = name
        self.students = []

    def add_students(self, student):
        self.students.append(student)

    def stud_count(self):
        return len(self.students)
"""
instOne = newCourse("Python")
instOne.add_students("John")
instOne.add_students("Smith")
instOne.add_students("Gerald")
print("\nCourse One :")
print("Name : " + instOne.name)
print(instOne.students)
print(instOne.stud_count()) """



# Class functions using private
class prCourse:
    def __init__(self, name):
        self.__name = name # Private var : "__" used before the var to define private
        self.students = []

    def add_students(self, student):
        self.students.append(student)
        self.__write_student(student)

    # Due to the use of private we should add a func to get the course name
    def get_course_name(self):
        return self.__name

    # Private func
    def __write_student(self, student):
        print("Welcome " + student)

cc1 = prCourse("HTML")
print(cc1.get_course_name())
cc1.add_students("Joseph")







