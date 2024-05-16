n=int(input("Enter number: "))
for i in range(n):
    for j in range(i):
       print(" ",end=" ")
    for j in range(i+1,0):
        print(j,end=" ")
    for k in range(n-1,0,-1):
        print(k,end=" ")
    print()