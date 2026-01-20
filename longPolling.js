const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/longPoll") {
        setTimeout(() => {
            res.writeHead(200, {
                "content-type": "application/json"
            })
            res.end(JSON.stringify({
                "message": `hello at ${new Date().toISOString()}`
            }))
        }, 6000)
    } else {
        res.writeHead(200);
        res.end("server is active")
    }
})

server.listen(3002, () => {
    console.log("server is running on port 3002")
})