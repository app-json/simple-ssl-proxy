"use strict";

require("dotenv").load();
var request = require('request')
var path = require("path")
var http = require("http")
var url = require("url")
var route = require("router")()
var app = module.exports = http.createServer(route)

route.get('/', function(req, res) {
  var query = url.parse(req.url, true).query
  var img = query.url

  if (!img) {
    res.writeHead(400)
    res.write("`url` is a required query parameter")
    return res.end()
  }

  req.pipe(request(img)).pipe(res)
})

app.listen(process.env.PORT || 5000)
