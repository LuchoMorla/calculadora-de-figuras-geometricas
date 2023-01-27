/* alert('estamos!!!');

app.mount('#tiempoDeViaje') */
/*  document.getElementById(); */
const distancia = document.getElementById('distancia');
const boton = document.getElementById('boton');
const velocidad = document.getElementById('velocidad');

const pantallaResultado = document.getElementById('tiempoDeViajeEnHorasYMinutos');

const calcular = () => {
    const resultadoHoras = distancia.value / velocidad.value;
    const resultadoMinutos = resultadoHoras * 60;
    pantallaResultado.innerHTML = 'Tu viaje durara un total de: '+ resultadoHoras + ' Horas ' + ' o tambien '+ resultadoMinutos + ' Minutos';
    return resultadoHoras, resultadoMinutos;
}

boton.addEventListener('click', calcular)
