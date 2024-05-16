l=10# global variable
def func1(n):
    #l=5# local this value of l will be only applicable only insude this function
    global l
    l=l+10
    print(l)
    print(n,"I Have printed")
func1("this is me")
# l will be search first in local if it is not there then it will search l globally
# if l is globally declare we can't change it value if want to change the value then 
# first we have typecast l with global