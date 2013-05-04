/**
 * User: chc
 * Date: 13-4-9
 * Time: 上午10:10
 * 站点信息集合 SiteList ---> Collection
 */

define(function (require, exports, module) {
    var _ = require('underscore')
        , Backbone = require('backbone')
        , Handlebars = require('handlebars')
        , SiteInfo = require('./site-model');

    var SiteList = Backbone.Collection.extend({
        model : SiteInfo,                              //指定控制器的数据模型
        webdb : 'webSql',                              //启动自定义Backbone.sync 开关
        initialize : function (models, options) {}
    });

    module.exports = SiteList;
});
