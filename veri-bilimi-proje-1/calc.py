#! /usr/bin/env python
# -*- coding: UTF-8 -*-
import pandas as pd
import statistics

# 240 GÜNLÜK USD/TRY KUR DEĞERİ OKUNDU #
data = pd.read_csv("usd-try.csv")
day = data["Gun"]
price = data["Fiyat"]

# OUTLIER İŞLEMİ YAPILDI AYKIRI DEĞERLER ÇIKARTILDI #
average_price = statistics.mean(price)
max_price =  max(price)
min_price = min(price)

average_limit = round(((abs(max_price-average_price)+abs(min_price-average_price))/2), 2)
max_limit = round((average_price + average_limit), 2) # 3.37
min_limit = round((average_price - average_limit), 2) # 2.63

data_list = []
for i in data.values.view():
    data_list.append(list(i))

new_list = []
for j in data_list:
    if (j[1] > min_limit) and (j[1] < max_limit):
        new_list.append(j)

# 30 GÜNLÜK PARÇALARA BÖLÜNEREK KATEGORİZE EDİLDİ #
last_list = []
temporary = []
counter = 1
for k in new_list:
    temporary.append(k)
    if counter % 30 == 0:
        last_list.append(temporary)
        temporary = []
    counter += 1
last_list.append(temporary)

print(last_list)

"""
Proje yapım aşamasında...

- Error metriği: RMSE veya RMSLE

- Train: Validation ve test olarak böl

- Birden çok model dene, metriğe en uygun olanı seç

Requirements
  from sklearn.linear_model import LinearRegression
  from sklearn.preprocessing import PolynomialFeatures
"""