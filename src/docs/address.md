---
title: Адрес
---

## Адрес

Address - тип данных в FHIR. Заполняется в соответствии с почтовыми соглашениями (в отличие от GPS  и других форматов). Этот тип данных используется для передачи почтового адреса, а также для указания местоположения объекта.

## Поля объекта

| Имя  | Описание |
| ------------- | ------------- |
| use | Тип применения адреса: домашний, рабочий, временный, устаревший, для выставления счетов  |
| type | Тип: почтовый, физический, оба  |
| text | Текстовое представление адреса  |
| line | Строка адреса, которая может содержать улицу, номер дома и т.п.  |
| city | Наименование города, населенного пункта  |
| district | Район, область, графство  |
|state  | Штат, регион  |
| postalCode |  Почтовый индекс |
| country | Страна  |
| period | Время действия адреса  |



## Кодирование объекта address в ФРМО

| Поле объекта Address  | Поле типа данных FHIR.Address |
| ------------- | ------------- |
| Версия ФИАС | Address.extension |
| Идентификатор населенного пункта по ФИАС | ------------- |
| Идентификатор улицы по ФИАС | ------------- |
| Идентификатор дома по ФИАС | ------------- |
| Идентификатор объекта адреса по ГАР | ------------- |
| Код субъекта РФ | ------------- |
| Идентификатор субъекта РФ | ------------- |
| Субъект РФ | ------------- |
| Код | ------------- |
| Признак города федерального значения | ------------- |
| Наименование населенного пункта | ------------- |
| Префикс населенного пункта | ------------- |
| Наименование улицы | ------------- |
| Префикс улицы | ------------- |
| Номер дома | ------------- |
| Номер корпуса | ------------- |
| Номер строения | ------------- |
| Номер квартиры | ------------- |
| ------------- | ------------- |



## Стандартные расширения Address

Полный список стандартных расширений http://hl7.org/fhir/datatypes-extras.html#Address.

| Имя  | Описание |Описание |
| ------------- | ------------- |
| http://hl7.org/fhir/extension-geolocation.html |  Geolocation | for General Extensions for use by FHIR Implementers |
| http://hl7.org/fhir/extension-language.html |  Human Language | for General Extensions for use by FHIR Implementers |


### ISO 21090 Data Type Extensions

Address (AD)
These extensions provide support for various additional properties of the Address data type. There are kinds of properties:

- address-use - Identifies additional usages not supported by the Address.use property

Additional address parts not broken out as distinct elements in the Address data type, including:
- address-part-additionalLocator - Additional information beyond the street number. E.g. apartment number
- address-part-unitID - Number of a unit within a building
- address-part-unitType - Type of unit. E.g. appartment, floor
- address-part-deliveryAddressLine - Delivery to an installation rather than a physical address. E.g. PO box, depot, station
- address-part-deliveryInstallationType - Lype of delivery site (PO Box, depot, station)
- address-part-deliveryInstallationArea - The jurisdiction in which the delivery address is located
- address-part-deliveryInstallationQualifier - A number or letter identifying the delivery site. E.g. Station "A", Rural Route "104"
- address-part-deliveryMode - Type of delivery. E.g. rural route, post office box
- address-part-deliveryModeIdentifier - Routing information such as route number, box number
- address-part-streetAddressLine - A type of address identifying a building located by street name
- address-part-houseNumber - The number of the building on the street
- address-part-buildingNumberSuffix - The non-numeric portion of a building number. E.g. "A" in 103A Some Street
- address-part-postBox - A post office box number
- address-part-houseNumberNumeric -The numeric portion of a building number. E.g. "103" in 103A Some Street
- address-part-streetName - The name of a street (distinct from the building number)
- address-part-streetNameBase - The name of a street excluding type and direction. E.g. "Main" in Main Street NW
- address-part-streetNameType - The type of a street. E.g. "Street" in Main Street NW
- address-part-direction - The direction of a street. E.g. "NW" in Main Street NW
- address-part-careOf - The name of a person to take receipt at the specified address who is responsible for ensuring final deliver
- address-part-censusTract - A geographic region delineated for demographic purposes
- address-part-delimiter - A separator such as a carrage return, dash, comma, etc.
- address-part-precinct - A subsection of a municipality


## Кодирование адреса

Рассмотреть использование __[dadata.ru](https://dadata.ru)__ по крайней мере как структуру для адреса.

__[API](https://dadata.ru/api/clean/address/)__

## Пример ответа dadata.ru

```
[
{
    "source": "мск сухонска 11/-89",
    "result": "г Москва, ул Сухонская, д 11, кв 89",
    "postal_code": "127642",
    "country": "Россия",
    "country_iso_code": "RU",
    "federal_district": "Центральный",
    "region_fias_id": "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
    "region_kladr_id": "7700000000000",
    "region_iso_code": "RU-MOW",
    "region_with_type": "г Москва",
    "region_type": "г",
    "region_type_full": "город",
    "region": "Москва",
    "area_fias_id": null,
    "area_kladr_id": null,
    "area_with_type": null,
    "area_type": null,
    "area_type_full": null,
    "area": null,
    "city_fias_id": null,
    "city_kladr_id": null,
    "city_with_type": null,
    "city_type": null,
    "city_type_full": null,
    "city": null,
    "city_area": "Северо-восточный",
    "city_district_fias_id": null,
    "city_district_kladr_id": null,
    "city_district_with_type": "р-н Северное Медведково",
    "city_district_type": "р-н",
    "city_district_type_full": "район",
    "city_district": "Северное Медведково",
    "settlement_fias_id": null,
    "settlement_kladr_id": null,
    "settlement_with_type": null,
    "settlement_type": null,
    "settlement_type_full": null,
    "settlement": null,
    "street_fias_id": "95dbf7fb-0dd4-4a04-8100-4f6c847564b5",
    "street_kladr_id": "77000000000283600",
    "street_with_type": "ул Сухонская",
    "street_type": "ул",
    "street_type_full": "улица",
    "street": "Сухонская",
    "house_fias_id": "5ee84ac0-eb9a-4b42-b814-2f5f7c27c255",
    "house_kladr_id": "7700000000028360004",
    "house_type": "д",
    "house_type_full": "дом",
    "house": "11",
    "block_type": null,
    "block_type_full": null,
    "block": null,
    "entrance": null,
    "floor": null,
    "flat_fias_id": "f26b876b-6857-4951-b060-ec6559f04a9a",
    "flat_type": "кв",
    "flat_type_full": "квартира",
    "flat": "89",
    "flat_area": "34.6",
    "square_meter_price": "198113",
    "flat_price": "6854710",
    "postal_box": null,
    "fias_id": "f26b876b-6857-4951-b060-ec6559f04a9a",
    "fias_code": "77000000000000028360004",
    "fias_level": "9",
    "fias_actuality_state": "0",
    "kladr_id": "7700000000028360004",
    "capital_marker": "0",
    "okato": "45280583000",
    "oktmo": "45362000",
    "tax_office": "7715",
    "tax_office_legal": "7715",
    "timezone": "UTC+3",
    "geo_lat": "55.8782557",
    "geo_lon": "37.65372",
    "beltway_hit": "IN_MKAD",
    "beltway_distance": null,
    "qc_geo": 0,
    "qc_complete": 0,
    "qc_house": 2,
    "qc": 0,
    "unparsed_parts": null,
    "metro": [
        {
            "name": "Бабушкинская",
            "line": "Калужско-Рижская",
            "distance": 1.1
        },
        {
            "name": "Медведково",
            "line": "Калужско-Рижская",
            "distance": 1.2
        },
        {
            "name": "Свиблово",
            "line": "Калужско-Рижская",
            "distance": 2.5
        }
    ]
}
]
```





