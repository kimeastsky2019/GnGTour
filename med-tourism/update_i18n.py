import json
import os

def update_json(file_path, new_data):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    data.update(new_data)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"Updated {file_path}")

base_path = 'src/i18n'

# EN Data
en_data = {
    "medicalContacts": {
        "title": "Korean Medical Excellence",
        "subtitle": "Discover world-class medical services and connect with top specialists in Korea. Your journey to health and beauty starts here.",
        "button": "View Medical Staff Info",
        "filters": {
            "allRegions": "All Regions",
            "allSpecialties": "All Specialties"
        },
        "noResults": "No contacts found matching your criteria."
    }
}

# KO Data
ko_data = {
    "medicalContacts": {
        "title": "대한민국 최고의 의료진",
        "subtitle": "세계적 수준의 의료 서비스와 전문 의료진 정보를 확인하실 수 있습니다. 건강과 아름다움을 위한 여정을 이곳에서 시작하세요.",
        "button": "의료진 정보 열람하기",
        "filters": {
            "allRegions": "모든 지역",
            "allSpecialties": "모든 진료과"
        },
        "noResults": "조건에 맞는 의료진을 찾을 수 없습니다."
    }
}

# RU Data
ru_data = {
    "medicalContacts": {
        "title": "Медицинское превосходство Кореи",
        "subtitle": "Откройте для себя медицинские услуги мирового класса и свяжитесь с лучшими специалистами Кореи. Ваш путь к здоровью и красоте начинается здесь.",
        "button": "Посмотреть информацию о врачах",
        "filters": {
            "allRegions": "Все регионы",
            "allSpecialties": "Все специальности"
        },
        "noResults": "Контакты не найдены по вашим критериям."
    }
}

update_json(os.path.join(base_path, 'en.json'), en_data)
update_json(os.path.join(base_path, 'ko.json'), ko_data)
update_json(os.path.join(base_path, 'ru.json'), ru_data)
