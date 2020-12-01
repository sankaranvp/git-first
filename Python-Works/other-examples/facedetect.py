import tkinter as tk
import cv2
from PIL import ImageTk,Image

app=tk.Tk()
Win=tk.Label(app)
camera=cv2.VideoCapture(1)
haar_cascade_filepath = cv2.data.haarcascades + '/haarcascade_frontalface_default.xml'
classifier=cv2.CascadeClassifier(haar_cascade_filepath)
while True:
	def Detect():
		global photo
		ret,frame=camera.read()
		if not ret:
			return
		faces=classifier.detectMultiScale(cv2.cvtColor(frame,cv2.COLOR_BGR2RGB),1.3,5)
		for x,y,w,h in faces:
			cv2.rectangle(frame,(x,y),(x+w,y+h),(255,0,0),2)
		cv2.cvtColor(frame,cv2.COLOR_BGR2RGB)
		width,height,no_channel=frame.shape
		Win.configure(width=width,height=height)
		Win.pack()
		photo=ImageTk.PhotoImage(image=Image.fromarray(frame))
		Win.configure(image=photo)
		Win.update()
		Win.after(0,Detect)
	Detect()
app.mainloop()