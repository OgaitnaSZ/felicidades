sonido = new Audio('frases.mp3');
$(document).ready(function(){
    $('#carta').on('click', function(){
        $(this).hide();
        sonido.play();
        $('#mensaje').fadeIn(1000).animate({
            scale: '1.0'
        }, {
            duration: 1000,
            step: function(now, fx) {
                $(this).css('transform', 'scale(' + now + ')');
            }
        });
        setTimeout(()=>{
            $('#primer2').fadeIn(1500);
        },1000)
    });
});

mensaje = document.getElementById('mensaje');

document.getElementById('primer2').addEventListener('click',()=>{
    mensaje.style.display = 'none';
    document.getElementById('primer2').style.display = 'none';
    document.getElementById('title').style.display = 'block';
    gato.style.display = 'block';
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max)//Generar numeros aleatorios
}
gato = document.getElementById('gato');
function posiciones(x,y){   //Cambiar posicion
    gato.style.top = `${x}%`
    gato.style.left = `${y}%`
}
gato.addEventListener('mouseover', moverGato)
function moverGato(){
    document.getElementById('title').style.display = 'none'
    setTimeout(()=>{
        posiciones(getRandomInt(90),getRandomInt(90)) //Pocisiones aleatorias
    },150);
}

//Mensaje ganador
gato.addEventListener('click', ()=>{
    mensaje.style.display = 'block'
    mensaje.innerHTML = `
    <h1>¡Me Atrapaste!<br>ฅ(^◕ᴥ◕^)ฅ</h1>
    <p>Tu recomepensa es...</p>
    <div id="emotes1">
        <img src="kaisa.png" class="emote">
        <img src="yuumi.png" class="emote">
    </div>
    <div id="cont">
        <div id="recompensa">
            <img src="abrazo.jpg" id="image">
            <p>Un abrazo virtual uwu</p>
        </div>
    </div>
    <div id="emotes2">
        <img src="towa.png" class="emote">
        <img src="gwen.png" class="emote">
    </div>
    <p id="quedate">Quédate si quieres escuchar las frases bonitas :D</p>`

    $('.emote').each(function(index) {
        $(this).delay(750 * index).animate({ opacity: 1 }, 750);
    });
    gato.style.display = 'none'
    $('#cont').slideDown(1000);

    setTimeout(()=>{
        $(document).ready(function(){
            $('#recompensa').fadeIn(4000);
        });
    },3000)

    setTimeout(() => {
        $('#cont').fadeOut(1000, function() {
            $('#cont').empty().fadeIn(4000).html(`
                <img src="regalo-min.jpg" id="image">
                <p>Y estos tulipanes si es que los quieres uwu</p>
            `);
            $('#quedate').delay(3000).fadeIn(3000);
        });
    }, 8000);
})