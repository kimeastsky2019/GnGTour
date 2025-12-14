import pandas as pd
import json
import re

# Region Mappings
regions_ko = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주']

regions_en = {
    '서울': 'Seoul', '부산': 'Busan', '대구': 'Daegu', '인천': 'Incheon', '광주': 'Gwangju', 
    '대전': 'Daejeon', '울산': 'Ulsan', '세종': 'Sejong', '경기': 'Gyeonggi', '강원': 'Gangwon', 
    '충북': 'Chungbuk', '충남': 'Chungnam', '전북': 'Jeonbuk', '전남': 'Jeonnam', '경북': 'Gyeongbuk', 
    '경남': 'Gyeongnam', '제주': 'Jeju'
}

regions_ru = {
    '서울': 'Сеул', '부산': 'Пусан', '대구': 'Тэгу', '인천': 'Инчхон', '광주': 'Кванджу', 
    '대전': 'Тэджон', '울산': 'Ульсан', '세종': 'Седжон', '경기': 'Кёнги', '강원': 'Канвон', 
    '충북': 'Чхунбук', '충남': 'Чхуннам', '전북': 'Чонбук', '전남': 'Чоннам', '경북': 'Кёнбук', 
    '경남': 'Кённам', '제주': 'Чеджу'
}

regions_th = {
    '서울': 'โซล', '부산': 'ปูซาน', '대구': 'แดกู', '인천': 'อินชอน', '광주': 'กวางจู', 
    '대전': 'แดจอน', '울산': 'อุลซาน', '세종': 'เซจง', '경기': 'คยองกี', '강원': 'คังวอน', 
    '충북': 'ชุงบุก', '충남': 'ชุงนัม', '전북': 'จอนบุก', '전남': 'จอนนัม', '경북': 'คยองบุก', 
    '경남': 'คยองนัม', '제주': 'เชจู'
}

# Column Keys (Standardized)
columns = [
    "병원명", 
    "분야(성형/피부/치과/정형/산부인과/검진/종합)", 
    "시/군/구", 
    "비고(의료관광/외국인 다수 등)", 
    "홈페이지", 
    "대표전화", 
    "이메일", 
    "담당자 이름"
]

def clean_value(val, prefix):
    if pd.isna(val):
        return ""
    s = str(val).strip()
    if prefix and s.startswith(prefix):
        s = s[len(prefix):].strip()
    return s

def process_file(file_path, lang, region_map, prefix):
    xls = pd.ExcelFile(file_path)
    data_list = []
    
    for sheet_name in xls.sheet_names:
        # For KO, we have headers. For others, we assume no headers (or header is row 0 but we want to rename columns)
        if lang == 'ko':
            df = pd.read_excel(xls, sheet_name=sheet_name)
        else:
            df = pd.read_excel(xls, sheet_name=sheet_name, header=None)
            # Assign columns manually
            if len(df.columns) >= len(columns):
                df.columns = columns + list(df.columns[len(columns):])
            else:
                # Handle case where columns are fewer?
                df.columns = columns[:len(df.columns)]
        
        df = df.fillna('')
        records = df.to_dict(orient='records')
        
        region_name = region_map.get(sheet_name, sheet_name)
        
        for record in records:
            # Clean values
            cleaned_record = {}
            for k, v in record.items():
                if k in columns:
                    cleaned_record[k] = clean_value(v, prefix)
            
            cleaned_record['region_province'] = region_name
            data_list.append(cleaned_record)
            
    return data_list

all_data = {}

print("Processing KO...")
all_data['ko'] = process_file('jospital_list/medical_tourism_17regions_contacts.xlsx', 'ko', {k:k for k in regions_ko}, None)

print("Processing EN...")
all_data['en'] = process_file('jospital_list/medical_tourism_translated_en.xlsx', 'en', regions_en, '[EN]')

print("Processing RU...")
all_data['ru'] = process_file('jospital_list/medical_tourism_translated_ru.xlsx', 'ru', regions_ru, '[RU]')

print("Processing TH...")
all_data['th'] = process_file('jospital_list/medical_tourism_translated_th.xlsx', 'th', regions_th, '[TH]')

with open('src/data/medical_contacts.json', 'w', encoding='utf-8') as f:
    json.dump(all_data, f, ensure_ascii=False, indent=2)

print("Done!")
