# 0.a>
from audioop import reverse


d={0:10,1:20}
print(d)
d[2]=30
print(d)

#b
dict1={1:10,2:20}
dict2={3:30,4:40}
dict3={5:50,6:60}
dict1.update(dict2)
dict1.update(dict3)
print(dict1)

#c
dict3={4:30,3:40}
dict4=sorted(dict3.keys())
print(dict4)
dict4=list(dict4)
dict4.reverse()
print(dict4)

#d
print(4 in dict3.keys())

#e
d={x:x*x for x in range(5)}
print(d)
