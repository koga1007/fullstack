var resultado = Math.floor(Math.random() * 11);

console.log(resultado)





function verificar()
{
    var recebe = document.getElementById("numero").value;



    if(resultado == recebe)
    {
        document.getElementById("fundo").style.setProperty("background-color", "green");
        window.alert("ACERTOU!");
    }
    else{
        document.getElementById("fundo").style.setProperty("background-color", "red");
        window.alert("RESPOSTA INCORRETA");
};
};