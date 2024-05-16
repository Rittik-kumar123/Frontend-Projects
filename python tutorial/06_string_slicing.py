# mystr=input("enter the string that u want to print")
# print(len(mystr))
# print(mystr[0:5:2])# it will print 5 character from string as it escape last number that is 5
# list1=['', '', 'Hey', '', '', '', 'There!!']
# str1=""
# for i in range(0,len(list1)):
    # if list1[i]!='':
        # str1=str1+list1[i]+' '
# print(str1)
# str1="Hii I am the rittik"
# list1=['a','an','the']
# str2=""
# str2=str1.split()
# str3=""
# for i in str2:
    # if i not in list1:
        # str3=str3+i+' '
# print(str3)
# n=int(input('Enter number:'))
# str1=""
# for i in range(0,n-1):
    # a=input('Enter number:')
    # str1+=a+'+'
# a=input('Enter number:')
# str1+=a
# print(str1)
str1=input('Enter string:')
str2=''
key=int(input("Enter key value: "))
list2=[]
for i in str1:
    list2.append(chr(ord(i)+key))
for i in list2:
    str2+=i+''
print(str2)




