def fact(i):
    if i==0 or i==1:
        return 1
    else:
        return int(i*fact(i-1))

def ncr(i,j):
    return int(fact(i)/(fact(i-j)*fact(j)))
n=int(input("Enter Number: "))
for i in range(n):
    for j in range(n-i-1):
        print(" ",end=" ")
    for j in range(i+1):
        print(ncr(i,j),end="  ")
    print()