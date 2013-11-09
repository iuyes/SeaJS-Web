/**
 * User: Nightink
 * Date: 13-4-7
 * Time: 下午5:01
 * 表单操作视图
 */

define(function(require, exports, module) {
    var _ = require('underscore')
        , $ = require('jquery')
        , Handlebars = require('handlebars')
        , Backbone = require('backbone')
        , SiteInfo = require('../model/site-model')
        , observer = require('observer');

    var alert = window.alert;

    //web sql调度接口
    var FromView = Backbone.View.extend({
        // 用于事件绑定的容器
        el: $('#web-sql'),
        // 载入模版文件
        template: Handlebars.compile(require('../tpl/from.tpl')),
        initialize: function() {
            this.model = new SiteInfo();

            observer.on('verify:msg', this.tipMsg, this);
            observer.on('model:edit', this.modelEdit, this);
        },
        // web页面事件触发注册
        events: {
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

        // 统一事件值获取
        valueSet: function(e) {
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

            // 将数组转化成字符串
            var elements = choice.join(':');
            this.model.set({elements: elements}, {validate: true});
        },
        sitetypeSet: function(e) {
            var sitetype = this.$('input[name=site-type]:checked').val();
            this.model.set({sitetype: sitetype}, {validate: true});
        },
        sunitSet: function(str) {
            var $unit = this.$('#unit');
            if(str === '0') {
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
        // 验证信息DOM显示
        tipMsg: function(data) {
            if(data.flag) {
                this.$('#' + data.tagName + '-help').html(data.tipStr).attr('class', 'self-ok');
            } else {
                this.$('#' + data.tagName + '-help').html(data.tipStr).attr('class', 'self-error');
            }
        },
        // sync success 事件监听回调函数
        success: function(model, str) {
            observer.trigger('add');
            alert(str);
            this.model = new SiteInfo();
            this.render();
        },
        render: function() {
            var data = this.model.toJSON();
            data.siteType = ['雨情', '水利', '水库', '潮位', '气象'];
            data.element = ['雨量', '水位', '库容', '潮位', '气压'];

            var content = this.template(data);
            this.$el.html(content);
            this.renderDom(data);

            // 时间控件调用
            this.$('#setdate').datetimepicker({
                pickTime: false
            });
        },
        // 针对页面无法用模版进行渲染的DOM元素进行单独渲染
        renderDom: function(data) {

            // 渲染站点类型
            this.$('input[name="site-type"][value="'+ data.sitetype +'"]').attr('checked', true);

            // 渲染检测要素
            if(data.elements) {
                _.each(data.elements.split(':'), function(val) {
                    $('input[name="elements"][value="'+ val +'"]').attr('checked', true); 
                })
            }
            // 针对站点单位进行渲染
            var value = data.sunit
                , unit = this.$('#unit')
                , $sunit = this.$('#sunit')
                // 下拉遍历状态
                , unitStatus = false;

            // 数据为空，不操作
            if(!$.trim(value)) {
                return;
            }

            $sunit.find('option').each(function(){
                if($(this).val() === value){
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
            if(sunit === '0') {
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

    module.exports = FromView;
});
