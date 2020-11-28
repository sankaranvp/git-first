# File operations
f = open("data.txt", "r") # Read mode

print(f.read())

#print(f.read(2)) # Read first two characters of first line

#print(f.readline()) # Line by line
#print(f.readline()) # Line by line


# File reading by loop
for x in f:
    print(x)
    #print(x.strip()) # Remove extra spsces
