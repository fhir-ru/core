---
title: 1 Руководство по реализации
---

# Руководство по реализации СЭМД «Протокол лабораторного исследования» на FHIR
___

## 1 Документ «Протокол лабораторного исследования»
___

Документ «Протокол лабораторного исследования» является документированием
исследования, проведенного с биоматериалом пациента или небиологическим
материалом, связанным с лечебно диагностческим процессом, в специализированной
клинико диагностической лаборатории (КДЛ), лицензированной соответствующим
образом.

Данное руководство описывает реализацию протокола лабораторного исследования в его
общем виде и опирается на «Федеральный справочник лабораторных исследований» (ФСЛИ). Он
включает в себя группу справочников, разработанных специально с учетом
необходимости электронного обмена результатами лабораторных исследований. В
рамках данного руководства предполагается использование следующих его компонентов:

- Справочник лабораторных тестов
- Справочник профилей лабораторных тестов
- Справочник материалов для проведения лабораторного исследования
- Справочник бактериальных микроорганизмов для учета результатов исследований
- Справочник грибковых микроорганизмов для учета результатов исследований

## 2 Цель
___

Цель этого документа — описание требований и ограничений стандарта обмена медицинскими данными FHIR. FHIR-документ
«Протокол лабораторного исследования» предназначен для обмена данными о
проведенных лабораторных исследованиях между медицинскими учреждениями и
системой ведения интегрированной электронной медицинской карты (ИЭМК).

## 3 Целевая аудитория
___

Данный документ предназначен для разработчиков и специалистов по внедрению
медицинских информационных систем, в том числе локальных и региональных систем
обмена медицинской информацией, перед которыми стоит задача создавать
структурированные электронные медицинские документы, сформированные на основе
стандарта обмена медицинскими данными FHIR 4.0.1 для обмена с
системой ведения интегрированной электронной медицинской карты ИЭМК.

## 4 Версия FHIR
___

В руководстве используется спецификация [FHIR v4.0.1](http://hl7.org/fhir/)

## 5 FHIR-документы
___

FHIR-ресурсы могут быть использованы для построения документов, которые представляют композицию: набор согласованной информации, которая является утверждением информации о здравоохранении, включая клинические обследования и службы. 
Документ - это иммутабельный набор ресурсов с фиксированным представлением, который создан и/или заверен людьми, организациями или устройствами.

Документами, построенными таким способом, можно обмениваться между системами и сохранять в хранилище документов и системах управления, включая такие системы, как IHE XDS. 

FHIR-документы могут быть клиническими (содержащими медицинскую информацию о пациенте) и не клиническими (например FHIR Implementation guides, практические руководства, наглядные материалы для пациентов и т.п.). HL7 будет разрабатывать профили в будущем, давая дополнительное руководство по подходящему представлению клинических документов как в общем, так и в частных случаях клинических документов (например Consolidated CDA).

Все документы имеют одинаковую структуру: <a href="http://hl7.org/fhir/bundle.html">комплект ресурсов (Bundle)</a> 
 <a href="http://hl7.org/fhir/bundle-definitions.html#Bundle.type">типа</a> "document"
с ресурсом <a href="http://hl7.org/fhir/composition.html">Composition</a> в качестве первого ресурса в комплекте, за которым следует серия других ресурсов, на которые имеются ссылки из ресурса <code>Composition</code>, который содержит подтверждающие данные для этого документа. Bundle собирает всё содержимое документа в единый XML или JSON-документ, который может быть подписан и администрирован по мере надобности. Ресурсы включают в себя и человекочитаемые, и обрабатываемые компьютером блоки. Кроме того, комплект может включать в себя <a href="http://www.w3.org/Style/CSS/Overview.en.html">каскадные таблицы стилей</a>, заявления о 
<a href="http://hl7.org/fhir/provenance.html">происхождении (Provenance)</a> и цифровую подпись.

Ресурс Composition является основой клинического документа. Он:

<ul>
 <li>содержит именование и назначение и устанавливает контекст документа;</li>
 <li>несет ключевую информацию, такую как объект и автор, и кто утвердил документ;</li>
 <li>делит документ на серию разделов, каждый со своим текстовым описанием</li>
</ul>

Любой ресурс, на который есть прямая ссылка из Composition, ДОЛЖЕН быть включен в комплект во время сборки документа. В частности, это означает ссылки на следующие ресурсы:

Другие ресурсы, на которые ссылаются эти ресурсы, могут также быть включены в комплект, если такое решение примет система построения документа. Включение этих дополнительных ресурсов сделает документ больше, однако убережет приложения от необходимости получения связанных ресурсов, если они понадобятся им во время обработки документа. Таким образом решение о том, должны связанные ресурсы быть включены или нет, зависит от среды реализации.

Бандл типа документ ДОЛЖЕН включать только:

<ol>
 <li>Ресурс Composition и любые ресурсы, на которые есть прямая или косвенная (например рекурсивная) ссылка из него.</li>
 <li>Ресурс Binary, содержащий таблицу стилей (как описано выше).</li>
 <li>Provenance-ресурсы, в элементе target которых указан ресурс Composition или другой ресурс, включенный в документ.</li>
</ol>

У документа имеется два ключевых идентификатора:

<ul>
 <li>Идентификатор документа (обязательный). Хранится в элементе <i>Bundle.identifier</i>, является глобально уникальным для этого экземпляра документа и никогда не используется повторно, в том числе и для других документов, извлекаемых из этой же композиции</li>
 <li>Структурный идентификатор (необязательный). Он находится в <i>Composition.identifier</i>и является одинаковым для всех документов, содержащихся в композиции.</li>
</ul>

### В документе указывается несколько дат:

<ul>
 <li>Дата документа (обязательно). Она находится в <i>Bundle.meta.lastUpdated</i> и указывает, когда комплект документа был собран из лежащих в его основе ресурсов.</li>
 <li>Дата композиции (обязательно). Находится в <i>Composition.date</i>, это дата, когда автор написал документ логически.</li> 
 <li>Даты утверждения (необязательно). Находится в <i>Composition.attester.time</i> , это дата, когда документ был засвидетельствован очевидцами. Обычно это будет то же самое время, что и дата композиции, либо позднее.</li> 
 <li>Дата последнего изменения композиции (необязательно). Находится в <i>Composition.meta.lastUpdated</i> и является датой последнего изменения композиции. Она должна быть &gt;= дате композиции.</li> 
</ul>

Комплекты документов могут быть подписаны электронными цифровыми подписями в соответствии с правилами, выложенными на странице <a href="http://hl7.org/fhir/signatures.html">цифровые подписи</a>. 
Подпись ДОЛЖНА быть поставлена очевидцем из списка в документе и подпись ДОЛЖНА содержать элемент <a href="http://www.w3.org/TR/xmldsig-core/#sec-KeyInfo" target="_blank">KeyInfo</a>, содержащий элемент KeyName, значением которого является URI, совпадающий с <a href="http://hl7.org/fhir/bundle-definitions.html#Bundle.entry.fullUri">fullUri</a> соответствующего attester-ресурса.

Однажды собранный в комплект, документ становится иммутабельным - его содержимое больше не может быть изменено, а id документа не может быть повторно использован. Обратите внимание, что документ может быть представлен в XML либо JSON-формате, конвертироваться между ними или менять кодировку символов, и при этом оставаться тем же самым документом. Однако содержимое по прямым ссылкам из документа и представление документа не могут быть существенно изменены (таким образом, чтобы поменять клинический смысл содержимого). Все дополнительные документы, вытекающие из одной композиции, ДОЛЖНЫ иметь различные идентификаторы документа. 

### Просмотр документа

При просмотре документа человеком, приложения должны предъявлять объединенные описательные части в следующем порядке:

<ol>
 <li>Описательная часть <a href="http://hl7.org/fhir/composition-definitions.html#Composition.subject">ресурса-субъекта</a></li>
 <li>Описательная часть ресурса <a href="http://hl7.org/fhir/composition.html">Composition</a></li>
 <li>Описательная часть <a href="http://hl7.org/fhir/composition-definitions.html#Composition.section.text">section.text</a></li>
</ol>

Такое представление документа называется "заверенным содержимым" документа. В бандл могут быть включены дополнительные ресурсы (например ресурсы, на которые ссыается ресурс List, составляющие section.content, ДОЛЖНЫ присутствовать в бандле, при этом другие, дополнительные ресурсы, на которые они ссылаются, тоже могут быть включены туда, но они (и любая описательная часть) не будут являться заверенным содержимым). В частности, <code>Composition.attester</code> заверяет представленную форму документа.

Описательная часть ресурса Composition должна суммировать важные части заголовка документа, которые требуются для установления клинического контекста документа (отличного от субъекта, который отображается сам по себе (in its own right). Фактически чтобы построить скомбинированную описательную часть, просто склейте все описательные &lt;div&gt;-фрагменты вместе.

Если документ представлен в другом порядке, отличном от описанного выше, то он может не отражать первоначальныое заверенное содержимое. Руководства по реализации могут дополнительно ограничивать описательную часть и модель отображения документа.

В дополнение к <a href="http://hl7.org/fhir/narrative.html#css">базовым правилам оформления описательной части</a>, которые должны соблюдаться, документ может ссылаться или содержать один или больше таблиц стилей, включающих дополнительные стили, применяемые к объединенным описательным частям. Это достигается объявлением ссылок на таблицы стилей в фиде:

Этот <code>url</code> может быть абсолютной ссылкой на каскадную таблицу стилей или относительной ссылкой на бинарный ресурс, содержащий CSS-таблицу. Ссылки на таблицы стилей могут ссылаться только на CSS - другие формы таблиц стилей не допустимы.

В таблицах стилей СЛЕДУЕТ использовать относительные (внутренние) ссылки, поскольку просмотрищик может быть не в состоянии разрешить внешнее содержимое во время просмотра из-за технических проблем или локальной политики безопасности.

Никакие используемые таблицы стилей НЕ ДОЛЖНЫ изменять представление так, чтобы при этом искажалось медицинское значение содержимого. 

Если другое не указано в локальных торговых партнерских соглашениях, приложения, отображающие объединенную описательную часть, ДОЛЖНЫ использовать таблицы стилей, указанные в документе (см. <a href="http://hl7.org/fhir/security.html#stylesheet">security note</a>). Сторонам, входящие в торговое соглашение, поступающим иначе, следует очень тщательно рассмотреть последствия, которые  это действие будет иметь на их долгосрочную область действия обмена документом. Если стороны согласны использовать таблицы стилей, не содержащиеся в документе, тогда, возможно, они никогда не смогут совместно использовать свои документы безопасно в более широком контексте, таком как региональные или национальные EHR или глобальные персональные медицинские документы. 

### Профили документов

<a href="http://hl7.org/fhir/profiling.html">Профили документов</a> используются для описания документов конкретного назначения. Профили документов могут вводить правила о:


<ul>
 <li>Содержимом ресурса Composition, в том числе</li>
 <li>Структуре разделов в композиции</li>
 <li>Какие ресурсы должны быть включены в комплект наряду с ресурсами, на которые есть прямые ссылки в ресурсе Document</li>

</ul>

Приложениям следует рассмотреть публикацию <a href="http://hl7.org/fhir/capabilitystatement.html">Capability Statements</a>, в которых указываются конкретные документы, которые они поддерживают. Документы могут ссылаться на профиль, которому они соответствуют, указывая идентификатора профиля в элементе <code>Bundle.meta.profile</code> - см. информацию по их использованию в разделе <a href="http://hl7.org/fhir/resource.html#meta">Теги профилей</a>.

### Точки взаимодействия с документом

Имеется несколько разных RESTful конечных точек, используемых при работе с документами. Использование различных конечных точек лучше всего описать, рассматривая последствия отправки сообщений на них:

<table class="grid">
 <tr> <td><b>End-Point</b></td> <td><b>Тип содержимого</b></td> <td><b>Описание</b></td> </tr>
 <tr> <td>[baseurl]/Bundle</td> <td>Document Bundle</td> <td>Работает так же, как и обычная точка взаимодействия
 для управления типом ресурса, но только с целыми комплектами (bundles) документов - т. е. операция чтения возвращает bundle, 
обновление получает bundle и поиск возвращает комплект комплектов (bundle of bundles). Отметьте, что если документы создаются командой POST с помощью операции  <a href="http://hl7.org/fhir/http.html#create">create</a>, то Bundle.id поменяется, а Bundle.identifier - нет. См. комментарий в разделе <a href="http://hl7.org/fhir/bundle.html#rest">Serving Bundles using the RESTful API</a>.</td></tr>
   
 <tr> <td>[baseurl]/Composition</td> <td>Composition Resource</td> <td>Обычная точка взаимодействия для
 управления ресурсами композиции. Она может использоваться во время комплектации документа, после разбиения документа на 
составные ресурсы или во время использования композиций отдельно от документов.</td> </tr>
   
 <tr> <td><a href="http://hl7.org/fhir/binary.html">[baseurl]/Binary</a></td> <td>Document Bundle</td> <td>Просто сохраняет весь документ 
в виде последовательности байтов и по запросу возвращает точно эту самую последовательность. Нет способа обнаружить содержимое в конечной точке /Binary, 
поэтому обычно это ассоциируется с <a href="http://hl7.org/fhir/documentreference.html">Document Reference</a>, чтобы приложения 
могли найти и обработать документ, хотя это и не обязательно.</td> </tr>
   
 <tr> <td><a href="http://hl7.org/fhir/http.html#transaction">[baseurl]</a> (например transaction)</td> <td>Document Bundle</td> <td>Игнорирует 
факт, что комплект - это документ, и обрабатывает все ресурсы, которые он содержит, как самостоятельные ресурсы. Клиентам НЕ СЛЕДУЕТ 
ожидать, что сервер, который получает документ, отправленный с помощью этого метода, будет в состоянии пересобрать документ точно. (Даже если 
сервер может пересобрать документ (см. ниже), нельзя ожидать, что результат будет в том же порядке и т. п. Соответственно, подпись документа, весьма вероятно,
 станет недействительной.</td> </tr> 
</table>

Примечание: Несмотря на то, что эти точки взаимодействия определены для использования с документоподобными ресурсами и комплектами документов, их использование не обязательно. Документы можно передавать между системами с помощью любого желаемого метода.
Помимо перечисленных выше опций, серверы и/или спецификации могут вводить дополнительные <a href="http://hl7.org/fhir/operations.html">операции</a> для работы с документами.

### Генерация документа

Клиент может запросить сервер сгенерировать полностью скомплектованный документ из ресурса composition. Более подробную информацию см. на странице <a href="http://hl7.org/fhir/composition-operations.html">Generate Document Operation</a>.


## 6 Порядок передачи СЭМД «Протокол лабораторного исследования» на FHIR
___

### 6.1 Требования
___

Для передачи СЭМД «Протокол лабораторного исследования» на FHIR необходимо отправить на сервер РЭМД FHIR-ресурс Bundle.

FHIR-ресурс Bundle должен быть сформирован в соответствии с [профилем](https://fhir-ru.github.io/core/profiles/Bundle/remd.html).

FHIR-ресурс Bundle должен содержать в себе FHIR-ресурс Composition, соответствующий [профилю](https://fhir-ru.github.io/core/profiles/Composition/remd.html), а также все ресурсы, на которые ссылается ресурс Composition и другие ресурсы.

Данные для отправки:

- Адрес сервера ({{base}}): https://remd.edge.aidbox.app/
- Тип авторизации: Basic Auth
- Username: remd-client
- Password: a*u&0*@7*4yZEGUEYwJDI@O
- Header Content-Type: text/yaml

### 6.2 Пример передачи с помощью программы [Postman](https://www.postman.com/)
___

HTTP-запрос:

`POST {{base}}/fhir/Bundle`

Тело запроса (Content-Type: text/yaml):

```
type: document
identifier:
  value: '123'
  system: urn:identity:remd-external-system-namespace
entry:
  - resource:
      resourceType: Composition
      author:
        - display: author
      date: '20200426'
      status: final
      title: REMD Document
      type:
        text: REMD Document
  - resource:
      resourceType: Patient
      
      type: document
identifier:
  value: '123'
  system: urn:identity:remd-external-system-namespace
entry:
  - resource:
      resourceType: Composition
      author:
        - display: author
      date: "2020-04-26"
      status: final
      title: REMD Document
      type:
        text: REMD Document
  - resource:
      resourceType: Patient
      gender: male
      identifier:
        - {system: 'urn:oid:', value: null}
      birthDate: '1977-11-25'
      name:
      - given: [Михаил, Владимирович]
        family: Новосельцев
        use: official
      telecom:
        - {system: phone, value: '+74951953745'}
      address:
      - text: Адрес
```  

Сервер вернёт успешно созданный ресурс и статус 201 Created.

![Пример успешной отправки в Postman](https://raw.githubusercontent.com/fhir-ru/core/master/src/images/bundle_example_post_status_201.png)

Если отправленный ресурс не соответствует требованиям профилей, то сервер вернёт ошибку и статус 422 Unprocessable Entity.

HTTP-запрос:

`POST {{base}}/fhir/Bundle`

Тело запроса (Content-Type: text/yaml):

```
type: document
identifier:
  value: '123'
  system: urn:identity:remd-external-system-namespace
entry:
  - resource:
      resourceType: Patient
```      

![Пример ошибки](https://raw.githubusercontent.com/fhir-ru/core/master/src/images/bundle_example_post_status_422.png)

Пример ответа сервера в случае ошибки валидации ресурса:

```
{
    "resourceType": "OperationOutcome",
    "text": {
        "status": "generated",
        "div": "Invalid resource"
    },
    "issue": [
        {
            "severity": "fatal",
            "code": "invalid",
            "expression": "Bundle.entry.0.resource.resourceType",
            "diagnostics": "expected Composition, but Patient"
        },
        {
            "severity": "fatal",
            "code": "invalid",
            "expression": "Bundle.entry.0.resource",
            "diagnostics": "Property title is required"
        },
        {
            "severity": "fatal",
            "code": "invalid",
            "expression": "Bundle.entry.0.resource",
            "diagnostics": "Property author is required"
        },
        {
            "severity": "fatal",
            "code": "invalid",
            "expression": "Bundle.entry.0.resource",
            "diagnostics": "Property date is required"
        },
        {
            "severity": "fatal",
            "code": "invalid",
            "expression": "Bundle.entry.0.resource",
            "diagnostics": "Property type is required"
        },
        {
            "severity": "fatal",
            "code": "invalid",
            "expression": "Bundle.entry.0.resource",
            "diagnostics": "Property status is required"
        }
    ]
}
```