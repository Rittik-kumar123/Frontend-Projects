#5)	Write a Python program to encrypt the message by adding a key value to every character (Caesar Cipher) 
#Input : H E L L O 
#+3 
#Output : K H O O R 

str1=input("Enter String :")
str2=''
list2=[]
for i in str1:
    list2.append(chr(ord(i)+3))
for i in list2:
    str2+=''+i
print(str2)