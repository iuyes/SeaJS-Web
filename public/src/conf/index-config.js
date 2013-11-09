/**
 * User: chc
 * Date: 13-4-8
 * Time: 上午11:40
 * seajs配置文件
 */

//采用data-main="index-config.js"，而非data-main="index-main.js" 
//首先载入配置文件(本文件) ，在去获取主入口文件
//解决SeaJS V1.3.1 seajs.config 需在下次seajs.use才载入运行

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

seajs.use('/src/index-main');
