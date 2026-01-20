const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/events") {
        res.writeHead(200, {
            "content-type": "text/event-stream",
            "cache-control": "no-cache",
            "connection": "keep-alive"
        })

        const interval = setInterval(() => {
            res.write(`data: ${JSON.stringify({
                message: `hello at ${new Date().toISOString()}`
            })}\n\n`)
        }, 2500)

        req.on("close", () => {
            clearInterval(interval)
            res.end();
        })

    } else {
        res.write("server is active in Server Side Events")
        res.end();
    }
})


server.listen(3002, () => {
    console.log("server is running on port 3002")
})