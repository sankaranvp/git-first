from turtle import *

color('red','yellow')
begin_fill()

while True:
       
    backward(200)
    left(90)
    backward(90) 
    
    if abs(pos()) < 1:
        break
    end_fill()
    done()
