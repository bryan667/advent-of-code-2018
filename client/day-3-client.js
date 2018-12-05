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

console.log('aw2')

fetch('//localhost:3000/api/day-3')
.then(function(response) {
    return response.json()
})
.then(function(data){
    drawSquares(data)
})

function drawSquares (data) {
    data.forEach((rect)=> {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
        // ctx.globalCompositeOperation='lighten'
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
    })

    //compute unwanted colors
    let overlapPixels = 0
    for (let x=1; x < canvas.width ;x++) {
        for (let y=1; y < canvas.height ;y++) {
            var pixelData = ctx.getImageData(x, y, 1, 1).data;
            if (!((pixelData[0] === 255 && pixelData[1] === 0 && pixelData[2] === 0 && pixelData[3] === 128)                   
                ||
                (pixelData[0] === 0 && pixelData[1] === 0 && pixelData[2] === 0 && pixelData[3] === 0 ))
            ){
                overlapPixels = overlapPixels + 1
            }
        }
    }
    console.log('overlaps:', overlapPixels) //Answer
    ans.innerHTML = `overlaps: ${overlapPixels} sq.units`
}

canvas.addEventListener('click', (e) => {
    const mousePos = {
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - canvas.offsetTop
    };
    var pixelData = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
    console.log('clicked: ', mousePos.x, mousePos.y);
    console.log(`color: R: ${pixelData[0]}, G: ${pixelData[1]}, B: ${pixelData[2]}, A: ${pixelData[3]}`);
});

