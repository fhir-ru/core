# FHIR RU-Core IG

Руководство по реализации FHIR в России

Опубликованная версия - https://fhir-ru.github.io/core

## Организация репозитория

Профили создаются с применением утилиты [igpop](https://github.com/HealthSamurai/igpop).

Профиль RUcore содержит необходимые отрасли здравоохранения данные,  но ограничения вводит только исходя из необходимости для всех участников. Профиль определяется в `/src/{{Resource}}/rucore.yaml`.

Ограничения вводятся информационными системами данных в отдельных профилях. Профиль для взаимодействия с ЕГИСЗ определяется в `/src/{{Resource}}/egisz.yaml`

Профили, название которых начинается с `_`(подчеркивания) являются legacy наработками, относительно проекта RUcore.

## Правила

Используем трекер задач https://github.com/fhir-ru/core/issues для дискуссий.

## Вклад и разработка

Чтобы поднять проект с документацией у себя локально:
* Установите java - https://www.java.com/ru/download/help/download_options_ru.html
* Cклонируйте репозиторий - `git clone  git@github.com:fhir-ru/core.git fhir-ru`
* Перейдите в папку проекта - `cd fhir-ru`
* выполните `make init` для загрузки последней версии приложения igpop
* выполните `make dev` 
* отройте браузер http://localhost:8899/


```
make init
;; for development run
make dev
;; for build run
make build
;; your build in
ls build

make pub
```
