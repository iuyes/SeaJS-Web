define(function(require, exports, modules) {

    var object = exports;
    var eventSplitter = /\s+/;
    var stack = {};
    var console = window.console || function() {};
    var _events = {};

    modules.exports = {
        on: function(eventName, callback, context) {

            var _event = _events[eventName] || (_events[eventName] = []);

            _event.push({
                callback: callback,
                context: context,
                ctx: context || this
            });
            return this;
        },

        off: function(eventName, callback, context) {

            if (!eventName) {
                return this;
            };

            if (!callback && !context) {

                try {
                    delete _events[eventName];
                } catch(e) {}
            };

            var _event = _events[eventName] || [], resetEvent = [];

            for (var i = _event.length - 1; i >= 0; i--) {

                if(callback !== _event.callback) {

                    resetEvent.push[_event];
                }
            };

            _event = resetEvent;
            return this;
        },

        past: function() {},

        trigger: function(eventName) {

            var _event = _events[eventName] || [];
            var args = Array.prototype.slice.call(arguments, 1);

            for (var i = _event.length - 1; i >= 0; i--) {

                var obj = _event[i];
                obj.callback.apply(obj.context || obj.ctx, args);
            };
        },

        clear: function () {

        }
    };

});
