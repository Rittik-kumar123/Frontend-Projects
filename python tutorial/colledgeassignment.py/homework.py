list=[1,2,1,4,5];
list[0],list[-1]=list[-1],list[0];
print(list)
l=len(list)
print(l)
for i in range(0,l):
    list[i],list[-1-i]=list[-1-i],list[i]
print(list)
c=7
print(c in list)
list.reverse()
print(list)
list1=list.copy()
print(list1)
count=0
num=1
for i in range(0,l):
    if list[i]==num:
        count=count+1
print(num,"comes",count,"times in a list")
sum=0
for i in range(0,l):
    sum=sum+list[i]
print(sum) 
print("The largest number is print list",max(list),"and the smallest one is ",min(list))
list.sort()
l=len(list)
print("second largest element is",list[l-2])
even_count=0
odd_count=0
for i in range(0,l):
    if(list[i]//2==0):
        even_count=even_count+1
    else:
        odd_count=odd_count+1       
print("Total even number in list is",even_count,"and odd numbers are",odd_count)
list=[-1,-2,0,1,2]
count1=0
count2=0
for i in range(0,len(list)):
    if list[i]<0:
        count1=count1+1
    else:
        count2=count2+2
print("Total negative number in a list is",count1,"and positive number is",count2)

 
    