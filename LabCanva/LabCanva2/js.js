var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');

ctx.beginPath(); 
ctx.fillStyle = 'cyan';
ctx.fillRect(0, 125, 22, 45);   
ctx.fillRect(278, 135, 22, 30); 
ctx.closePath();



ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(0, 150); 
ctx.lineTo(300, 150); 
ctx.moveTo(150, 150); 
ctx.lineTo(150, 300); 
ctx.stroke();
ctx.closePath();

ctx.beginPath(); 
ctx.strokeStyle = 'green';
ctx.fillStyle = 'cyan';
ctx.arc(150, 300,60, 1 * Math.PI, 2 * Math.PI); 
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath(); 
ctx.strokeStyle = 'blue'; 
ctx.moveTo(150, 150); 
ctx.lineTo(0, 0); 
ctx.stroke();
ctx.closePath();

ctx.beginPath(); 
ctx.strokeStyle = 'red';
ctx.moveTo(150, 150); 
ctx.lineTo(300,0); 
ctx.stroke();
ctx.closePath();

ctx.beginPath(); 
ctx.strokeStyle = 'green';
ctx.arc(150, 150,45, 1 * Math.PI, 2 * Math.PI); 
ctx.stroke();
ctx.closePath();



ctx.beginPath();
ctx.fillStyle = 'blue';   
ctx.fillRect(0, 0, 45, 45);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'red';   
ctx.fillRect(255, 0, 45, 45);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow'; 
ctx.fillRect(0, 270, 60, 30); 
ctx.fillRect(0, 230, 30, 50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';  
ctx.fillRect(240, 270, 60, 30); 
ctx.fillRect(270, 230, 30, 55);
ctx.closePath();

ctx.beginPath(); 
ctx.fillStyle = 'cyan';
ctx.arc(150, 125, 15, 0, 2 * Math.PI); 
ctx.fill(); 
ctx.stroke();
ctx.closePath();

ctx.beginPath(); 
ctx.moveTo(150,149);
ctx.arc(150, 149, 70, 1.75 * Math.PI, 0 * Math.PI); 
ctx.stroke();
ctx.closePath();

ctx.beginPath(); 
ctx.moveTo(150,149);
ctx.arc(150, 149, 70, 1 * Math.PI, 1.25 * Math.PI); 
ctx.stroke();
ctx.closePath();


ctx.beginPath(); 
ctx.fillStyle = 'yellow';
ctx.arc(75, 210, 15, 0, 2 * Math.PI); 
ctx.fill(); 
ctx.stroke();
ctx.closePath();

ctx.beginPath(); 
ctx.arc(225, 210, 15, 0, 2 * Math.PI); 
ctx.fill(); 
ctx.stroke()
ctx.closePath();

ctx.beginPath(); 
ctx.moveTo(150,300);
ctx.arc(150, 300, 80, 1 * Math.PI, 1.5 * Math.PI); 
ctx.stroke();
ctx.closePath();

ctx.beginPath(); 
ctx.moveTo(150,300);
ctx.arc(150, 300, 70, 1.5 * Math.PI, 0 * Math.PI); 
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.font = "16px Arial";
ctx.fillText("Canvas", 125, 70) 
ctx.closePath();