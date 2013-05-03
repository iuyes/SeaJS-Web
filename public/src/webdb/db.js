﻿/**
 * User: chc
 * Date: 13-3-6
 * Time: 下午11:10
 * Web SQL Database 操作类库
 */
define(function (require, exports, modules) {
    var _ = require('underscore');

    //WebDb构造函数
    function WebDb(dbName, version, displayName, maxSize) {
        var len = arguments.length;
        try {
            if (!window.openDatabase) {
                alert('本地数据库不支持');
            } else {
                if (len < 4) {
                    alert('参数至少要四个');
                    return;
                }
                //数据库单例模式
                if (!this.db) {
                    this.db = openDatabase(dbName, version, displayName, maxSize);
                } else {
                    return this;
                }
            }
        } catch (e) {
            if (e == 2) {
                console.log('无效数据库版本');
            } else {
                console.log('未知错误 ' + e + '。');
            }
        }
    }

    WebDb.prototype = {
        constructor:WebDb,
        //Sql操作函数
        exec:function (sql, params, successFn, errorFn) {
            if (_.isFunction(params)) {
                successFn = params;
                params = undefined;
            }
            successFn = successFn || function () {
                //设置sql操作成功处理函数
                console.log("SQL Query Succeeded");
            };

            errorFn = errorFn || function (transaction, error) {
                //设置sql操作失败处理函数
                console.log('Error was ' + error.message + ' errorCode is ' + error.code);
            };

            this.db.transaction(function (tx) {
                tx.executeSql(sql, params, successFn, errorFn);
            });
        },
        //创建数据库表
        createTable:function (tableName, tableStruct) {
            var structSql = '', name;
            for (name in tableStruct) {
                structSql += name + ' ' + tableStruct[name] + ' ,';
            }
            structSql = structSql.slice(0, -1);
            this.exec('CREATE TABLE IF NOT EXISTS ' + tableName + '(' + structSql + ')');
        },
        dropTable:function (tableName) {
            this.exec('DROP TABLE ' + tableName);
        },
        //数据库查找操作
        select:function (table, successFn, index, page) {
            index = index || 0;
            page = page || 20;
            var self = this, sql = 'SELECT * FROM ' + table + ' LIMIT ' + index + ',' + page;
            self.exec(sql, [], successFn);
        },
        //数据库插入操作
        insert:function (table, tableObj, successFn) {
            var self = this, sql = '',
                name, nameArr = [], valueArr = [];
            for (name in tableObj) {
                nameArr.push(name);
                //针对参数为字符串进行追加单引号操作
                if (_.isString(tableObj[name])) {
                    valueArr.push("'" + tableObj[name] + "'");
                } else {
                    valueArr.push(tableObj[name]);
                }
            }
            //拼接SQL语句
            sql = 'INSERT INTO ' + table + '(' + nameArr.join(',') + ') VALUES(' + valueArr.join(',') + ');';
            self.exec(sql, successFn);
        },
        //数据库更新操作
        update:function (table, tableObj, falg, successFn) {
            var self = this,
                sql = 'UPDATE ' + table + ' SET ';

            for (var name in tableObj) {
                if (_.isString(tableObj[name])) {
                    sql += name + " = '" + tableObj[name] + "'";
                } else {
                    sql += name + ' = ' + tableObj[name];
                }
                sql += ', ';
            }
            sql = sql.slice(0, -2); //过滤最后两个字符', '
            if (_.isObject(falg)) {
                sql += ' WHERE ';
                for (var k in falg) {
                    sql += k + '=' + falg[k] + 'OR';	//默认where 为 或操作 需重写此方法
                }
                sql = sql.slice(0, -2);
            }
            self.exec(sql, successFn);
        },
        delete:function (table, id, successFn) {
            var sql = 'DELETE FROM ' + table + ' WHERE id = ' + id + ';';
            this.exec(sql, successFn);
        },
        //获得表数据个数
        count:function (table, countFn) {
            var sql = 'SELECT count(*) FROM ' + table;
            this.exec(sql, countFn);
        },
        //like操作
        like:function (table, tableObj, successFn, index, page) {
            index = index || 0;
            page = page || 5;

            var sql = 'SELECT * FROM ' + table + ' WHERE ';
            for (var name in tableObj) {
                sql += name + " like '%" + tableObj[name] + "%' OR";
            }
            sql = sql.slice(0, -2);
            sql += ' LIMIT ' + index + ',' + page;
            this.exec(sql, successFn);
        }
    }

    modules.exports = WebDb;

});