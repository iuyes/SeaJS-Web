/**
 * User: chc
 * Date: 13-4-7
 * Time: 下午5:01
 * 表单操作视图
 */

define(function(require, exports, modules) {
    var _ = require('underscore')
        , $ = require('jquery')
        , Handlebars = require('handlebars')
        , Backbone = require('backbone')
        , SiteInfo = require('../model/site-model')
        , observer = require('observer');

    var FromView = Backbone.View.extend({   //web sql调度接口
        el: $('#web-sql'),   //用于事件绑定的容器
        template: Handlebars.compile(require('../tpl/from.tpl')),   //载入模版文件
        initialize: function() {
            this.model = new SiteInfo;

            observer.on('verify:msg', this.tipMsg, this);
            observer.on('model:edit', this.modelEdit, this);
        },
        events: {       //web页面事件触发注册
            'blur #site': 'valueSet',
            'blur #sid': 'valueSet',
            'blur #latitude': 'valueSet',
            'blur #longitude': 'valueSet',
            'blur #unit': 'valueSet',
            'change :checkbox': 'elementsSet',
            'change :radio': 'sitetypeSet',
            'change #sunit': 'valueSet',
            'changeDate #setdate': 'sitedateSet',
            'keyup #remark': 'valueSet',
            'click #add': 'addSite'
        },
        valueSet: function(e) {     //统一事件值获取
            var $dom = $(e.target)
                , str = $.trim($dom.val())
                , name = $dom.attr('name');
            this[name + 'Set'](str);
        },
        siteSet: function(str) {
            this.model.set({site: str}, {validate: true});
        },
        sidSet: function(str) {
            this.model.set({sid: str}, {validate: true});
        },
        latitudeSet: function(str) {
            this.model.set({latitude: str}, {validate: true});
        },
        longitudeSet: function(str) {
            this.model.set({longitude: str}, {validate: true});
        },
        elementsSet: function(e) {
            var choice = [];
            this.$('input[name="elements"]:checked').each(function() {
                choice.push($(this).val());
            });
            var elements = choice.join(':');  //将数组转化成字符串
            this.model.set({elements: elements}, {validate: true});
        },
        sitetypeSet: function(e) {
            var sitetype = this.$("input[name=site-type]:checked").val();
            this.model.set({sitetype: sitetype}, {validate: true});
        },
        sunitSet: function(str) {
            var $unit = this.$('#unit');
            if(str == '0') {
                $unit.show();
                return;
            }
            $unit.hide();
            this.model.set({sunit: str}, {validate: true});
        },
        unitSet: function(str) {
            this.model.set({sunit: str}, {validate: true});
        },
        sitedateSet: function(e) {
            var input = $(e.target).find('#sitedate');
            var str = $.trim(input.val());
            this.model.set({sitedate: str}, {validate: true});
        },
        remarkSet: function(str) {
            this.model.set({remark: str}, {validate: true});
        },
        tipMsg: function(data) {		//验证信息DOM显示
            if(data.flag) {
                this.$('#' + data.tagName + '-help').html(data.tipStr).attr('class', 'self-ok');
            } else {
                this.$('#' + data.tagName + '-help').html(data.tipStr).attr('class', 'self-error');
            }
        },
        success: function(model, str) {		//sync success 事件监听回调函数
            observer.trigger('add');
            alert(str);
            this.model = new SiteInfo;
            this.render();
        },
        render: function() {
            var data = this.model.toJSON();
            data.siteType = ['雨情', '水利', '水库', '潮位', '气象'];
            data.element = ['雨量', '水位', '库容', '潮位', '气压'];

            var content = this.template(data);
            this.$el.html(content);
            this.renderDom(data);

            this.$('#setdate').datetimepicker({     //时间控件调用
                pickTime: false
            });
        },
        renderDom: function(data) {         //针对页面无法用模版进行渲染的DOM元素进行单独渲染
            this.$("input[name='site-type'][value='"+ data.sitetype +"']").attr("checked", true);   //渲染站点类型
			
            if(data.elements) {			//渲染检测要素
                _.each(data.elements.split(":"), function(val) {
                    $("input[name='elements'][value='"+ val +"']").attr("checked", true); 
                })
            }
            //针对站点单位进行渲染
            var value = data.sunit
                , unit = this.$('#unit')
                , $sunit = this.$('#sunit')
                , unitStatus = false;       //下拉遍历状态

            if(!$.trim(value)) return;  //数据为空，不操作
            $sunit.find('option').each(function(){
                if($(this).val() == value){
                    unitStatus = true;
                    $('#sunit').val(value);
                    unit.hide();
                }
            });
            if(!unitStatus) {
                $sunit.val(0);
                unit.show().val(value);
            }
        },
        addSite: function() {
            var sunit = this.$('#sunit').val();
            if(sunit == '0') {
                var str = this.$('#unit').val();
                this.model.set({sunit: str}, {validate: true});
            } else {
                this.model.set({sunit: sunit}, {validate: true});
            }
            this.sitetypeSet(null);
            this.model.on('sync', this.success, this);
            this.model.save(null, {flag: true});
        },
        modelEdit: function(model) {
            this.model = model;
            this.render();
        }
    });

    modules.exports = FromView;
});