const root = document.getElementById('root')
const canvas = document.createElement('canvas');
canvas.id     = "myCanvas";
canvas.width  = 1500;
canvas.height = 1500;
canvas.style.zIndex   = 8;
canvas.style.position = "absolute";
canvas.style.border   = "1px solid";
root.appendChild(canvas)

console.log('aw2')

fetch('//localhost:3000/api/day-3')
.then(function(response) {
    return response.json()
})
.then(function(data){
    draw(data)
})

function draw (data) {
    console.log(data)
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d')

        data.forEach((draw)=> {
            ctx.strokeRect(draw.horizontalLoc, draw.verticalLoc, draw.horizontalShp, draw.verticalShp);
        })

    }
}