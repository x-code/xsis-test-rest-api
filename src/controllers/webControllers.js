const helloServer = async (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        responsetime: process.hrtime(),
        timestamp: Date.now()
    }
    return res.success({data : healthcheck, message: "ok", status: 200})
}


module.exports = {
    helloServer: helloServer
}