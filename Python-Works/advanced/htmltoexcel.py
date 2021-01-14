# Importing pandas 
import pandas as pd 

# The webpage URL whose table we want to extract 
url = "https://www.progracoding.com/data-types-in-c/"

# Assign the table data to a Pandas dataframe 
table = pd.read_html(url)[0]

name ="dataname"

# Store the dataframe in Excel file 
table.to_excel("%s.xlsx" % name)

print("Excel file has been created successfully!")