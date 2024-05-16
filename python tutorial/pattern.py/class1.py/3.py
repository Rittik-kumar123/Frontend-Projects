class product:
    def __init__(self,name,amount,price):
        self.name=name
        self.amount=amount
        self.price=price
    def get_price(self):
        if self.amount<10:
            return (self.amount*self.price)
        if self.amount>=10 and self.amount<100:
            return (self.amount*self.price)-(self.amount*self.price*0.1)
        if self.amount>100:
            return (self.amount*self.price)-(self.amount*self.price*0.2)
s1=product("choco",20,10)
print(s1.get_price())