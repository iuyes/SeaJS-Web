/**
 * Created with JetBrains WebStorm.
 * User: chc
 * Date: 13-4-7
 * Time: 下午4:32
 * test backboneJS
 */

define(function(require, exports, module) {

    var $ = require('jquery')
        , Handlebars = require('handlebars');

    Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {
        if (arguments.length < 3)
            throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
        rvalue = this.sitetype;
        var operator = options.hash.operator || "==";
        var operators = {
            '==':       function(l,r) { return l == r; },
            '===':      function(l,r) { return l === r; },
            '!=':       function(l,r) { return l != r; },
            '<':        function(l,r) { return l < r; },
            '>':        function(l,r) { return l > r; },
            '<=':       function(l,r) { return l <= r; },
            '>=':       function(l,r) { return l >= r; },
            'typeof':   function(l,r) { return typeof l == r; }
        };

        if (!operators[operator])
            throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);
        var result = operators[operator](lvalue,rvalue);
        if( result ) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    var siteType = ['雨情', '水利', '水库', '潮位', '气象'];
    siteType.sitetype = '水库';
    var temp = Handlebars.compile(require('./test.tpl'));
    var content = temp({items: siteType});
    $('#test').html(content);


/*
    var siteType = [
        {name:'雨情', flag: false},
        {name:'水利', flag: false},
        {name:'水库', flag: true},
        {name:'潮位', flag: false},
        {name:'气象', flag: false}
    ];
    siteType.sitetype = '水库';
    var temp = Handlebars.compile(require('./test.tpl'));
    var content = temp({items: siteType});
    $('#test').html(content);


    var data = this.model.toJSON();
    var elements = [{name:'雨量'}, {name:'水位'}, {name:'库容'}, {name:'潮位'}, {name:'气压'}];
    data.siteType = ['雨情', '水利', '水库', '潮位', '气象'];
    data.element = ['雨量', '水位', '库容', '潮位', '气压'];
    if(data.elements) {
        _.each(elements, function(obj) {
            _.each(data.elements.split(":"), function(val) {
                if(obj.name == val) {
                    obj.flag = true;
                }
            })

        });
    }
*/
});