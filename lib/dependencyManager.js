var ordered_dependencies = [],
    list;

var build_list = {
    list: function(list){
        return  list
    },
    getDeps: function(dependency){
        if(Object.keys(dependency.dependencies).length===0){
                             // no dependencies, just add it to the array
                return this.pushDep(dependency.endpoint.name);
                             }
        var num_dependencies = dependency.dependencies.length;
        for(var dep in dependency.dependencies){
            this.getDeps(dependency.dependencies[dep]);        
            num_dependencies--;
            if(num_dependencies===0){
                this.pushDep(dep);   
            }
        }
        return this.pushDep(dependency.endpoint.name);
    },
    pushDep: function(dep){
      if(ordered_dependencies.indexOf(dep)<0) return ordered_dependencies.push(dep);
        return;
    },
    dependenciesObj: function(whole_list){
        list = this.list(whole_list);
        
        for(var d in whole_list.dependencies){
            //console.log(whole_list.dependencies[d]);
            this.getDeps(whole_list.dependencies[d]);
      }
        return ordered_dependencies;
    }
}

module.exports = function(whole_list){
   return build_list.dependenciesObj(whole_list);
}
