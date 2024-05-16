from xmlrpc.client import boolean


n=int(input("enter the number"))
a=bool(n)

row=1
if a == True :
     while(n>0):
        print(n*"*")
        n-=1
else:
    while(row<=n):
        print(row*"*")
        row+=1