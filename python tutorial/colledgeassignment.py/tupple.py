# change tupple value
x=(1,2,3,4)
# x[1]=7 through this method we can't modify tupple for modifying it we have to first convert tupple into list.
y=list(x)#conversion of tupple into a list.
y[1]=7
x=tuple(y)
print(x)

# tuple with single element
   # we have to add comma after that element.
# x=(1) not a tupple class type is integer
x=(1,)
print(type(x))

# updating tuple
x=(1,2,3,4)
y=(5,6,7,8)
tup3=x+y
print(tup3)


# deleting tupple
z=(1,2,3,4)
# del z[2] type error we cant delete element from tupple
del z # we can delete whole tupple using this del library


# count number of duplicate elements
x=(1,2,3,4,2,2)
print(x.count(2))

# tuple returning multiple values
def maximum(mark):
    x=max(mark)
    y=min(mark)
    return(x,y)
mark=(90,46,35,97,65)
x= maximum(mark)
print(x)


# tupple comprehension
def triple(t):
    return([i*3 for i in t])
tup=(1,2,3,4)
print(tup)
tup1=triple(tup)
print(tup1)

# zip(a,b) where a is tple and b is list it one element from a ,b together




