
const http = require("http")

const server = http.createServer()

const PORT = 8005
const HOST = "127.0.0.1"

server.listen(PORT,HOST, (err) => {
    if(!err) {
        console.log("Server is running on port:",PORT);
        console.log("Press CTRL+C to discontinue server........");  
    }
})
