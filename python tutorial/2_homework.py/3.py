#Write a Python program that counts the occurrence of Character in a String (Do not use built in 'count' function). Modify the above program so that it starts counting from Specified Location. 
# str1=input("Enter String :")
# x=input("Enter The letter whose occurance u want to know ")
# count=0
# for i in str1:
    # if i == x:
        # count=count+1
# print(x," has ocured ",count," times.")
produt=[]
price=[]
print('no of product u want:')
n=int(input('Enter number'))
for i in range(0,n):
    p=input('Enter product name:')
    pr=int(input('enter price:'))
    produt.append(p)
    pr=pr*(0.11)
    price.append(pr)
for i in range(0,n):
    print(produt[i],' ',price[i])
