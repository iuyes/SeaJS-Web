/**
 * User: chc
 * Date: 13-4-2
 * Time: 下午1:10
 * Web SQL Database 操作业务调度模块
 */

define(function (require, exports, modules) {
    var $ = jQuery = require('jquery')
        , FromView = require('../view/from-view')
        , SearchView = require('../view/search-view')
        , ListView = require('../view/list-view');

    require('../webdb/backbone-webdbsync');
    require('bootstrap');
    require('datetimepicker');

    var fromView = new FromView;
    var searchView = new SearchView;
    var listView = new ListView;
    fromView.render();
    listView.render();

});