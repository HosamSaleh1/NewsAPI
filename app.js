const newsapi = require('./tools/news')

newsapi('forex',(error,data)=>{
    if(data === undefined){
        console.log(error)
    }else{
        console.log(data)
    }
})