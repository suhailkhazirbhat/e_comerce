
  const http = require('http');
const app = require('./index.server');
const PORT = process.env.PORT || 5000


const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log("server is running on",PORT)
})