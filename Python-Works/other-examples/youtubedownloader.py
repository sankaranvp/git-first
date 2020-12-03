# Youtube video downloader
from tkinter import *
from pytube import YouTube
import os

"""
Tk()           : used to initialize tkinter to create display window
geometry()     : used to set the window’s width and height
resizable(0,0) : set the fix size of window
title()        : used to give the title of window
"""
root = Tk()
root.geometry('700x500')
root.resizable(0,0)
root.title("DataFlair-youtube video downloader")

"""
Label()       : widget use to display text that users can’t able to modify
root          : is the name of the window
text          : which we display the title of the label
font          : in which our text is written
pack          : organized widget in block
"""
Label(root,text = 'Youtube Video Downloader', font ='arial 20 bold').pack()


"""
link         : A string type variable that stores the youtube video link that the user enters.
Entry()      : widget is used when we want to create an input text field.
width        : sets the width of entry widget
textvariable : used to retrieve the value of current text variable to the entry widget
place()      : use to place the widget at a specific position
"""
link = StringVar()
Label(root, text = 'Paste Link Here:', font = 'arial 15 bold').place(x= 160 , y = 60)
link_enter = Entry(root, width = 75,textvariable = link).place(x = 32, y = 90)

"""
get()           : Url variable gets the youtube link from the link variable by this function and then
str()           : will convert the link in string datatype.
stream.first()  : The video is download in the first present stream of that video by this method.
Button()        : widget used to display button on the window.
text            : which we display on the label
font            : in which the text is written
bg              : sets the background color
command         : is used to call the function
root.mainloop() : It is a method that executes when we want to run the program.
"""
def Downloader():
    url =YouTube(str(link.get()))
    video = url.streams.first()
    downfile = video.download()
    Label(root, text = 'DOWNLOADED', font = 'arial 15').place(x= 180 , y = 210)  

Button(root,text = 'DOWNLOAD', font = 'arial 15 bold' ,bg = 'pale violet red', padx = 2, command = Downloader).place(x=180 ,y = 150)

root.mainloop()
