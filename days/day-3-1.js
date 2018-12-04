const fs = require('fs')

try {
    const data = fs.readFileSync('./misc/input-day-3.txt')
    var readableData = data.toString().split('\n')

    console.log(readableData)

    //Regex
    const idRegex = /^#\d+/g
    const locHorizontalRegex = /\d+(?=,)/g
    const locVerticalRegex = /\d+(?=:)/g
    const shpHorizontalRegex = /\d+(?=x)/g
    const shpVerticalRegex = /\d+$/g
    const location = []

    readableData.forEach((item)=> {
        console.log(item)
        console.log(item.match(idRegex))
        console.log(item.match(locHorizontalRegex))
        console.log(item.match(locVerticalRegex))
        console.log(item.match(shpHorizontalRegex))
        console.log(item.match(shpVerticalRegex))        
    })

}catch(err){
    console.log(err.stack)
}