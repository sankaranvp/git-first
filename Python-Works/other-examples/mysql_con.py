# Import python-mysql connector [pymysql]
import pymysql

# Connection : pymysql.connect(host, user, pass, db)
conn = pymysql.connect("localhost","root","","testpython")

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
