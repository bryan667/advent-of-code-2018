const fs = require('fs')

try {
    const data = fs.readFileSync('./misc/input-day-2.txt', 'utf8')
    const stringArray = data.toString().split('\n')

    let threes = 0
    let twos = 0

    stringArray.forEach((item)=> {
        let tempLetters = []
        let tempObj = {}
        for (i=0 ; i < item.length; i ++) {
            let tempCount = 1
                if (tempLetters.includes(item[i])) {  //check if current letter is included
                    for (x=0; x < tempLetters.length; x++) {
                        if (tempLetters[x] === item [i]) {
                            tempCount = tempCount + 1
                        }
                    }
                }

            tempObj[item[i]] = tempCount
            tempLetters.push(item[i])
        }

        let tempThrees = 0
        let tempTwos = 0

        Object.values(tempObj).forEach((value)=> {
            if (value === 2 && tempTwos === 0) {
                tempTwos ++
            }
            if (value === 3 && tempThrees === 0) {
                tempThrees ++
            }
        })
        twos = twos + tempTwos
        threes = threes + tempThrees
    })
    console.log(`Checksum = ${twos} * ${threes}`)
    console.log(`Checksum = ${twos * threes}`) //Answer
} catch(err) {
    console.log(`Error: ${err.stack}`)
}