s=set()# by ussing set() we can initialise set
print(type(s))
s.add(1) # ussing add we can add element in set
s.add(2)
s.add(1)# if we enter two simillar things or element then it will show one elemnt
s1=s.union({1,2,3}) #we can perform union intersection which we perform in math
print(s,s1)
s2={2,3}
print(s.isdisjoint(s2))
s3=s1.intersection({4,3,1})# we take intersection of s1 with{4,3,1}and store the value in s3
print(s3)
print(s,s3)
