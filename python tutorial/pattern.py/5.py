n=int(input("Enter number: "))
for i in range(n):
    for j in range(i):
        print(" ",end=" ")
    for j in range(n-(2*i)):
        print("*",end=" ")
    print()