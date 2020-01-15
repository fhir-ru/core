#igpop-fhir-4.0.0

FHIR meta for [igpop](https://github.com/HealthSamurai/igpop).
[Npm package](https://www.npmjs.com/package/igpop) for igpop.


###Installation

Install this package using command: `npm i igpop-fhir-4.0.0`.
Put *node_modules/fhir-4.0.0/src* folder and *node_modules/fhir-4.0.0/ig.yaml* configuration file into your working directory in order to use [igpop](https://github.com/HealthSamurai/igpop).

###### Note
 Using this data set requires **installed igpop**, see how to do this [here](https://github.com/HealthSamurai/igpop).

###Usage

Put your documentation, profile and valueset files into the src folder in order to add them to this data set. 

Run local server by `igpop dev` command to display docs, profiles and valuesets (it starts on port 8899).

Generate IG static site `igpop build`.

Validate your profiles from src directory `igpop validate` (in progress).

See help with `igpop help`.

##Sources

See igpop github [repo](https://github.com/HealthSamurai/igpop).
