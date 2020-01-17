# FHIR RU-Core IG

[![Build Status](https://travis-ci.org/fhir-ru/core.svg?branch=master)](https://travis-ci.org/fhir-ru/core)

Руководство по реализации FHIR в России

Опубликованная версия - https://fhir-ru.github.io/core

## Правила

Используем трекер задач https://github.com/fhir-ru/core/issues для дискуссий.

## Вклад и разработка

Чтобы поднять проект с документацией у себя локально:

склонируйте репозиторий
выполните curl -L -o igpop https://github.com/HealthSamurai/igpop/releases/latest/download/igpop для загрузки последней версии приложения igpop
выполните chmod -x igpop
выполните ./igpop dev для запуска сервера локально (порт по умолчанию 8899)

Можно указать другой порт с помощью параметра: -p {PORT_NAME}
