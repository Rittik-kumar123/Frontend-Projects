dict={"Rittik":1,"Roushan":2,"Rahul":3,"praveen":4,"mayaank":5,"Nikihl1":6,"Nikhil":7}
n1=input("Enter Username:")
if n1 in dict:
    n2=int(input("Enter password:"))
    if dict[n1]==n2:
        print("YOu are now logged in")
    else:
        print("Invalid password")
else:
    print("you are not valid")


