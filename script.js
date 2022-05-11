document.getElementById('iniciar').addEventListener('click', iniciar);
document.getElementById('reiniciar').addEventListener('click', reiniciar);


function iniciar() {
    document.getElementById('iniciar').setAttribute('disabled', 'true');
    document.getElementById('detener').removeAttribute('disabled');
    document.getElementById('reiniciar').removeAttribute('disabled');
    let cronometro = setInterval(()=>{
        document.getElementById('segundos').innerHTML++;
        let segundos = document.getElementById('segundos').innerHTML;
        if(segundos === "60"){
            document.getElementById('segundos').innerHTML = 0;
            document.getElementById('minutos').innerHTML++;
            let minutos = document.getElementById('minutos').innerHTML;
            if ( minutos == "60" ){
                document.getElementById('horas').innerHTML++;
                document.getElementById('minutos').innerHTML = 0;
            }
        }
    }, 1000)
    document.getElementById('detener').addEventListener('click', detener);
    function detener() {
        clearInterval(cronometro)
        document.getElementById('iniciar').removeAttribute('disabled');
    }
}

function reiniciar() {
    document.getElementById('segundos').innerHTML = '00'
    document.getElementById('minutos').innerHTML = '00';
    document.getElementById('horas').innerHTML = '00';
    document.getElementById('detener').setAttribute('disabled', 'true');
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function numeros() {
    var cero = 0;
    var numerosS = document.getElementById('segundos').innerHTML;
    if(numerosS.length = 1){
        cero += numerosS
    }
}

setInterval(numeros, 100);