
const path = require("path")
const config = require("../config")
const portfinder = require("portfinder")


exports.assetsPath = function(_path){
  if(config.isDev){
      _path = _path.replace(".[chunkHash:7]","")
      _path = _path.replace(".[hash:7]","")
  }
  return _path
}

exports.getPort = function(port){
  portfinder.basePort = 8080
  return portfinder.getPortPromise()
}
