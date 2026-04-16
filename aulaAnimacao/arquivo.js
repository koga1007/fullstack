var canvas = document.getElementById("canva");
var ctx = canvas.getContext('2d');

let retangulo = {
    x: 0,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "red",
    direcao: 1,
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let retangulo2 = {
    x: 200,
    y: 200,
    altura: 50,
    largura: 50,
    cor: "blue",
    direcao: 1,
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let circulo = {
    x: 150,
    y: 300,
    raio: 50,
    cor: "yellow",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

function animar()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);

    retangulo2.altura += retangulo2.direcao;

    retangulo.x += retangulo.direcao;

    if (retangulo.x + retangulo.largura >= canvas.width) {
        retangulo.direcao = -1;
    } 
    else if (retangulo.x <= 0) {
        retangulo.direcao = 1;
    }

    if (retangulo2.altura == canvas.height)
    {
        retangulo2.direcao = -1;
        retangulo2.altura = retangulo2.altura + retangulo2.direcao;
    }
    else if(retangulo2.altura == 0)
    {
        retangulo2.direcao = 1;
        retangulo2.altura = retangulo2.altura + retangulo2.direcao;
    }

    bola.desenha();
    retangulo2.desenha();
    retangulo.desenha();
    circulo.desenha();

    requestAnimationFrame(animar);
}

document.addEventListener('keydown', function(evento){
    let tecla = evento.key;

    if (tecla == 'ArrowUp') circulo.y -= 5;
    if (tecla == 'ArrowDown') circulo.y += 5;
    if (tecla == 'ArrowLeft') circulo.x -= 5;
    if (tecla == 'ArrowRight') circulo.x += 5;
});
let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'a.avif';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400)
    bola.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    bola.x = x_mouse;
    bola.y = y_mouse;
})

animacao();
animar();
