list=[3,7,9,5,int,float,"lool"]
for i in list:
    if str(i).isnumeric() and i>6:#here str(i)is use to type caste i in str through 
        #isnumeric we basically know that the items are numeric or not if yes then we proceed further. 
        print(i)