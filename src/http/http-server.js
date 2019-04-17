const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8085;
const HOST = '127.0.0.1';

const server = http.createServer((req, res) => {
  // logRequest(req, res);
  // requestHandle(req, res);
  // serverResponse(req, res);
  fileContentResponse(req, res);

}).listen(PORT, HOST);

function logRequest(req, res) {
  if (req.url !== '/favicon.ico') {
    const logFilePath = path.resolve(__dirname, '../../assets/log/request.log')
    const out = fs.createWriteStream(logFilePath);
    out.write(`客户端请求所用方法为: ${req.method}\r\n`);
    out.write(`客户端请求所用url字符串为: ${req.url}\r\n`);
    out.write(`客户端请求头对象为: ${JSON.stringify(req.headers)}\r\n`);
    out.end(`客户端请求所用HTTP版本为: ${req.httpVersion}`);
  }
}

function requestHandle(req, res) {
  if (req.url !== '/favicon.ico') {
    req.on('data', (data) => {
      console.log(`服务器接收到数据：${decodeURIComponent(data)}`);
    });

    req.on('end', () => {
      console.log('客户端请求数据已全部接受完毕！');
    });
  }
  res.end();
}

function fileContentResponse(req, res) {
  if (req.url !== '/favicon.ico') {
    fs.readFile(path.resolve(__dirname, './../../assets/log/request.log'), (err, data) => {
      if (err) {
        console.log('读取文件发生错误！');
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': 'http://localhost:8086'
        });
        const flag = res.write(data);
        console.log(flag);
        res.end();
      }
    })
  }
}


function serverResponse(req, res) {
  if (req.url !== '/favicon.ico') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': 'http://localhost:8086'
    });
    res.write('你好!\n', 'utf8');
  }
  res.end();
}

server.on('listening', () => {
  console.log('服务器开始监听。');
  // server.close();
});

// 设置响应超时时间
// server.setTimeout(10 * 1000);

server.on('connection', (socket) => {
  console.log('客户端已链接...');
});

server.on('timeout', (socket) => {
  console.log('服务器超时!');
});

server.on('close', () => {
  console.error('服务器已经被关闭。');
});

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.log('ERROR: 指定地址或端口者已经被占用！');
  }
});
