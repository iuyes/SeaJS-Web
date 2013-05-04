/**
 * User: chc
 * Date: 13-4-10
 * Time: 上午8:20
 *
 * 重写Backbone.Sync 模块
 * 模拟服务器数据提取 发送操作
 * 只针对webdb数据 增、删、改、查
 * PS:不进行任何的DOM和数据模型、集合操作
 */

define(function(require, exports, module) {

    var _ = require('underscore')
        , Backbone = require('backbone')
        , WebDb = require('./db')
        , db = new WebDb("test", "1.0", "chc", 2 * 1024 * 1024);

    //创建表结构
    db.createTable('webSql', {
        "id":           "INTEGER PRIMARY KEY",
        "site":         "VARCHAR(20) NOT NULL",
        "sid":          "VARCHAR(8) NOT NULL",
        "longitude":    "VARCHAR(10) NOT NULL",
        "latitude":     "VARCHAR(10) NOT NULL",
        "elements":     "VARCHAR(8) NOT NULL",
        "sitetype":     "VARCHAR(8) NOT NULL",
        "sunit":        "VARCHAR(20) NOT NULL",
        "sitedate":     "VARCHAR(12) NOT NULL",
        "remark":       "TEXT NOT NULL"
    });

    Backbone.WebDbSync = function(method, model, options) {
        //负责显示数据
        var selectDb = function(tx, results) {
            var len = results.rows.length, i = 0, list = [];
            for (; i < len; i++) {
                var item = results.rows.item(i);
                list.push(item);
            }
            options.success(list);
        };

        switch (method) {
            case 'read':
                if(options.keyWorld) {
                    db.like(model.webdb, { 'site' : options.keyWorld }, selectDb);
                } else {
                    db.select(model.webdb, selectDb);
                }
                break;
            case 'create':
                var tableObject = model.toJSON();
                delete tableObject.id;
                db.insert(model.webdb, tableObject, function() {
                    options.success('添加成功');
                });
                break;
            case 'update':
                var data = model.toJSON(), id = data.id;
                delete data.id;
                console.log('1.test');
                db.update(model.webdb, data, {id: id}, function(tx, results) {
                    console.log('callback.test');
                    options.success('更新成功');
                });
                break;
            case 'delete':
                console.log('delete');
                db.delete(model.webdb, model.get('id'), function() {
                    options.success('删除成功');
                });
                break;
        }
    };

    //设置原生sync缓存变量
    Backbone.ajaxSync = Backbone.sync;

    Backbone.getSyncMethod = function(model) {
        if(model.webdb) {
            return Backbone.WebDbSync;
        }
        //非webdb操作调用ajax的sync
        return Backbone.ajaxSync;
    };

    //重载sync
    Backbone.sync = function(method, model, options) {
        return Backbone.getSyncMethod(model).call(this, method, model, options);
    };

});