.PHONY: build
.EXPORT_ALL_VARIABLES:

init:
	npm install
	curl https://storage.googleapis.com/hl7-fhir-russia/igpop.jar > igpop.jar

dev:
	java -jar "igpop.jar" dev

build:
	java -jar "igpop.jar" build "/core"

pub:
	cd build && touch .nojekyll && git init &&\
  git remote add origin git@github.com:fhir-ru/core.git || echo 'ok' &&\
  git checkout -b gh-pages || echo 'ok' && git add . &&\
  git ci -m 'build' &&\
  git push origin gh-pages --force
