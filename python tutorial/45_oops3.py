# constructors helps us to give argument to the employee
class Employee:
    no_of_leaves=10
    def__init__(self,name,salary,role):

    
    def printdetails(self):
        return f"Employee name is {self.name},Employee salary is {self.salary}"


Rittik=Employee("Rittik kumar",1000000,"A.D")
# Praveen=Employee()
# 
# Rittik's data
# Rittik.name="Rittik kumar"
# Rittik.salary=1000000
# Rittik.position="A.D"
# 
# praveen's detail
# Praveen.name="Praveen verma"
# Praveen.salary=100000
# Praveen.position="C.E.O"

print(Rittik.printdetails())