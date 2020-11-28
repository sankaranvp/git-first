import random, sys, csv

class mgame:

    def __init__(self, name):
        self.__name = name;

        self.__startgame()

    def __startgame(self):

        resp = ["Ok, Sure", "Oh I see", "We shall check", "Done."]

        print("Welcome %s " % self.__name)

        uq = True

        while uq:

            quest = input("Please ask a question :")

            ans = resp[random.randint(0,4)]

            if quest == "":
                
                print("Okay, Bye...")
                sys.exit()

            else:

                print(ans)

            
        
