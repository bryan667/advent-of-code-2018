const fs = require('fs')

try {
    const data = fs.readFileSync('./misc/input-day-2.txt', 'utf8')
    const stringData = data.split('\n')

    const finalAnswer = []
    stringData.forEach((value, index)=> {
        for (let i = 0; i < stringData.length; i++) {
            if (index !== i) {
                let comparison = stringData[i]
                const commonLetters = compareFunction(value, comparison)

                let zeroCount = 0
                commonLetters.forEach((letters)=> {
                    if (letters === 0) {
                        zeroCount ++
                    }
                })
                // console.log(JSON.stringify(commonLetters))
                // console.log(zeroCount)
                if (zeroCount <= 1) {
                    // console.log(commonLetters)
                    let letters = ''
                    commonLetters.forEach((item)=> {
                        if (item !== 0) {
                            letters = letters + item
                        }
                    })
                    finalAnswer.push(letters)
                }
            }
        }
    })

    console.log('Final Answer: ', finalAnswer) //Answer

} catch(err) {
    console.log(err.stack)
}

function compareFunction (value, comparison) {
    tempCorrectLetters = []
    // console.log(value, comparison)
    for (let i=0; i < value.length; i++) {
        if (value[i] === comparison[i]) {
            tempCorrectLetters[i] = value[i]
        } else {
            tempCorrectLetters[i] = 0
        }
    }
    return tempCorrectLetters
}
