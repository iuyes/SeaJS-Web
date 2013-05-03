/**
 * Created with JetBrains WebStorm.
 * User: Eyes
 * Date: 13-3-7
 * Time: 上午10:39
 * 表单验证模块
 * 文件无效
 */
define(function (require, exports, modules) {
    var $ = require('jquery');

    //$('#add').addClass('disabled');

    $('#setdate').datetimepicker({
        pickTime: false
    });

    //判断字符是否为汉字字符
    function isChinese(str) {
        var lst = /[u00-uFF]/;  //汉字utf码
        return !lst.test(str);
    }

    //针对所属单位进行判断
    $('#sunit').change(function(e) {
        var sel = $('#sunit').val();
        if(sel === '0') {
            console.log('显示输入框');
            $('#unit').show();
        } else {
            console.log(sel);
            $('#unit').hide();
        }
    });

    //站点名称验证
    $('#site').blur(function(e) {
        var siteHelp = $('#site-help'),
            siteName = $('#site').val(),
            len = siteName.length,
            strLen = 0;
        for(var i=0; i < len; i++) {
            if(isChinese(siteName.charAt(i))) {
                strLen += 2;
            } else {
                strLen += 1;
            }
        }
        if(len !== 0 && strLen <= 20) {
            siteHelp.html('正确').removeClass('self-error');
        } else {
            siteHelp.html('站点名称1~20个字符').addClass('self-error');
        }
    });

    //编号验证
    $('#sid').blur(function(e) {
        var sid = $('#sid').val()
            , sidHelp = $('#sid-help')
            , regx = /^[A-Za-z]\w{7}$/;

        if($.trim(sid) == '') return;

        if(regx.test(sid)) {
            sidHelp.html('正确').removeClass('self-error');
        } else {
            sidHelp.html('必须8个英文字母+数字，且首字符为英文字母').addClass('self-error');
        }
    });

    /**
     * 经纬度数据验证
     * @param str   验证数据
     * @param help  提醒jquery对象
     * @param min   最小值
     * @param max   最大值
     */
    function dutest(str, help, min, max) {
        if($.trim(str) == '') return;
        var lati = parseFloat(str)
            , tipStr = '需为数字，有效范围:最小为' + min + ';最大为：' + max + '有限小数点六位'
            , reg = /^[+-]?[0-9]+(\.[0-9]{1,6})?$/;

        if(!reg.test(str)) {
            help.html(tipStr).addClass('self-error');
            return;
        }
        if(min <= lati && lati <= max ) {
            help.html('正确').removeClass('self-error');
        } else {
            help.html(tipStr).addClass('self-error');
        }
    }

    //纬度验证
    $('#latitude').blur(function(e) {
        var latitudeHelp = $('#latitude-help'),
            lat = $('#latitude').val();
        dutest(lat, latitudeHelp, -90, 90);

    });

    //经度验证
    $('#longitude').blur(function(e) {
        var longitudeHelp = $('#longitude-help'),
            lon = $('#longitude').val();
        dutest(lon, longitudeHelp, -180, 180);
    });

    //备注进行简单的SQL关键字检测
    $('#remark').keyup(function(e) {
        var text = $('#remark').val(),
            remarkHelp = $('#remark-help');
            keyWordSql = /(select|update|insert|create|delete|into|table|and)/i;
        if(keyWordSql.test(text)) {
            remarkHelp.html('禁止插入sql语句').addClass('self-error');
        } else {
            console.log(text);
        }
    });

});
