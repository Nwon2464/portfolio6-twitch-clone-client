const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function(app) {
    app.use([ "/auth/*", "/api/v1/*", "/streams" ], createProxyMiddleware({
        target : "http://localhost:5000",//server local host 
        // target : "https://server-t.vercel.app", 
                // changeOrigin:true,
            }));

};
