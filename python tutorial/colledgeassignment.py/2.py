#List important operation
# print list
list=[1,2,3,4,5,6]
print(list[-4:-1])# here -1 point to last element of list or wee can also say that -i=length -i.
#updating list
list[2]=7
print(list)
# appending  a list
list.append("a")# add element at the end of a list.
print(list)
# insert element in a list.
list.insert(2,"c") # we can insert element at a specific position.
print(list)
#add a anothher list to existing one.
list2=['a','f','g']
list.extend(list2)
print(list)
#copy list
list1=list.copy()# here after copying list if we can do chnages in the copied list that will not affect our existing one.
print(list1)