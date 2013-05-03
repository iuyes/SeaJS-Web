/**
 * User: Eyes
 * Date: 13-4-15
 * Time: 上午10:39
 * 表单工具方法调用
 */
define(function (require, exports, modules) {
    var $ = require('jquery')
		, $sunit = $('#sunit');
	
    $('#setdate').datetimepicker({	    //时间控件调用
        pickTime: false
    });
/*
    $sunit.change(function(e) {	//针对所属单位进行判断
        var sel = $sunit.val();
        sel === '0' ? $('#unit').show() : $('#unit').hide();
    });
*/
});