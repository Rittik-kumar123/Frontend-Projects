#2)	Write a Python program that accept a String from User and Re-display the same after removing Vowels from it (use user defined function). 
str2=input("Enter string: ")
list=['a','i','e','o','u','A','E','I','O','U']
list1=[]
for i in str2:
    if i not in list:
        list1.append(i)
str1=str(list1)
print(str2)
