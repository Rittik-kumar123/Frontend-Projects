
num=int(input("enter number for guees"))
count=0
num3=int(input("number attempts u want to give"))
while count<num3:
    num1=int(input("enter number"))
    if num1==num:
        count = count+1
        print(count,"guess is right")
        break
    elif num1!=num:
         count=count+1
         print(num3-count,"attempts u have")
    else:
        print("you have tried more than 9 times")        

