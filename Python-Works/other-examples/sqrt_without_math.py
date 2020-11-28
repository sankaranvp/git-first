class sqrtnew:

    def __init__(self, num):
        self.__num = int(num)

        self.getSqrt()

    def getSqrt(self):

        if 99 < self.__num:
            i = 10
        elif 999 < self.__num:
            i = 32
        else:
            i = 1

        while i <=self.__num:
            if self.__num / i == i:
                print("The Square Root of %d = %d" %(self.__num, i) )
                break  

            i+=1
                
        
