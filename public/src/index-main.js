/**
 * User: Nightink
 * Date: 13-4-2
 * Time: 下午1:10
 * Web SQL Database 操作业务调度模块
 */

define(function (require, exports, module) {
    require('./webdb/backbone-webdbsync');
    require('bootstrap');
    require('datetimepicker');
    require('../css/index.css');
    
    var FromView = require('./view/from-view')
        , ListView = require('./view/list-view')
        , Search = require('./view/search-view');

    var fromView = new FromView({
        el: '#web-sql'
    });
    var listView = new ListView({
        el: '#site-show'
    });
    var searchView = new Search({
        el: '.navbar-search'
    });
    
    //添加站点视图渲染
    fromView.render();
    //显示列表视图渲染
    listView.render();
    // 搜索功能
    searchView.render();

});
