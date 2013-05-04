/**
 * Created with JetBrains WebStorm.
 * User: Eyes
 * Date: 13-4-7
 * Time: 下午10:12
 * 搜索站点信息 searchView
 */

define(function(require, exports, module) {
    var $ = require('jquery')
        , _ = require('underscore')
        , Backbone = require('backbone')
        , observer = require('observer');

    var SearchView = Backbone.View.extend({
        el: $('.navbar-search'),
        initialize: function() {
        },
        events: {
            'click #btnSearch': 'clickIn',
            'keydown .search-query' : 'keyDown'
        },
        clickIn: function(e) {
            this.searchFun();
        },
        keyDown: function(e) {
            if(e.keyCode === 13){
                this.searchFun();
            }
        },
        searchFun: function() {
            var keyWorld = this.$('.search-query').val();
            observer.trigger('keyWorld', keyWorld);
        }
    });

    module.exports = SearchView;
});
