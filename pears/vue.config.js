const path=require("path")
function resolve(name){
  return path.join(__dirname,name)
}
module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        "@":resolve("src")
      }
    }
  }
}