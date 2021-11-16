.EXPORT_ALL_VARIABLES:

init:
	npm install
	curl https://storage.googleapis.com/hl7-fhir-russia/igpop.jar > igpop.jar

dev:
	java -jar "igpop.jar" dev

build:
	java -jar "igpop.jar" build "/core"
