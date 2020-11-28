# Magic-8-Ball Game :
""" Ask questions from user side and reply from the system with random answers,
store the questions to csv file when quit. """

# Import modules
import random, sys, csv


class magicball:

    def __init__(self, name):
        self.__name = name
        self.__myQuestion = []

        self.__start_game()

    # Private function to start game
    def __start_game(self):

        # Response list
        mResponse = ["It is certain", "You may rely on it", "As I see it, Yes", "Outlook Good", "Most Likely", "It is decidely so", "Without a Doubt", "Yes, definitly"]

        # Loop condition
        lQuestion = True

        # Print welcome message
        print("Welcome " + self.__name)

        # Run loop
        while lQuestion:

            # get questions from user
            mQuest = input("Please enter a question : ")

            mRespond = mResponse[random.randint(0,7)]

            if mQuest == "":
                print("Thank you for playing")
                self.__write_questions()
                
                sys.exit()
            else:
                print(mRespond)

                self.__myQuestion.append(mQuest)


    def __write_questions(self):
        f = open("quest.csv", "a", newline="")

        wrt = csv.writer(f)

        for x in self.__myQuestion:
            wrt.writerow([x])

        f.close()
