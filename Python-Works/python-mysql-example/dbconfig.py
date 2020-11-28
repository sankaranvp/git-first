# Basic class for Python-MySql connection
class pymydb:
	def __init__(self):
		self.__conn = False
		self.__config()

	def __config(self):
		import mysql.connector as mc
		from mysql.connector import Error

		config = {
				  'user'     : 'root',
				  'password' : '',
				  'host'     : 'localhost',
				  'database' : 'testpython',
				  'raise_on_warnings': True
				}

		# Connection : mysql.connector.connect(user, pass, host, db)
		conn = mc.connect(**config)		

		if conn.is_connected():
			self.__conn = True
		else:
			self.__conn = False


		print(self.__conn)