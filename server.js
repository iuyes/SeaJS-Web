/**
 * User: Nightink
 * Date: 13-4-7
 * Time: 下午4:56
 * 静态服务器无文件缓存版
 * 参考了朴灵CNode的静态服务器代码
 */

var http = require('http')
    , url = require('url')
    , fs = require('fs')
    , path = require('path')
    , mime = require('./conf/mime')
    , config = require('./conf/config')
    , zlib = require('zlib')
    , PORT = config.PORT;

var app = http.createServer(function (req, res) {
    res.setHeader('Server', 'Node/Thorns');
    var pathName = url.parse(req.url).pathname;
    var logTxt = req.connection.remoteAddress + ' : ' + pathName;

    var stream = fs.createWriteStream(__dirname + "/log.txt", {
        encoding: 'utf8', 
        flags:'a'
    });

    stream.write(logTxt + '\r\n');

    // 防止'../'用户使用url访问服务端代码
    var realPath = path.join('public', path.normalize(pathName.replace(/\.\./g, '')));

    var handle = function (realPath) {
        fs.stat(realPath, function (err, data) {

            if (err) {
                res.writeHead(404, 'Not Found', { 'Content-Type':'text/plain;charset=utf-8' });
                res.write('请求路径' + pathName + '不存在');
                res.end();
            } else {

                // 判断data是为一个目录
                if (data.isDirectory()) {

                    // 载入目录下index文件
                    realPath = path.join(realPath, config.Welcome.file);
                    handle(realPath);
                } else {
                    var ext = path.extname(realPath);
                    ext = ext ? ext.slice(1) : 'unknown';
                    var contentType = mime[ext] || 'text/plain';
                    // 设置文件后缀名相对应的mime格式
                    res.setHeader('Content-Type', contentType + ';charset=utf-8');

                    var lastModified = data.mtime.toUTCString();
                    res.setHeader('Last-Modified', lastModified);

                    var raw = fs.createReadStream(realPath);
                    var acceptEncoding = req.headers['accept-encoding'] || '';
                    var matched = ext.match(config.Compress.match);

                    if (matched && acceptEncoding.match(/\bgzip\b/)) {
                        res.writeHead(200, 'OK', {'Content-Encoding':'gzip'});
                        raw.pipe(zlib.createGzip()).pipe(res);
                    } else if (matched && acceptEncoding.match(/\bdeflate\b/)) {
                        res.writeHead(200, 'OK', {'Content-Encoding':'deflate'});
                        raw.pipe(zlib.createDeflate()).pipe(res);
                    } else {
                        res.writeHead(200, 'OK');
                        raw.pipe(res);
                    }
                }
            }
        });
    }
    handle(realPath);
});

app.listen(PORT);

console.log('Server runing at:http://localhost:' + PORT + '/');
