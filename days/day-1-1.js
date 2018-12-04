const fs = require('fs')

try {  
    var data = fs.readFileSync('./misc/input-day-1.txt', 'utf8');
    const AwArray = data.split('\n').map((item)=> {
        return parseInt(item)
    })
    
    let Answer = 0
    AwArray.forEach((item)=> {
        Answer = Answer + item 
    })
    console.log(Answer) //Answer
} catch(err) {
    console.log('Error:', err.stack);
}