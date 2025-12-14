import pandas as pd

xls = pd.ExcelFile('jospital_list/medical_tourism_17regions_contacts.xlsx')
df = pd.read_excel(xls, sheet_name=0)
print(df.columns.tolist())
