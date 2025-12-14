import pandas as pd

def check_sheets(file_path):
    xls = pd.ExcelFile(file_path)
    print(f"--- Sheets for {file_path} ---")
    print(xls.sheet_names)

check_sheets('jospital_list/medical_tourism_translated_en.xlsx')
