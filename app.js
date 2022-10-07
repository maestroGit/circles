// Dom elements
const upcanvas = document.getElementById('upcanvas');
const downcanvas = document.getElementById('downcanvas');
// varibles
const radius = 15;
const ctxup = upcanvas.getContext('2d');
const ctxdown = downcanvas.getContext('2d');
const degreesrotate = 20 * Math.PI / 180;

// Triangle
const drawTriangleleft = () => {
    ctxup.beginPath();
    ctxup.moveTo(250, 2); // origen
    ctxup.lineTo(150, 150);
    ctxup.lineTo(50, 150);
    // set line color
    ctxup.strokeStyle = '#ff0000';
    ctxup.fillStyle = '#01661f'
    ctxup.fill();
    ctxup.lineWidth = 2;
    ctxup.closePath();
    ctxup.stroke();
}

const drawTrianglerigth = () => {
    ctxup.beginPath();
    ctxup.moveTo(250, 2); // origen
    ctxup.lineTo(150, 150);
    ctxup.lineTo(200, 225);
    // set line color
    ctxup.strokeStyle = '#ff0000';
    ctxup.fillStyle = '#058c2e'
    ctxup.fill();
    ctxup.lineWidth = 2;
    ctxup.closePath();
    ctxup.stroke();
}

// Draw circle
// context.arc(x,y,r,starAngle,endAngle,counterclockwise);
const drawCircle = (radius, x, y, ctx) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#ff0000'
    ctx.fill();
}

const drawRadiusRadarc = () => {
    // arc rad
    ctxdown.beginPath();
    ctxdown.strokeStyle = '#000055';
    ctxdown.arc(50, 100, 50, 0 * Math.PI, 1)
    ctxdown.stroke();
    ctxdown.closePath();
    // circle 
    ctxdown.beginPath();
    ctxdown.arc(50, 100, 50, 0, 2 * Math.PI);
    ctxdown.fillStyle = 'yellow';
    ctxdown.fill();
    ctxdown.closePath();
    // radius
    ctxdown.beginPath();
    ctxdown.strokeText('Radio', 165, 90)
    ctxdown.moveTo(50, 100); // point origen
    ctxdown.lineTo(100, 100); // point end
    //ctxup.lineTo(50, 75);
    ctxdown.stroke();
    // radius extern circle
    ctxdown.beginPath();
    ctxdown.moveTo(155, 100); // point origen
    ctxdown.lineTo(205, 100); // point end
    //ctxup.lineTo(50, 75);
    ctxdown.stroke();
    // arc rad extern
    ctxdown.beginPath();
    ctxdown.strokeStyle = '#ff0000';
    ctxdown.strokeText('1 Radian', 205, 130)
    ctxdown.arc(155, 100, 50, 0 * Math.PI, 1)
    ctxdown.stroke();
    ctxdown.closePath();
    // circumference extern
    ctxdown.beginPath();
    ctxdown.strokeText('Circumference', 276, 300)
    ctxdown.arc(310, 275, 50, 0, 2 * Math.PI);
    ctxdown.stroke();

    ctxdown.closePath();
}

if (upcanvas.getContext || downcanvas.getContext) {
    // Rotate canvas
    //ctxup.rotate(degreesrotate);
    ctxup.fillRect(0, 300, 300, 25);
    ctxup.strokeText('WALKEXPERIENCE', 100, 298)
    drawTriangleleft();
    drawTrianglerigth();
    drawCircle(radius, 25, 165, ctxup);
    drawCircle(radius, 80, 220, ctxup);
    drawCircle(radius, 150, 195, ctxup);
    drawCircle(radius, 200, 270, ctxup);
    drawCircle(radius, 260, 180, ctxup);
    drawRadiusRadarc();
    // drawCircle(radius, 21, 020, ctxdown);
    // drawCircle(radius, 191, 080, ctxdown);
    // drawCircle(radius, 110, 115, ctxdown);
    // drawCircle(radius, 280, 164, ctxdown);
    // drawCircle(radius, 369, 050, ctxdown);


} else {
    console.log("canvas-unsupported code here")
}