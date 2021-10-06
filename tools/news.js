// const NewsApi = require('newsapi')
// const newsapi = new NewsApi('705eb8fdef79463785fd709e68626731')

// newsapi.v2.topHeadlines({
//     sources: 'bbc-news,the-verge',
//     q: 'bitcoin',
//     category: 'business',
//     language: 'en',
//     country: 'us'
//   }).then(response => {
//     console.log(response);
//     /*
//       {
//         status: "ok",
//         articles: [...]
//       }
//     */
//   });

const req = require('request')

const newsapi = (subj,callback)=>{
    const url = `https://newsapi.org/v2/everything?q=${subj}&apiKey=705eb8fdef79463785fd709e68626731`
    req({url,json:true},(error,response)=>{
        if(error){
            callback('Error has Occurred', undefined)
        }else if(response.status == 'error'){
            callback(response.code , undefined)
            callback(response.message , undefined)
        }else{
            callback(undefined, response)
        }
    })
}

module.exports = newsapi