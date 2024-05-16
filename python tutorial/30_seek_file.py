f=open("rittik.txt")
print(f.readline())

print(f.tell())# tell tails us where is ur pointer right now after reading that line
print(f.readline())
f.seek(10)# seek points the pointer where we want to point in file.
print(f.tell())
f.close()