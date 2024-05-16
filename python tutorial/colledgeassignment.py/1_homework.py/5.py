dict={}
lst_win=[]
lst_rec=[]
while 1:
    n= int(input("Enter 0 for exit: "))
    if n==0:
        break
    else:
        name=input("Enter name of team: ")
        win=int(input("Enter number of times team win: "))
        loss=int(input("Enter number of time team loss: "))
        dict[name]=[win,loss]
        lst_win.append(win)
        if win>0:
            lst_rec.append(name)
print(dict)
print(lst_win)
print(lst_rec)
name=input("Enter the name of team u want to know wiinning percentage: ")
percentage=dict[name][0]*100/(dict[name][0]+dict[name][1])
print(percentage)
print(lst_win)
