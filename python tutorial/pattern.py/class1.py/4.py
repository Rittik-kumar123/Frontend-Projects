class time:
    def __init__(self,second):
        self.second=second
    def convert_to_minute(self):
        self.minute=self.second//60
        self.rem2=self.second%60
        return f"{self.minute}:{self.rem2}"
    def convert_to_hour(self):
        self.hour=self.second//3600
        self.rem=self.second%3600
        self.minute=self.rem//60
        self.rem1=self.rem%60
        return f"{self.hour}:{self.minute}:{self.rem1}"
t1=time(3601)
print(t1.convert_to_minute())
print(t1.convert_to_hour())