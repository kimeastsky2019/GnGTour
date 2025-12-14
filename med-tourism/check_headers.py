import pandas as pd

def check_headers(file_path):
    xls = pd.ExcelFile(file_path)
    df = pd.read_excel(xls, sheet_name=0)
    print(f"--- Headers for {file_path} ---")
    print(df.columns.tolist())

check_headers('jospital_list/medical_tourism_translated_en.xlsx')
check_headers('jospital_list/medical_tourism_translated_ru.xlsx')
check_headers('jospital_list/medical_tourism_translated_th.xlsx')
