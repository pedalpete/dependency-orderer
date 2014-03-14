var mock = require('./test-mock.json');
var order_array = require('../lib/dependencyManager');
describe('order modules', function(){
    it('should get the mock as json', function(){
        expect(mock.endpoint.name).toBe('mock-bower-output');
    });
    
    it('should build an ordered dependency array', function(){
         var ordered_array = order_array(mock);
        expect(ordered_array[0]).toBe('jquery');
        expect(ordered_array[1]).toBe('bootstrap');
        expect(ordered_array[2]).toBe('moment');
        expect(ordered_array[3]).toBe('underscore');
        expect(ordered_array[4]).toBe('bootstrap-calendar');
        expect(ordered_array[5]).toBe('angular');
        expect(ordered_array[6]).toBe('lodash');
        expect(ordered_array[7]).toBe('restangular');
    });
});