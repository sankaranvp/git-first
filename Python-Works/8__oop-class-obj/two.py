# Object inheritance
class user:
    def __init__(self, fname, lname):
        self.__fname = fname
        self.__lname = lname

    def get_full_name(self):
        return self.__fname + " " + self.__lname

    def user_login(self):
        print("Welcome " + self.__fname)

    def user_work(self):
        print(self.__fname + " is working...")

class superUser(user): # Base class name inside paranthesis to inherit

    # Below init func overide base class init, so change it
    #def __init__(self):
        # pass

    def __init__(self, fname, lname, superlevel):
        user.__init__(self, fname, lname)

    def super_user_work(self):
        print("Super user performing..")
