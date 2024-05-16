from lib2to3.pgen2.token import EQUAL


def func1():
    f=open("rahul_exer.txt","r")
    a=f.read()
    print(a)
    f.close()
def func2():
    f=open("rahuldiet.txt","r")
    a=f.read()
    print(a)
    f.close()
def func3():
    f=open("roshanexer.txt","r")
    a=f.read()
    print(a)
    f.close()
def func4():
    f=open("roshandiet.txt","r")
    a=f.read()
    print(a)
    f.close()

c= input("enter the name whose condition you want to know:")
print("number 1 for rahul exercise")
print("number 2 for rahul diet")
print("number 1 for roshan exercise")
print("number 2 for roshan diet")
d= int(input("Enter number"))
if c == "rahul":
    if d == 1:
        func1()
    elif d==2:
        func2()
elif c == "roshan":
    if d == 1:
      func3()
    elif d==2:
      func4 ()
else:
    print("Enter the name to know the diet or exercise plan")      


