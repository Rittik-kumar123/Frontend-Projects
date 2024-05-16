# a=0
# b=1
# for i in range(0,9) :
    # c=a+b
    # for j in range(a+1,b):
        # print(j)
    # a=b
    # b=c
# 
sum=0
def fact(i):
    if i==0:
        return 1
    else:
        return i*fact(i-1)
n=int(input("Enter the number:"))
for i in range (1,n+1):
    sum=i*i/fact(i) + sum
print(sum)
# 
# 
#swapping of number
# a=int(input("Enter number a :"))
# b=int(input("Enter number b :"))
# a,b=b,a
# print("a is",a)
# print("b is",b)

# prime number in range(1,100)
# for i in range (1,101):
    # count=0
    # for j in range (2,i):
        # if i%j==0:
            # count=count+1
            # break
    # if count==0:
        # print(i)