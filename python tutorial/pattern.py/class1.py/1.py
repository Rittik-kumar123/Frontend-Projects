class student:
    def __init__(self,name,m1,m2,m3):
        self.marks=[]
        self.name=name
        self.marks.append(m1)
        self.marks.append(m2)
        self.marks.append(m3)
        self.avg=(self.marks[0]+self.marks[1]+self.marks[2])/3
    def display(self):
        print('name is: ',self.name)
        print('marks',self.marks)
        print('avg',self.avg)
name=input("Enter name: ")
m1=int(input("Enter marks1: "))
m2=int(input("Enter marks2: "))
m3=int(input("Enter marks3: "))
s1=student(name,m1,m2,m3)
s1.display()
   
      