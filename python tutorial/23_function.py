a=7
b=8
c=sum((a,b))# built in function
print(c)

# user defined function
def func(a,b):# def helps to declare func
    print("hello the sum is",a+b)
func(7,8)

def func1(a,b):
    """ this func is for sum"""
    average=(a+b)/2
    return average# returning the values in v variable
v=func1(5,4)
print(v)
print(func1.__doc__)# doc is use to read the comment that we have write in function
