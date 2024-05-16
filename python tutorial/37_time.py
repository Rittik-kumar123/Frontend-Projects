import time
# initial = time.time()
# k=0
# while(k<45):
    # print("hey")
    # k+=1
# print("while loop ran in",time.time()-initial,"second")
# initial1 = time.time()
# for i in range(45):
    # print("hey")    
# print("while loop ran in",time.time()-initial1,"second")
localtime = time.asctime(time.localtime(time.time()))
print(localtime)
time.sleep(2)#this we use to delay the proggram for time that we want