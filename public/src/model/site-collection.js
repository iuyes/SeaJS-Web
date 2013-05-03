/**
 * User: chc
 * Date: 13-4-9
 * Time: 上午10:10
 * 站点信息集合 SiteList ---> Collection
 */

define(function (require, exports, modules) {
    var $ = require('jquery')
        , _ = require('underscore')
        , WebDb = require('./../webdb/db').WebDb     //载入web database 类库
        , Backbone = require('backbone')
        , SiteInfo = require('../model/site-model')
        , Handlebars = require('handlebars');

    var SiteList = Backbone.Collection.extend({
        model : SiteInfo,   //指定控制器的数据模型
        webdb : 'webSql',
        initialize : function (models, options) {}
    });

    modules.exports = SiteList;
});