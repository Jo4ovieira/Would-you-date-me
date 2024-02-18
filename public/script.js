function nao() {

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    var botao = document.getElementById('nao');
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    randomT = getRandomNumber(0, winHeight);
    randomL = getRandomNumber(0, winWidth);
    
    botao.style.position = "absolute"
    botao.style.top = randomT +"px";
    botao.style.left = randomL +"px";
}

function sim() {
    alert("TE AMO!!!!!!!")
}