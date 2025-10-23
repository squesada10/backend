const http = require('http');

const server = http.createServer((request, response) => {
  // console.log(" ---- request --- ")
  // console.log(request)
  // console.log(" --- response --- ")
  // console.log(response)

  console.log('metodo: ', request.method)
  console.log('URL: ', request.url)

  response.statusCode = 404

  response.setHeader("Content-Type", "text/plain")
  response.writeHead(200, { "content-type": "text/plain" })

  response.end("OK")

})


const PORT = 3000;

server.listen(PORT, () => console.log("servidor iniciado..."))

