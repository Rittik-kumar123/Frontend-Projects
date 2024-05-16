class student:  # here we have left class empty but generall it is not empty
    pass        # it is filled with blueprints ,object etc.

rittik=student()
rahul=student()
rittik.name="Rittik"           # way to store data in class
rittik.unvRollno=13000221078
rittik.subjects=["maths","physics"]
print(rittik.name,rittik.unvRollno,rittik.subjects) 
print(rahul,rittik) # here both have different memmory allocation
