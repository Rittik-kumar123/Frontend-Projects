with open("rittik.txt") as f: # here in with we do not have to close the file again.
   a=f.read(4)
   print(a)
f=open("rittik.txt","r")
print(f.readline()) 
f.close()