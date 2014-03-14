# Favor.dependency-orderer

dependency-order is a module for ordering your included modules in the correct order. For instance, when you need to include your Bower files in your html page or grunt/gulp/etc packager, they need to be ordered in such a way that the dependencies are included before the files that rely on them. This module takes your bower.json/package.json/etc file and returns an array of the order in which the dependencies need to be included in your project. 

## Installing DependencyOrderer

```
npm install -g dependency-orderer
```

## Usage

* get the output of your dependencies, for example, in Bower use 
```
bower list -json
```

* include dependency-orderer in your node file, and pass it the result of your dependency list

```
var exec = require('child_process').exec;
var dependency_orderer = require('dependency-orderer');
var dependency_array;
exec('bower list -json', function(err,stdout,stderr){
    if(err) return console.log(err);
    dependency_array = dependency_orderer(JSON.parse(stdout));
    // do what you need with your dependency_array
});


```
