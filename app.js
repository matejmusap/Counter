var express = require("express"),
    app     = express(),
    port    = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/", function(req, res) {
    res.redirect("/counter");
});

app.get("/counter", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function() {
    console.log("Server has started at " + port);
});