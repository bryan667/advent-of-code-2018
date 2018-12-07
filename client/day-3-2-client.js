const root = document.getElementById('root')
const ans = document.getElementById('answer')
const canvas = document.createElement('canvas');
canvas.id     = "myCanvas";
canvas.width  = 1010;
canvas.height = 1010;
canvas.style.zIndex   = 8;
canvas.style.position = "absolute";
canvas.style.border   = "1px solid";
canvas.style.borderColor   = "#FF0000";
root.appendChild(canvas)
const ctx = canvas.getContext('2d')

console.log('whattttt')

fetch('//localhost:3000/api/day-3-2')
.then(function(response) {
    return response.json()
})
.then(function(data){
    drawSquares(data)
})

function drawSquares (data) {
    let uniqueID = []

    data.forEach((rect)=> {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
        // ctx.globalCompositeOperation='lighten'
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
    })

    data.forEach((rect)=> {
        let width = parseInt(rect.width)
        let height = parseInt(rect.height)
        let cx = parseInt(rect.x)
        let cy = parseInt(rect.y)

        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
        // ctx.globalCompositeOperation='lighten'
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height)

        let isPerfect = true
        for (let x=0; x < width ;x++) {
            for (let y=0; y < height ;y++) {
                let coordx = cx + x
                let coordy = cy + y
                const pixelData = ctx.getImageData(coordx, coordy, 1, 1).data;

                if (!(pixelData[0] === 255 && pixelData[1] === 0 && pixelData[2] === 0 && pixelData[3] === 192)){
                    isPerfect = false
                    // console.log(rect.id, coordx, coordy)
                    break
                }
            }
        }
        if (isPerfect === true) {
            uniqueID.push(rect.id) 
        }
    })

    console.log('ID:', uniqueID) //Answer
    ans.innerHTML = `ID: ${uniqueID}`
}
