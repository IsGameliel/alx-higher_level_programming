import MySQLdb
import sys

# Get the command line arguments
mysql_username = sys.argv[1]
mysql_password = sys.argv[2]
database_name = sys.argv[3]

# Connect to the MySQL server
db = MySQLdb.connect(host="localhost",
                     user=mysql_username,
                     passwd=mysql_password,
                     db=database_name,
                     port=3306)

# Create a cursor object
cur = db.cursor()

# Execute the SQL query to select all states from the database
cur.execute("SELECT * FROM states ORDER BY id ASC")

# Fetch all the rows returned by the SQL query
rows = cur.fetchall()

# Display the results
for row in rows:
    print(row)

# Close the cursor and database connection
cur.close()
db.close()
