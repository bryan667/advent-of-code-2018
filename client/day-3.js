const root = document.getElementById('root')
const canvas = document.createElement('canvas');
canvas.id     = "myCanvas";
canvas.width  = 1100;
canvas.height = 1100;
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
    setTimeout(()=> {
        drawSquares(data)
    },0)
})

function drawSquares (data) {

    data.forEach((rect)=> {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
        // ctx.globalCompositeOperation='lighten'
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
    })
}

// for (let x=1; x < canvas.width ;x++) {
//     for (let y=1; y < canvas.height ;y++) {
//         var pixelData = ctx.getImageData(x, y, 1, 1).data;
//             if (pixelData[0] === 255 &&
//                 pixelData[1] === 0 &&
//                 pixelData[2] === 255 &&
//                 pixelData[3] === 255                    
//                 ) {

//             }
//     }
// }

canvas.addEventListener('click', (e) => {
    const mousePos = {
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - canvas.offsetTop
    };
    console.log('clicked: ', mousePos.x, mousePos.y);
    var pixelData = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
    console.log(`color: R: ${pixelData[0]}, G: ${pixelData[1]}, B: ${pixelData[2]}, A: ${pixelData[3]}`);
});

