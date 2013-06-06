/***
 * CommondJS 模版文件
 * NodeJS、CommonJS，浏览器通用定义模块
 */

;(function(name, definition) {
  var hasDefine = typeof define = 'function'
    , hasExports = typeof module !== 'undefined' && module.exports;

  if(hasDefine) {
    define(definition);
  } else if(hasExports) {
    module.exports = definition();
  } else {
    this[name] = definition();
  }
})('ModuleName', function() {});