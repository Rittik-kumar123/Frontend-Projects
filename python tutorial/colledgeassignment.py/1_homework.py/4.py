dict={"jan":31,"feb":28,"march":31,"april":30,"may":31,"june":30,"july":31,"august":30,"sept":31,"oct":30,"nov":31,"dec":30}
n1=input("Enter Month name: ")
print(dict[n1])
print(sorted(dict.keys()))
for item in dict:
    if dict[item]==31:
        print(item,end=" ")

