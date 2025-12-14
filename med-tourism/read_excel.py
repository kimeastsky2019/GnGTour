import pandas as pd
import json

def read_all_sheets():
    try:
        xls = pd.ExcelFile('medical_tourism_17regions_contacts.xlsx')
        all_data = []
        
        for sheet_name in xls.sheet_names:
            df = pd.read_excel(xls, sheet_name=sheet_name)
            df = df.fillna('')
            
            records = df.to_dict(orient='records')
            # Add the sheet name as the top-level region
            for record in records:
                record['region_province'] = sheet_name
                all_data.append(record)
                
        print(json.dumps(all_data, ensure_ascii=False, indent=2))
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    read_all_sheets()
