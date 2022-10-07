// Dom elements
const upcanvas = document.getElementById('upcanvas');
const midelcanvas = document.getElementById("midelcanvas");
const downcanvas = document.getElementById('downcanvas');

// varibles
const radius = 15;
const gapxcoord = 58;
const gapycoord = 30;
const ctxup = upcanvas.getContext('2d');
const ctxmidel = midelcanvas.getContext('2d');
const ctxdown = downcanvas.getContext('2d');
//const degreesrotate = 20 * Math.PI / 180;


// Triangle
var a = { x: 250, y: 2 } // el punto a
var b = { x: 150, y: 150 } // el punto b
var c = { x: 50, y: 150 } // el punto c
const drawTriangle = (a, b, c) => {
    ctxup.beginPath();
    ctxup.moveTo(a.x, a.y); //punto de origen en el canvas, especificado por sus coordenadas "x" e "y". NO DIBUJA ninguna línea.
    ctxup.lineTo(b.x, b.x);
    ctxup.lineTo(c.x, c.y);
    // set line color
    ctxup.strokeStyle = '#ff0000';
    ctxup.fillStyle = '#01661f'
    ctxup.fill();
    ctxup.lineWidth = 2;
    ctxup.stroke();
    ctxup.closePath();
}

const drawTrianglerigth = (x, y) => {
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
// Para dibujar un círculo hay que trazar un arco de 360° ( 2π radianes = 2* Math.PI) método arc().
// context.arc(x,y,r,starAngle,endAngle,counterclockwise);
const drawCircle = (radius, x, y, ctx) => {
    ctx.beginPath();
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = '#ff0000';
    ctx.lineWidth = 5;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

const drawRadiusRadarc = () => {
    // arc rad
    ctxdown.beginPath();
    ctxdown.lineWidth = 1;
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
    ctxdown.strokeText('Radio', 165, 90);
    ctxdown.lineWidth = 1;
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

// Sector de angulo
// centro circulo (X,Y) cuyo sector vamos a dibujar, y el radio R de este.
const drawArc = (text) => {
    var X = midelcanvas.width / 2;
    var Y = 30;
    var R = 140;
    // El ángulo de partida anguloInicio y el ángulo final anguloFinal
    var anguloInicio = (Math.PI / 180) * 0;
    var anguloFinal = 1 //(Math.PI / 180) * 180;
        // Las coordenadas del punto de partida en la circunferencia
    var XanguloInicio = X + R * Math.cos(anguloInicio);
    var YanguloInicio = Y + R * Math.sin(anguloInicio);
    // estilos
    ctxmidel.fillStyle = "#cef7be";
    ctxmidel.strokeStyle = "red";
    ctxmidel.lineWidth = 1;
    // empezamos a dibujar
    ctxmidel.beginPath();
    ctxmidel.strokeText(text, X, Y * 0.5)
    ctxmidel.moveTo(X, Y);
    ctxmidel.lineTo(XanguloInicio, YanguloInicio);
    ctxmidel.arc(X, Y, R, anguloInicio, anguloFinal);
    ctxmidel.closePath();
    ctxmidel.fill();
    ctxmidel.stroke();
}

if (upcanvas.getContext || downcanvas.getContext) {
    // Rotate canvas
    //ctxup.rotate(degreesrotate);
    ctxup.fillRect(0, 300, 300, 25);
    ctxup.strokeText('WALKEXPERIENCE', 100, 298)
    drawTriangle(a, b, c);
    drawTrianglerigth(250, 2);

    x = 25;
    y = 165;
    for (i = 1; i <= 5; i++) {
        drawCircle(radius, x, y, ctxup);
        x = x + gapxcoord;
        y = y + gapycoord - 10;
        if (i % 2 == 0) {
            y = y + gapycoord;
        }
    }
    // drawCircle(radius, 25, 165, ctxup);
    // drawCircle(radius, 80, 220, ctxup);
    // drawCircle(radius, 150, 195, ctxup);
    // drawCircle(radius, 200, 270, ctxup);
    // drawCircle(radius, 260, 180, ctxup);
    drawRadiusRadarc();
    drawArc('arco con angulo de 1 radian');
} else {
    console.log("canvas-unsupported code here")
}