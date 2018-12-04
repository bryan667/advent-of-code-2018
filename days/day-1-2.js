const fs = require('fs')

try {  
    var data = fs.readFileSync('./misc/input-day-1.txt', 'utf8');
    const AwArray = data.split('\n').map((item)=> {
        return parseInt(item)
    })
    
    let Answer = [0]
    let stopper = false
    let e = 0
    console.log('calculating..')
    while (stopper === false) {
        AwArray.forEach((item)=> {
            let currAns = Answer[e] + item
            // console.log(`${e}, ${Answer[e]} + ${item} --- ${currAns}`)
            if (Answer.includes(currAns) === true && stopper === false) {
                console.log(`awyis2: ${currAns}`) //Answer
                stopper = true
            }
            Answer.push(currAns)
            e ++
        })
    }
    console.log('done..')
} catch(err) {
    console.log('Error:', err.stack);
}