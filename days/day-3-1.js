const fs = require('fs')
const express = require('express')
const app = express()

const jsonData = []

try {
    const data = fs.readFileSync('./misc/input-day-3.txt')
    var readableData = data.toString().split('\n')

    //Regex
    const idRegex = /^#\d+/g
    const locHorizontalRegex = /\d+(?=,)/g
    const locVerticalRegex = /\d+(?=:)/g
    const shpHorizontalRegex = /\d+(?=x)/g
    const shpVerticalRegex = /\d+$/gm


    readableData.forEach((item)=> {
        let tempObj = {
            // plain: item,
            id: item.match(idRegex)[0],
            x: item.match(locHorizontalRegex)[0],
            y: item.match(locVerticalRegex)[0],
            width:item.match(shpHorizontalRegex)[0],
            height: item.match(shpVerticalRegex)[0]
        }
        jsonData.push(tempObj)
    })
}catch(err){
    console.log(err.stack)
}


app.get('/api/day-3', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(jsonData)
})

app.listen('3000')