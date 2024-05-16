n=int(input("Enter Number: "))
for i in range(n):
    for j in range(i,n):
        print(" ",end=" ")
    for j in range((2*i)):
        print("*",end=" ")
    print()