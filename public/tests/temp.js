/**
 * Created with JetBrains WebStorm.
 * User: chc
 * Date: 13-4-9
 * Time: 下午1:58
 * To change this template use File | Settings | File Templates.
 */

Scol = Backbone.Collection.extend({
    initialize: function(models, options) {
        this.bind('add', options.view.onSay);
    }
});     //控制器负责事件绑定

AppView = Backbone.View.extend({
    el: $('body'),
    //tagName : 'div',
    //el : $('div'),
    initialize: function() {
        this.scol = new Scol(null, { view : this });
    },
    events: {
        'click #check': 'clickIn'
    },
    clickIn: function() {
        var personName = prompt('请问，您叫什么名字');
        if(personName === '') personName = '未知';
        var person = new Person({ name: personName });
        this.scol.add(person);
    },
    //用于控制器事件绑定的回调函数
    onSay: function(model) {
        console.log(model.get('name'));
        $('#world-list').append('<li>' + model.get('name') + '</li>');
    }
});

var app = new AppView;