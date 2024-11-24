function drawPicture() {
    drawHouse();
    sleep(7000).then(drawPlants);
    sleep(8000).then(drawClouds);
    sleep(9000).then(drawRainbow);

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function drawHouse(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(10, 395);
    ctx.lineTo(100, 395);
    sleep(100).then(() => {ctx.stroke(); ctx.moveTo(100, 395);});
    sleep(1000).then(() => {
        ctx.lineTo(100, 305);
        ctx.stroke();
    });
    sleep(2000).then(() => {
        ctx.lineTo(10, 305);
        ctx.stroke();
    });
    sleep(3000).then(() => {
        ctx.lineTo(10, 395);
        ctx.stroke();
    });
    sleep(4000).then(() => {ctx.closePath();ctx.fill();})
    sleep(5000).then(() => {ctx.fillStyle="white"; ctx.fillRect(30,325,15,15); ctx.fillRect(60,325,15,15);})
    sleep(6000).then(() => {drawRoof();})
    ctx.closePath();
    ctx.save();
}

function drawRoof() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = "gray";
    ctx.moveTo(7, 307.0);
    ctx.lineTo(52, 257);
    ctx.lineTo(107, 307);
    ctx.stroke();
    ctx.closePath();
    ctx.save();
}

function drawPlants() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(5, 395);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "green";
    ctx.lineTo(395,395);
    ctx.stroke();
    ctx.closePath();
    ctx.save();
    drawClouds();
}

function drawClouds() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "lightblue";
    ctx.moveTo(250, 105);
    ctx.arc(250,105,25,0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(215, 90);
    ctx.arc(215,90,25,0, 2 * Math.PI);
    ctx.fill();
    ctx.save();
    ctx.moveTo(190, 100);
    ctx.arc(190,100,25,0, 2 * Math.PI);

    ctx.fill();
    ctx.save();

}

function drawRainbow() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    const rainbowColors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
    ];
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = 100;
    for (let i = 0; i < rainbowColors.length; i++) {
        ctx.beginPath();
        ctx.arc(x, y, radius - i * 10, 0, Math.PI, true);
        ctx.strokeStyle = rainbowColors[i];
        ctx.lineWidth = 10;
        ctx.stroke();
    }
}

function drawStar() {
let id = null;
const pen = document.getElementById('pen');
let count = 0;
let pos = 0;
clearInterval(id);

id = setInterval(frame, 150);
const star_coords = [[0,0],[108, 0], [141, 70], [218, 78], [162, 131], [175, 205], [108, 170], [41, 205], [55, 131], [1, 78], [75, 68], [108, 0]];

function frame() {
    if (pos === 350) {
        clearInterval(id);
    }else if (count === 12) {
        myMove();
        pen.hidden = true;
    } else {
        pos++;
        let x = star_coords[count][0];
        let y = star_coords[count][1];
        count++;
        pen.style.left = x + 'px';
        pen.style.top = y +'px';
    }
}
}


