var http = require('http');
var server=http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
  if(req.url=='/'){ 
  res.write('Nodejs uygulama'); res.end(); 
  }else 
  if(req.url=='/dilara'){ res.write('dilara tas'); res.end(); }else 
  if(req.url=='/tas'){ res.write('nodejs uyg'); res.end(); }else 
  { res.write('Page not found'); res.end(); 
  }
});
server.on('listening',function(){
    console.log('ok, server is running');	
});
server.listen(1915, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1915/');

