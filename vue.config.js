module.exports={
    devServer:{
     proxy:{
         "/api":{
             target:"https://www.baidu.com"
         }
         
     }
    }
}