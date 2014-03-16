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

## What then?

Dependency-orderer is intended to be a lightweight implementation and simply returns an array in the order your javascripts should be included in the page.

If you're using bower, you can get a list of the javascript file locations via 
```
bower list -p
```

will return an object where the module name is the key and the included files are the value. Note, the value can be either an array or a single file. as an example,
```
{
  "bootstrap":[
              "bower_components/bootstrap/docs/assets/js/bootstrap.js",
              "bower_components/bootstrap/docs/assets/css/bootstrap.css"
              ],
   "jquery": "bower_components/jquery/jquery.js",
   "moment": "bower_components/moment",
   "angular": "bower_components/angular/angular.js",
   "underscore": "bower_components/underscore",
   "restangular": "bower_components/restangular/dist/restangular.js"
}
```

Dependency-orderer, will only return the array in order, you'll have to build the implementation you need to get the javascript from the files. However, <a href="github.com/favor/module-manager">Favor.module-manager</a> will have an implementation for packaging your javascript files in order using gulp. 

