import math
class investment:
    def __init__(self,prin,rate,time):
        self.prin=prin
        self.rate=rate
        self.time=time
    def res(self):
        return self.prin*pow(((self.rate/100)+1),self.time)
s1=investment(100,5,10)
print(s1.res())

