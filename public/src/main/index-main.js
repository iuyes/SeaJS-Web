/**
 * User: chc
 * Date: 13-4-2
 * Time: 下午1:10
 * Web SQL Database 操作业务调度模块
 */

define(function (require, exports, module) {
    require('../webdb/backbone-webdbsync');
    require('bootstrap');
    require('datetimepicker');
    
    var FromView = require('../view/from-view')
        , ListView = require('../view/list-view');

    var fromView = new FromView;
    var listView = new ListView;
    
    fromView.render();
    listView.render();

});
