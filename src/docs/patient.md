---
title: 5.0 Пациент
---

## Пациент `urn:ru:fhir:patient`

Профиль Пациент описывает человека, получающего медицинскую помощь.

## Имя

Актуальное имя пациента записывается в поле Patient.name с `use=official`.
Для любого другого типа use кодирование имени может быть каким угодно другим, необходимым для конкретной реализации.

Имя и отчество записывается в массиве given. На первой позиции идет имя, на втором всегда отчество.
Не рекомендуется использовать больше двух элементов в given.
В случае двойного имени - оно записывается в первом поле given через пробел.
В случае сложного отчества - оно записывается во второй позиции given через пробел.

Если имя не известно, но требуется передать отчество, 
то в массиве передается пустая строчка "", 
а на втором месте указывается отчество. 
Т.о. мы гарантируем, что given[1] - это всегда отчество.


Пример:

```
resourceType: Patient
name:
- use: official
  family: Двойная фамилия
  given:
    - Двойное имя
    - Сложное отчество
```

[Предыдущее решение](https://github.com/fhir-ru/core/issues/3)
[Дискуссия про отчество](https://github.com/fhir-ru/core/discussions/31)


## Идентификаторы

Ниже приведен набор возможных систем для идентификаторов

| Название  | Описание  | Код |
| ------------- | ------------- |------------- |
| [СНИЛС] (https://ru.wikipedia.org/wiki/Страховой_номер_индивидуального_лицевого_счёта))  | Страховой номер индивидуального лицевого счёта | `urn:ru:id:ogrn` |
| [Паспорт] ()  | ... | `urn:ru:id:pasport` |
| [Загран Паспорт] ()  | ... | `urn:ru:id:inter-pasport` |
| [Свидетельство о рождении] ()  | ... | `urn:ru:id:birth certificate` |
| [МИС ID] ()  |  Идентификационный номер в МИС |  `urn:ru:id:ehr`  |
| [ИНН] ()  |  Идентификационный номер налогоплательщика |  `urn:ru:id:inn`  |

Нужно развернуть справочник ДУЛ - http://www.consultant.ru/document/cons_doc_LAW_7301/1caeb69503428d5a2ddca0cb3e7e754f9e8a2948/ 

## Дата Рождения



## Адрес

TBD

## Контакты

TBD

## Факт или дата смерти


TBD

## Примеры

```yaml
name:
  - use: official
    family: "Гоголь"
    given: ["Николай", "Васильевич"]
birthDate: "1809-03-20"
identifier:
  - system: urn:ru:id:snils
    value: "ХХХ-ХХХ-ХХХ YY" 
deceasedDate: "1852-02-21"
```


```yaml
resourceType: Patient
id: 19dbb6b7-3ec5-4805-b4f3-dd7073a4bef1
meta:
  lastUpdated: '2020-01-21T20:41:13.581443Z'
  createdAt: '2020-01-21T07:59:43.847255Z'
  versionId: '67656214'
name:
  -
    given:
      - Аннет
      - Сергеевна
    family: Мельник
gender: female    
birthDate: '2000-01-01'
identifier:
  -
    type:
      coding:
        -
          code: ENP
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
    value: '123123123123123'
    system: 'urn:identity:enp:Patient'
  -
    type:
      coding:
        -
          code: SNILS
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
    value: 587-574-835
    system: 'urn:identity:snils:Patient'
  -
    type:
      coding:
        -
          code: MR
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '1'
          system: 'urn:CodeSystem:type-of-policy'
          display: ОМС
    value: '5555:6666666666666'
    period:
      end: '2025-01-01'
      start: '2015-01-01'
    system: 'urn:identity:insurance-gov:Patient'
    assigner:
      type: Organization
      display: '02014 ФИЛИАЛ "БАШКОРТОСТАН" ООО "АЛЬФАСТРАХОВАНИЕ-ОМС" РЕСПУБЛИКА БАШКОРТОСТАН, Г. УФА, УЛ. БАБУШКИНА, Д. 25'
      identifier:
        value: '02014'
        system: 'urn:CodeSystem:ffoms.smo'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '1'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Паспорт гражданина Российской Федерации'
    value: '1234:6545645645645'
    period:
      end: '2021-01-01'
      start: '2016-01-01'
    system: 'urn:identity:passport-rf:Patient'
    assigner:
      display: 'УВД 123123'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '6'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Свидетельство о рождении'
    value: '5654:123123123'
    period:
      start: '2000-01-01'
    system: 'urn:identity:birth-certificate:Patient'
    assigner:
      display: 'ЗАГС 12'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '10'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Паспорт иностранного гражданина или иной документ, удостоверяющий личность иностранного гражданина'
    value: '5555555555'
    period:
      end: '2020-01-01'
      start: '2000-01-01'
    assigner:
      display: 'Организация ххх'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '11'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Вид на жительство иностранного гражданина'
    value: '777777777'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '12'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Удостоверение беженца'
    value: '123123'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '13'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Свидетельство о предоставлении временного убежища на территории Российской Федерации'
    value: '56456456456'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '14'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Свидетельство о рассмотрении ходатайства о признании лица беженцем на территории Российской Федерации по существу'
    value: '123'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '15'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Проездной документ беженца'
    value: '123123'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '16'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Вид на жительство, выдаваемое лицу без гражданства'
    value: '123123123123'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '17'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Разрешение на временное проживание, выдаваемое лицу без гражданства'
    value: '54646546'
  -
    type:
      coding:
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
        -
          code: '18'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Документ, удостоверяющий личность лица без гражданства, выданный иностранным государством'
    value: '345345345'
  -
    type:
      coding:
        -
          code: '19'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Иные документы, предусмотренные федеральным законом или признаваемые в соответствии с международным договором Российской Федерации в качестве документов, удостоверяющих личность лица без гражданства'
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
    value: '88888'
  -
    type:
      coding:
        -
          code: '2'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Заграничный паспорт гражданина Российской Федерации'
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
    value: '77777777'
  -
    type:
      coding:
        -
          code: '3'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Дипломатический паспорт'
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
    value: '111'
  -
    type:
      coding:
        -
          code: '4'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Служебный паспорт'
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
    value: '222'
  -
    type:
      coding:
        -
          code: '5'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Временное удостоверение личности гражданина Российской Федерации (форма № 2П)'
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
    value: '3333'
  -
    type:
      coding:
        -
          code: '7'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Удостоверение личности моряка'
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
    value: '555'
  -
    type:
      coding:
        -
          code: '8'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Удостоверение личности военнослужащего Российской Федерации'
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
    value: '6666'
  -
    type:
      coding:
        -
          code: '9'
          system: 'urn:CodeSystem:type-of-document'
          display: 'Военный билет (у лиц, проходящих военную службу)'
        -
          code: PPN
          system: 'http://hl7.org/fhir/ValueSet/identifier-type'
    value: '8888'
telecom:
  -
    use: home
    value: '+78125456545'
    system: phone
  -
    use: mobile
    value: '+79215487896'
    system: phone
  -
    use: work
    value: '+78125489654'
    system: phone
address:
  -
    use: home
    fias: 0b3c6263-ce3b-4dd0-b949-900831ac3d51
    text: 'Санкт-Петербург г, Репищева ул, дом 15, корп. 3, кв. 4'
    housing: '3'
    apartment: '4'
    houseNumber: '15'
  -
    use: temp
    fias: 94d4b4a1-9a34-41eb-8c01-f732153b4114
    text: 'Санкт-Петербург г, Вербная ул, дом 14, корп. 1, кв. 16'
    housing: '1'
    apartment: '16'
    houseNumber: '14'
  -
    use: home
    fias: 6b6bfe38-ce9f-48a3-a919-d51ad0ee4ef4
    text: 'Санкт-Петербург г, Поликарпова аллея, дом 2, корп. 1, кв. 67'
    housing: '1'
    apartment: '67'
    houseNumber: '2'
citizenship:
  -
    code:
      coding:
        -
          id: citizenship.643
          code: '643'
          system: 'urn:CodeSystem:citizenship'
          display: 'РОССИЯ Российская Федерация'

```
