f=open("rittik.txt","rt")# open just stores a pointer of file in f variable
                         #rt==read mode in text form
content=f.read()# helps to read the conten that we have write in our file
#print(content)

#content=f.read(345) here 345 we have write to read that much of words
#print(content)
#for line in f:
    #print(line,end="")
print(f.readline()) # for read the text line by line

f.close() # when ever u start file handling for any file when work is done just close that
          #file