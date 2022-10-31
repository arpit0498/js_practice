var readlineSync = require('readline-sync')
var news = readlineSync.question("enter the news: ")
var source = readlineSync.question("enter the source: ")

if (source.toLowerCase() == "whatsapp" || source.toLowerCase() == "facebook") {
    console.log("its a fake news")
} else (
    console.log("news might be correct")
)