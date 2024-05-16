lis = ["Rittik","Rahul","Roshan","Mayank","Praveen"]

for item in lis:
    print(item + " and ", end=" ")# with using for we can join the item of the list
print("Others are good friends")
# or

a=" and ".join(lis)# join list uses
print(a,"and","Others are good friends")