# def func1(a,b,c,d):
    # print(a,b,c,d)
# func1("Rittik","Rahul","praveen","Roshan")    
def funcargs(normal,*argsname,**kwargs):# here the sequence of normal and args should be maintained
    print(normal)
    for item in argsname:      # by using args it's to update our list
        print(item)
    print("some informations using kwargs")
    for key,value in kwargs.items():#kwargs helps us to writedictionary
        print(f"{key}={value}")
    
name1 = ("Rittik","Rahul","praveen","Roshan")   # here eiteher we use square braket or tuple on both the case type of arg is tuple
normal = "It's just a name"

kw={"Rittik":"me who's writing the code","Rahul":"one of rittik friend,roommate",
      "praveen":"roommate","Roshan":"My Friend And classmate"}
funcargs(normal,*name1,**kw)