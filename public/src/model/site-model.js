/**
 * User: Nightink
 * Date: 13-4-7
 * Time: 下午10:12
 * 站点信息集合 SiteInfo ---> Model
 */

define(function (require, exports, module) {
    var $ = require('jquery')
        , _ = require('underscore')
        , observer = require('observer')
        , Backbone = require('backbone');

    var SiteInfo = Backbone.Model.extend({
        defaults : {
            id: null,
            site: '',
            sid: null,
            longitude: null,
            latitude: null,
            elements: null,
            sitetype: null,
            sunit: null,
            sitedate: null,
            remark: ''
        },
        webdb : 'webSql',
        initialize : function (model, options) {
            var config = {};
            this.options = _.extend(config, options || {});
        },
        _isChinese: function(str) {     //判断字符是否为汉字字符
            var lst = /[u00-uFF]/;      //汉字utf码
            return !lst.test(str);
        },
        validate : function(attrs, options) {
            if(options.flag) {
                return this.__validate(attrs);
            } else {
                var currentAttr = this.attributes, newAttr = {}; //应该是判断是当前Model属性 而不是上一次Model属性
                for(var name in attrs) {
                    if(attrs[name] !== currentAttr[name]) {
                        newAttr[name] = attrs[name];
                    }
                }
                return this.__validate(newAttr);
            }
        },
        __validate: function(attrs) {   //统一验证方法
            var tipData = {              //验证信息结果包
                tagName: 'site',      //验证的字段
                tipStr: '正确',       //提醒消息
                flag: false           // true 验证成功 false 验证失败
            }
            , flag = false;
            for(var name in attrs) {
                if(name === 'id') {
                    continue;
                }

                tipData.tagName = name;

                var val = attrs[name];
                tipData = this[name + 'Verify'](val, tipData);
                observer.trigger('verify:msg', tipData);

                if(!tipData.flag) {
                    flag = true;
                }
            }
            return flag;
        },
        siteVerify: function(str, data) {
            var i=0, strLen = 0 , len = str.length || 0 ;
            if(len === 0 ) {
                data.tipStr = '数据不为空';
                data.flag = false;
                return data;
            }
            for(; i < len; i++) {
                if(this._isChinese(str.charAt(i))) {
                    strLen += 2;
                } else {
                    strLen += 1;
                }
            }
            if(strLen <= 20) {
                data.tipStr = '正确';
                data.flag = true;
            } else {
                data.tipStr = '站点错误';
                data.flag = false;

            }
            return data;
        },
        sidVerify: function(str, data) {
            var regx = /^[A-Za-z]\w{7}$/;
            if(regx.test(str)) {
                data.tipStr = '正确';
                data.flag = true;
            } else {
                data.tipStr = '必须8个英文字母+数字，且首字符为英文字母';
                data.flag = false;
            }
            return data;
        },
        _dutest: function(str, data, min, max) {
            var lati = parseFloat(str)
                , tipStr = '需为数字，有效范围:最小为' + min + ';最大为：' + max + ' 有限小数点六位'
                , reg = /^[+-]?[0-9]+(\.[0-9]{0,6})?$/;

            if( reg.test(str) && ( min <= lati && lati <= max ) ) {
                data.tipStr = '正确';
                data.flag = true;
            } else {
                data.tipStr = tipStr;
                data.flag = false;          
            }
            return data;
        },
        latitudeVerify: function(str, data) {
            return this._dutest(str, data, -90, 90);
        },
        longitudeVerify: function(str, data) {
             return this._dutest(str, data, -180, 180);
        },
        elementsVerify: function(str, data) {
            if(!$.trim(str)) {
                data.tipStr = '至少选择一项';
                data.flag = false;
            } else {
                data.tipStr = '正确';
                data.flag = true;
            }
            return data;
        },
        sunitVerify: function(str, data) {
            return data.flag = true, data;
        },
        sitedateVerify: function(str, data) {
            if(str === null) {
                data.tipStr = '时间不能为空';
                data.flag = false;
            } else {
                data.tipStr = '正确';
                data.flag = true;
            }
            return data;
        },
        sitetypeVerify: function(str, data) {
            if(str === null) {
                data.tipStr = '至少选择一项';
                data.flag = false;
            } else {
                data.tipStr = '正确';
                data.flag = true;
            }
            return data;
        },
        remarkVerify: function(str, data) {
            var keyWordSql = /(select|update|insert|create|delete|into|table|and|drop)/i;
            if(keyWordSql.test(str)) {
                data.tipStr = '小心查水表~';
                data.flag = false;
            } else {
                data.tipStr = '正确';
                data.flag = true;
            }
            return data;
        }
    });

    module.exports = SiteInfo;
});