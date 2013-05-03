/**
 * User: chc
 * Date: 13-3-27
 * Time: 上午10:29
 * web sql 表单业务逻辑
 * 文件代码无效 这段代码为非Backbone开发
 */
define(function (require, exports, modules) {
    var $ = require('jquery')
        , WebDb = require('./webdb/db').WebDb;

    var id = 0
        , editStatus = false
        , tableName = 'webSql'
        , db = new WebDb("test", "1.0", "chc", 2*1024*1024)
        , index = 0, page = 5, prev = $('#prev'), next = $('#next');

    var tableStruct = {
        "id" : "INTEGER PRIMARY KEY",
        "site" : "VARCHAR(20) NOT NULL",
        "sid" : "VARCHAR(8) NOT NULL",
        "longitude" : "FLOAT(8) NOT NULL",
        "latitude" : "FLOAT(8) NOT NULL",
        "elements" : "VARCHAR(8) NOT NULL",
        "sitetype" : "INT(1) NOT NULL",
        "sunit" : "VARCHAR(20) NOT NULL",
        "sitedate" : "VARCHAR(12) NOT NULL",
        "remark" : "TEXT NOT NULL"
    };

    db.createTable(tableName, tableStruct);
    db.select(tableName, showTable);    //初始化
    pager();

    //显示表格数据，回调函数
    function showTable(tx, results) {
        var len = results.rows.length, i = 0, msg = '';
        for( ; i < len; i++) {
            var item = results.rows.item(i), id;
            msg += '<tr>';
            for(var name in tableStruct) {
                //获得当前数据的ID，便于进行修删操作
                if(name === 'id') {
                    id = item[name];
                } else {
                    msg += '<td>' + item[name] + '</td>';
                }
            }
            //追加 对数据表进行修改、删除操作
            msg += '<td><button class="btn btn-primary edit" value=' + id + '>修改</button></td>';
            msg += '<td><button class="btn delete" value=' + id + '>删除</button></td>';
            msg += '</tr>';

        }
        $('.table > tbody').html(msg);
    }

    //添加数据
    var addObject = $('#add');
    addObject.click(function(e){
        if(addObject.hasClass('disabled')) return;

        var site = $('#site').val(),                        //站点名称
            sid = $('#sid').val(),                          //站点编号
            longitude = $('#longitude').val(),              //站点经度
            latitude = $('#latitude').val(),                //站点纬度
            sitetype = $("input[name=site-type]:checked").val(),    //站点类型
            sunit = $('#sunit').val(),                              //建站单位
            sitedate = $('#sitedate').val(),                         //建站日期
            remark = $('#remark').val(),                            //站点备注
            choice = [];                                            //检测要素

        //经纬度字符串转化成数值
        longitude = parseFloat(longitude);
        latitude = parseFloat(latitude);
            //获得复选框的值
        $('input[name="elements"]:checked').each(function() {
            choice.push($(this).val());
        });
        var elements = choice.join(':');  //将数组转化成字符串
        if(sunit == '0') {
            sunit = $('#unit').val();   //针对下拉框为其他值时，进行获值
        }

        //插入数据库表对象
        var tableObj = {};
        for(var name in tableStruct) {
            if(name === 'id') continue;
            tableObj[name] = eval(name);
        }
        if(editStatus) {
            db.update(tableName, tableObj, {'id' : id});
            console.log('修改操作');
            editStatus = false;
        } else {
            console.log('添加操作');
            db.insert(tableName, tableObj);
        }

        db.select(tableName, showTable);
        pager();

        $(".form-horizontal").each(function() {
            this.reset();
        });
    });

    //分页
    function pager() {
        db.count(tableName, function(tx, results) {
            var count = results.rows.item(0)['count(*)'];
            if(count <= page) {
                next.addClass('disabled');
            } else {
                next.removeClass('disabled');
            }
            end = parseInt(count / page);
            residue = count % page;
            if(residue > 0 && residue < page) end += 1;
            //分页操作
            next.click(function(e) {
                if(next.hasClass('disabled')) return;
                index++;
                if(index > 0) prev.removeClass('disabled');
                if( index === (end - 1) ) {
                    next.addClass('disabled');
                }
                db.select(tableName, showTable, index * page);
            });

            prev.click(function(e) {
                if(prev.hasClass('disabled')) return;
                index--;
                if(index === 0) {
                    prev.addClass('disabled');
                }
                if(index < end) next.removeClass('disabled');
                db.select(tableName, showTable, index * page);
            });
        });
    }

    //修改回调函数，用表单回填
    var editFn = function(tx, results) {
        var result = results.rows.item(0);
        for(var name in tableStruct) {
            var value = result[name], unitStatus = false;
            switch (name) {
                case 'sunit':   //单位回填
                    var unit = $('#unit');
                    $("#sunit option").each(function(){
                        if($(this).val() == value){
                            unitStatus = true;
                            $('#sunit').val(value);
                            unit.hide();
                        }
                    });
                    if(!unitStatus) {
                        $('#sunit').val(0);
                        unit.show();
                        unit.val(value);
                    }
                    break;
                case 'sitetype':    //站点类型回填
                    var types = $("input[name='site-type'][value='"+ value +"']");
                    types.attr("checked", true);
                    break;
                case 'elements':    //检测元素回填
                    var elementGroup = $("input[name='" + name + "']");
                    var typeArr = value.split(":");

                    elementGroup.each(function(){
                        var self = $(this), val = self.val();
                        self.attr("checked", false);    //复选框清空回填
                        for(var j=0, typeArrLength = typeArr.length; j < typeArrLength; j++){
                            if(typeArr[j] == val){
                                self.attr("checked", true);
                            }
                        }
                    });
                    break;
                default :   //其他字段回填
                    $('#'+name).val(value);
                    break;
            }
        }
        editStatus = true;
    }

    //数据显示表格事件绑定， 删除、修改
    $('.table > tbody').delegate('.btn', 'click', function(e) {
        var self = $(this);

        var className = self.attr('class');
        //var _super = self.parent().parent(); //tr > td > button 此时节点为button，所以获得tr节点 进行删除、修改操作
        var _super = self.closest('tr');
        var regex = /delete/i;
        self.closest('tr');

        id = self.val();    //获取ID值
        if(regex.test(className)) {
            if(!confirm('是否删除?')) return;
            db.delete(tableName, id, function() {
                alert('删除成功');
                _super.remove();
            });
        } else {
            db.exec('SELECT * FROM ' + tableName + ' WHERE id = ' + id, editFn);
        }
    });

    /* 表单搜索功能 */
    function searchFun() {
        var keyWorld = $('.search-query').val();
        if($.trim(keyWorld)) {
            db.like(tableName, { 'site' : keyWorld }, showTable);
        } else {
            db.select(tableName, showTable);
        }
    }
    //点击搜索图片
    $('#btnSearch').bind('click', function(e) {
        searchFun();
    });

    $('.search-query').bind('keydown', function(e) {
        //回车事件监听
        if(e.keyCode === 13){
            searchFun();
        }
    });
});
