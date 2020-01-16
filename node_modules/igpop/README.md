# igpop is Sugar FHIR Profiling

DRY FHIR profiling for programming humans

* 80/20 of profiling
* convention over configuration
* to be manually written
* Data DSL - no grammars and parsers
* inline extensions
* inline valuesets

### Features

* generate FHIR StructureDefinition, ValueSets etc
* generate IG static site

## Quick Start

###Installation
Install this package using command:`npm i igpop`.

Once you have igpop installed, jump to its directory in node_modules `cd node_modules/igpop/bin/`
and then create  npm link via command:` npm link`.

Having all previous steps completed, you are able to use igpop in any directory that contains a configuration file *ig.yaml* and *src* folder.

Below you can see an example of the *ig.yaml* file:
```yaml
id: FHIR
version: 4.0.0
```
*src* folder contains \*.md, \*.yaml and \*.csv files for Docs, Profiles and ValueSets, respectively. 
Test dataset example [igpop-fhir-4.0.0](https://www.npmjs.com/package/igpop-fhir-4.0.0).

###Usage

Run local server by `igpop dev` command to display docs, profiles and valuesets (it starts on port 8899).

Generate IG static site `igpop build`.

Validate your profiles from src directory `igpop validate` (in progress).

For help use` igpop help`.


##Sources

See github repo [igpop](https://github.com/HealthSamurai/igpop).
