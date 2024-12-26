from turtle import *

def draw_squares(x_coordinate, y_coordinate):
    penup()
    goto(x_coordinate, y_coordinate)
    pendown()

    for x in range(4):
        forward(200)
        left(90)

draw_squares(100, 100)
draw_squares(-300, 100)
draw_squares(-300, -300)
draw_squares(100, -300)