dict={}
n=int(input("Enter how many products you want to insert:"))
for i in range(1,n+1):
    n1=input("Enter product name:")
    n2=input("Enter price of the product: ")
    dict[n1]=n2
print(dict)
for i in range(1,n+1):
    n3=input("Enter product name: ")
    if n3 not in dict:
        print("Product is not in dictionary: ")
    else:
        print(dict[n3])


