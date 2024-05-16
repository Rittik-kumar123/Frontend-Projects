#Reverse Words In A String
str2="  Hey    There!!"
list1=[]
list2=[]
l=len(str2)
str1=""
for i in range(0,l):
    if str2[i]==" ":
        list1.append(str1)
        str1=""
    else:
        str1+=str2[i]
print(str1)
list1.append(str1)
print(list1)
l2=len(list1)
# for i in list1:
    # if i!="":
        # list2.append(i)
# print(list2)
# for i in reversed(range(l2)):
    # if list1[i]!="":
        # print(list1[i],end=" ")
    