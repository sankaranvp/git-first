# Import python-mysql connector [mysql.connector]
import mysql.connector
from mysql.connector import Error

config = {
  'user'     : 'root',
  'password' : '',
  'host'     : 'localhost',
  'database' : 'testpython',
  'raise_on_warnings': True
}

# Connection : mysql.connector.connect(user, pass, host, db)
conn = mysql.connector.connect(**config)

cursor = conn.cursor()

sql = "SELECT * FROM tp_login"

try:
    
    cursor.execute(sql)
    results = cursor.fetchall()    
    for row in results:
        print(row)
        
except:
    
    print ("Error: unable to fecth data")

conn.close()
