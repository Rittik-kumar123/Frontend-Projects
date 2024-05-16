# def func1():
    # print("hey")
# func2 = func1
# del func1
# func2()
# func1()


# def funcret(num): here we have return function inside a function
    # if num==1:
        # return print
    # elif num==0:
        # return sum
# a=funcret(1)
# print(a)

#
# def executar(func): here we have pass function as an argument under a function
    # func("hey")
# executar(print)


def dec1(func):     #this function is to understand decorator
    def rk():
        print("executing now")
        func()
        print("executed")
    return rk
@dec1 # insted of writing func2=dec1(func1) this we can also use @dec1 that is a short form
      #this short form is a decorator
def func1():
    print("hii")
# func2=dec1(func1)
func1()
