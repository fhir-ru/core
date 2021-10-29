# FHIR RU-Core IG

[![Build Status](https://travis-ci.org/fhir-ru/core.svg?branch=master)](https://travis-ci.org/fhir-ru/core)

Руководство по реализации FHIR в России

Опубликованная версия - https://fhir-ru.github.io/core

## Правила

Используем трекер задач https://github.com/fhir-ru/core/issues для дискуссий.

## Вклад и разработка

Чтобы поднять проект с документацией у себя локально:
* склонируйте репозиторий
* выполните `npm install` для загрузки последней версии приложения igpop


```
npm install
curl https://storage.googleapis.com/hl7-fhir-russia/igpop.jar > igpop.jar
# для запуска сервера локально (порт по умолчанию 8899)
java -jar "igpop.jar" dev 
# or buld
java -jar "igpop.jar" build http://fhir.ru 
ls build

```

Можно указать другой порт с помощью параметра: -p {PORT_NAME}
