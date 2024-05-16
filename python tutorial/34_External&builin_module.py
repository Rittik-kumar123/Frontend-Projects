import random # we use this function in games like ludo also in lottery
random_number = random.randint(0,5) # through this our progaram can take any random number btw 0 to 5
#print(random_number)
rand=random.random()*100# by multiplying with number we can increase the range of random number
#print(rand)
lst=["star plus","DD1","aaj tak"]
a= random.choice(lst)
print(a)