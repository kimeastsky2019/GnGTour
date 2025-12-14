import pandas as pd

xls = pd.ExcelFile('medical_tourism_17regions_contacts.xlsx')
print(xls.sheet_names)
