# difference between instance variable and class variable
class Employee:
    no_of_leaves=10# ths data can  be use by both praveen or rittik
    pass

Rittik=Employee()
Praveen=Employee()

# Rittik's data
Rittik.name="Rittik kumar"
Rittik.salary=1000000
Rittik.position="A.D"

#praveen's detail
Praveen.name="Praveen verma"
Praveen.salary=100000
Praveen.position="C.E.O"

print(Praveen.position)
print(Praveen.no_of_leaves)# here we are calling this by using instance variable
print(Praveen.__dict__)
Praveen.no_of_leaves=13# we can't change the class variable
print(Praveen.no_of_leaves)
print(Praveen.__dict__)# it returns a dictionary and told us about the type of variables had made.
print(Employee.no_of_leaves)
Employee.no_of_leaves=11# class variable can only be change by the class itself no object is allowed to change that
                        # as it is class property or we can also say that through instance we can't change class variable
print(Employee.no_of_leaves)# here we are using class