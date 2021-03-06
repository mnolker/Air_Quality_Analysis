# Importing Dependencies
from splinter import Browser
from bs4 import BeautifulSoup
import time as tm
import pandas as pd

def init_browser():
    # Setting Up Splinter
    executable_path = {'executable_path': "C:/Windows/chromedriver"}
    return Browser('chrome', **executable_path, headless=False)

def scrape_info():
    browser = init_browser()
    
    # Creating List of Cities
    city_list = [x for item in field_item]
    
    # Creating List of Current AQI Data
    currentAQI = []
    
    baseUrl = 'https://www.airnow.gov/?'
    state = 'CA'
    country = 'USA'
    
    for city in city_list:
        # Building URL Query
        url_air_now = baseUrl + 'city=' + city + '&state=' + state + '&country=' + country

        # Visiting URL 
        browser.visit(url_air_now)
        # Visiting the URL Takes Some Time, Using the Time Module to Slow Down the Run
        tm.sleep(1)

        # Scrape page into Soup
        html = browser.html
        soup = BeautifulSoup(html, "html.parser")

        # Scraping Date & Time
        aqUpdateTime = soup.find('span', class_='aq-updated-time')
        currentDateTime = aqUpdateTime.text
        currentTime = currentDateTime.rsplit('PST')[0] + 'PST'
        currentDate = currentDateTime.rsplit('PST')[1]

        # Scraping Current Pollutant
        aqiItem = soup.find('div', class_='aqi')
        aqi = aqiItem.find('b').text
        pollutantItem = soup.find('div', class_='pollutant')
        pollutant = pollutantItem.find('b').text
        
        # Appending Dictionary to List
        currentAQI.append({"City": city, "Time": currentTime, "Date": currentDate,
                          "Current AQI Value": aqi, "Current Pollutant": pollutant})

        

    
    



scrape_info()
