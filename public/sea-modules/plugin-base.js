define("seajs/plugin-base", [], function (n, l) {
    var m = seajs.pluginSDK, j = m.util, i = m.Module, g = {}, k = {};
    l.add = function (a) {
        g[a.name] = a
    };
    l.util = {xhr:function (a, e) {
        var c = window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLHTTP") : new window.XMLHttpRequest;
        c.open("GET", a, !0);
        c.onreadystatechange = function () {
            if (4 === c.readyState)if (200 === c.status)e(c.responseText); else throw Error("Could not load: " + a + ", status = " + c.status);
        };
        return c.send(null)
    }, globalEval:function (a) {
        a && /\S/.test(a) && (window.execScript ||
            function (a) {
                window.eval.call(window, a)
            })(a)
    }};
    (function () {
        var a = i._resolve;
        i._resolve = function (e, c) {
            var d, b = e, f = e.match(/^(\w+)!(.+)$/);
            f && (f[1] && g.hasOwnProperty(f[1])) && (d = f[1], b = f[2]);
            b = "#" + j.parseAlias(b);
            if (!d && (f = b.match(/[^?]*(\.\w+)/))) {
                var f = f[1], h;
                for (h in g)if (h && g.hasOwnProperty(h) && -1 < j.indexOf(g[h].ext, f)) {
                    d = h;
                    break
                }
            }
            d && !/\?|#$/.test(b) && (b += "#");
            b = a(d ? b : e, c);
            d && g.hasOwnProperty(d) && !k[b] && (k[b] = d);
            return b
        }
    })();
    (function () {
        var a = i._fetch;
        i._fetch = function (e, c, d) {
            var b = k[j.unParseMap(e)];
            b ? g[b].fetch(e, c, d) : a(e, c, d)
        }
    })()
});
