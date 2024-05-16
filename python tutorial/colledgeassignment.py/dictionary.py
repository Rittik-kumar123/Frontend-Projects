dict={"Name":"Rittik Kumar","Roll_No.":13000221078,"dept.":"IT"}
print(dict)
for item in dict.values():
    print(item,end=" ")
print()

# updating operation
dict['section']='B'
print(dict)

dict1=dict.copy()
print(dict1)
#deletion operation
del dict1['section']
print(dict1)
#dict1.clear()# it only clears the key value pairs but through this structure of dict will exit.


# poping operation
print("name is",dict1.pop('Name'))

# sorting operation
print(sorted(dict.keys()))


# concatenate two dictionary 
d1={1:1,2:2}
d2={3:3,4:4}
d1.update(d2)
print(d1)
for item in dict.values():
    if item=="Rittik Kumar":
        print("yes")
        break
    
    



