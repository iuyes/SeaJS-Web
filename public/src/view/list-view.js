/**
 * User: chc
 * Date: 13-4-8
 * Time: 上午8:50
 * 列表视图
 */

define(function(require, exports, modules) {

    var $ = require('jquery')
        , Backbone = require('backbone')
        , Handlebars = require('handlebars')
        , observer = require('observer')
        , SiteList = require('../model/site-collection');

    var ListView = Backbone.View.extend({                           //对数据显示视图进行事件处理
        el: $('#site-show'),                                        //$el 是Backbone.View内部生成，所以正常定义el即可
        template: Handlebars.compile(require('../tpl/info.tpl')),   //载入模版文件
        events : {
            'click .edit' : 'editSite',
            'click .delete' : 'deleteSite',
            'click #prev' : 'prevPage',
            'click #next' : 'nextPage'
        },
        initialize: function() {
            this.siteList = new SiteList(null, { view : this });    //数据集合Collection
            observer.on('add', this.render, this);                  //数据库交互后，上下文会跳转 所以提前指定上下文 this
            observer.on('keyWorld', this.render, this);
        },
        render: function(key) {
            var self = this;
            var options = {
                keyWorld: key,
                success: function(model) {
                    var content = self.template({ 'items': model.toJSON() });
                    self.$el.html(content);
                }
            };
            if(key) options.keyWorld = key;

            self.siteList.fetch(options);
        },
        renderTpl: function(model, str) {
            alert(str);
            this.render();
        },
        editSite: function(e) {
            var index = $(e.target).closest('tr').index();
            var model = this.siteList.at(index);
            observer.trigger('model:edit', model);
        },
        deleteSite: function(e) {
            if(!confirm('是否删除?')) return;
            var index = $(e.target).closest('tr').index();
            var model = this.siteList.at(index);
            model.on('sync', this.renderTpl, this);
            model.destroy();
        },
        prevPage: function(e) {
            console.log('prev page');
        },
        nextPage: function(e) {
            console.log('next page');
        }
    });

    modules.exports = ListView;
});