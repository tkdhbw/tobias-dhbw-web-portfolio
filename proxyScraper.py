import requests 
from bs4 import BeautifulSoup
import re
from datetime import datetime

word_to_num = {
    'Zero': '0', 'One': '1', 'Two': '2', 'Three': '3', 'Four': '4', 'Five': '5',
    'Six': '6', 'Seven': '7', 'Eight': '8', 'Nine': '9'
}

path = "/var/www/html/"

def replace_words_with_numbers(s):
    for word, num in word_to_num.items():
        s = s.replace(word, num)
    return s

url = 'https://spys.one/en/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

response = requests.get(url, headers=headers)

with open(path + 'proxyList.txt', 'w') as file:

    if response.status_code == 200:

        html_content = response.text

        soup = BeautifulSoup(html_content, 'html.parser')

        proxy_entries = soup.find_all('tr', class_=re.compile('spy1x|spy1xx'))

        file.write(f'{datetime.now().strftime("%d.%m.%Y %H:%M:%S")}')

        for entry in proxy_entries:
            ip_tag = entry.find('font', class_='spy14')
            script_tag = ip_tag.find_next('script') if ip_tag else None
            country_tag = entry.find('font', class_='spy14').find_next('acronym') if ip_tag else None

            type_tag = entry.find('font', class_='spy1')
            anonymity_tag = type_tag.find_next('font') if type_tag else None
            uptime_tag = anonymity_tag.find_next('font', class_='spy1').find_next('acronym') if anonymity_tag else None
            check_date_tags = entry.find_all('font', class_='spy1')[-2:]

            if script_tag and ip_tag and country_tag and type_tag and anonymity_tag and uptime_tag and check_date_tags:
                ip = ip_tag.get_text(strip=True)
                country = country_tag.get('title', 'Unknown').split(' ')[0]
                proxy_type = type_tag.get_text(strip=True)
                anonymity = anonymity_tag.get_text(strip=True)
                uptime = uptime_tag.get_text(strip=True)
                check_date = ' '.join(tag.get_text(strip=True) for tag in check_date_tags)
                script_code = script_tag.string

                script_code_numeric = replace_words_with_numbers(script_code)

                port_matches = re.findall(r'((w+)^(w+))', script_code_numeric)
                if port_matches:
                    port = 0
                    for part in port_matches:
                        port ^= int(part[0], 16) ^ int(part[1], 16)
                    file.write(f'Proxy: {ip}:{port}, Country: {country}, Type: {proxy_type}, Anonymity: {anonymity}, Uptime: {uptime}, Check Date: {check_date}')
    else:
        file.write(f"Failed to retrieve the webpage. Status code: {response.status_code}")

print('Done')