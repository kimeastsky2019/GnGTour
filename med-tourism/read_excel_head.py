import pandas as pd
import json

try:
    df = pd.read_excel('medical_tourism_17regions_contacts.xlsx')
    df = df.fillna('')
    # Get first 10 rows
    data = df.head(10).to_dict(orient='records')
    print(json.dumps(data, ensure_ascii=False, indent=2))
except Exception as e:
    print(f"Error: {e}")
