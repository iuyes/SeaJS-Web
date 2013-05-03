/**
 * User: chc
 * Date: 13-4-8
 * Time: 上午11:40
 * seajs配置文件
 */

seajs.config({
    alias: {
        'jquery': 'jquery/1.8.2/jquery-debug',
        'bootstrap': 'bootstrap/js/bootstrap',
        'datetimepicker' : 'bootstrap-datetimepicker/js/bootstrap-datetimepicker',
        'underscore': 'underscore/1.4.4/underscore-debug',
        'backbone' : 'backbone/1.0.0/backbone-debug',
        'handlebars' : 'handlebars/1.1.1/handlebars-debug',
        'json' : 'json2/1.0.2/json2-debug',
		'observer': 'observer/1.0.0/observer'
    }
    , preload:['jquery', 'plugin-text']
});

seajs.use('/src/main/index-main');