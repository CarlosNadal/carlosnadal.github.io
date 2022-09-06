const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.getElementById('final');
 
//fecha a futurol
const countdownDate = new Date('nov 10, 2022 10:00 :00').getTime(); 
console.log(countdownDate)
let interval = setInterval(function(){
  //obtener fecha actual y milisegundos
  const now = new Date().getTime();

  //obtener las distancias entre ambas fechas
  let distance = countdownDate - now;
  //calculos a dias-horas-minutos-segundos
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 *24 )) / (1000 * 60 *60));
let minutes = Math.floor((distance %(1000 *60 *60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 *60)) / (1000));

//escribimos resultados
$days.innerHTML = days;
$hours.innerHTML = hours;
$minutes.innerHTML = minutes;
$seconds.innerHTML = ('0' + seconds).slice(-2);
//cuando llegue a 0
if (distance <=1) {
  clearInterval(interval);
$finalMessage.style.transform = 'translateY(0)';
  
}
}, 1000);