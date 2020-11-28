# Load only the relevant built-in function from 'sys' module
from sys import exit

# Class course
class course:

    def __init__(self):

    	self.__name = "Economics"
    	self.__stud = ["Arun", "Ajith", "Vijesh", "Nivin"]
    	self.__addStudent()

    # Private function for adding the student
    def __addStudent(self):
    	
    	inps = input("Please enter the name of student to add :")  # Prompt user input to add new student
        
    	if inps == "":   # Check if there any input then exit
        
    	else:    # If an input found, then add to student's list

    		self.__stud.append(inps)
    		print("Thanks, added successfully.")
    		
    	self.__show_det()

    # Private function for show the latest details		
    def __show_det(self):

    	print("Course Name : " + self.__name)
    	print("Students :")
    	print(sorted(self.__stud))

cs = course()