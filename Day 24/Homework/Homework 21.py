from turtle import *

penup()
goto(100, 100)
pendown()

for x in range(4):
    forward(200)
    left(90)

penup()
goto(-300, 100)
pendown()

for x in range(4):   
    forward(200)
    left(90)

penup()
goto(-300, -300)
pendown()

for x in range(4):   
    forward(200)
    left(90)

penup()
goto(100, -300)
pendown()

for x in range(4):   
    forward(200)
    left(90)

exitonclick()