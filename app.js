const questions = [
 [
  "acercarse a",
  "No debes ___ un oso.",
  "You should not approach a bear."
 ],
 [
  "andar",
  "Me gusta ___ por el parque.",
  "I like to walk through the park."
 ],
 [
  "dar un paseo",
  "Vamos a ___ después de comer.",
  "We are going to take a walk after eating."
 ],
 [
  "dejar de",
  "Debes ___ correr y descansar.",
  "You should stop running and rest."
 ],
 [
  "escalar",
  "Vamos a ___ una montaña.",
  "We are going to climb a mountain."
 ],
 [
  "perderse",
  "Es fácil ___ sin un mapa.",
  "It is easy to get lost without a map."
 ],
 [
  "refugiarse",
  "Hay una tormenta; es necesario ___.",
  "There is a storm; it is necessary to take shelter."
 ],
 [
  "el bosque",
  "Hay muchos árboles en ___.",
  "There are many trees in the forest."
 ],
 [
  "el desierto",
  "Hay mucha arena en ___.",
  "There is a lot of sand in the desert."
 ],
 [
  "hermoso",
  "El parque es muy ___; ¡qué bonito!",
  "The park is very beautiful; how pretty!"
 ],
 [
  "la naturaleza",
  "Me gustan los animales y las plantas de ___.",
  "I like the animals and plants in nature."
 ],
 [
  "el paisaje",
  "Desde aquí, ___ de montañas y ríos es bonito.",
  "From here, the landscape of mountains and rivers is pretty."
 ],
 [
  "el refugio",
  "Dormimos en ___ durante la tormenta.",
  "We slept in the shelter during the storm."
 ],
 [
  "la roca",
  "___ es una piedra muy grande.",
  "The rock is a very big stone."
 ],
 [
  "la sierra",
  "Hay muchas montañas en ___.",
  "There are many mountains in the mountain range."
 ],
 [
  "el valle",
  "El río pasa por ___ entre las montañas.",
  "The river passes through the valley between the mountains."
 ],
 [
  "los binoculares",
  "Uso ___ para ver pájaros que están lejos.",
  "I use binoculars to see birds that are far away."
 ],
 [
  "la brújula",
  "___ indica dónde está el norte.",
  "The compass shows where north is."
 ],
 [
  "la linterna",
  "Uso ___ para ver en la oscuridad.",
  "I use the flashlight to see in the dark."
 ],
 [
  "el repelente de insectos",
  "Uso ___ para protegerme de los mosquitos.",
  "I use insect repellent to protect myself from mosquitoes."
 ],
 [
  "el saco de dormir",
  "Duermo en ___ cuando voy de camping.",
  "I sleep in the sleeping bag when I go camping."
 ],
 [
  "la tienda de acampar",
  "Montamos ___ para dormir en el camping.",
  "We put up the tent to sleep at the campsite."
 ],
 [
  "caer granizo",
  "Empieza a ___: cae hielo del cielo.",
  "It begins to hail: ice falls from the sky."
 ],
 [
  "el granizo",
  "___ es hielo que cae del cielo.",
  "Hail is ice that falls from the sky."
 ],
 [
  "el relámpago",
  "___ es una luz en el cielo durante la tormenta.",
  "Lightning is a light in the sky during the storm."
 ],
 [
  "el trueno",
  "Oímos ___ durante la tormenta.",
  "We hear thunder during the storm."
 ],
 [
  "suceder",
  "¿Qué va a ___ mañana?",
  "What is going to happen tomorrow?"
 ],
 [
  "tener lugar",
  "La fiesta va a ___ en mi casa.",
  "The party is going to take place at my house."
 ],
 [
  "al amanecer",
  "Salimos ___, cuando sale el sol.",
  "We leave at dawn, when the sun comes up."
 ],
 [
  "al anochecer",
  "Volvemos ___, cuando empieza la noche.",
  "We return at dusk, when night begins."
 ],
 [
  "al principio",
  "___ no sabía nadar; ahora nado bien.",
  "At the beginning I did not know how to swim; now I swim well."
 ],
 [
  "un rato",
  "Voy a descansar ___, unos diez minutos.",
  "I am going to rest a while, about ten minutes."
 ],
 [
  "una vez allí",
  "Vamos al parque; ___, podemos caminar.",
  "We are going to the park; once there, we can walk."
 ],
 [
  "el entrenamiento",
  "___ de hoy incluye correr y nadar.",
  "Today's training includes running and swimming."
 ],
 [
  "entrenarse",
  "Un atleta necesita ___ todos los días.",
  "An athlete needs to train every day."
 ],
 [
  "hacer un esfuerzo",
  "Es difícil, pero voy a ___ para terminar.",
  "It is difficult, but I am going to make an effort to finish."
 ],
 [
  "inscribirse",
  "Para participar, hay que ___ primero.",
  "To participate, you have to register first."
 ],
 [
  "la inscripción",
  "Para completar ___, escribe tu nombre.",
  "To complete the registration, write your name."
 ],
 [
  "alcanzar",
  "Quiero ___ mi objetivo de correr cinco kilómetros.",
  "I want to reach my goal of running five kilometers."
 ],
 [
  "la carrera",
  "Los atletas corren en ___ de cinco kilómetros.",
  "The athletes run in the five-kilometer race."
 ],
 [
  "la ceremonia",
  "Recibimos los diplomas durante ___.",
  "We receive our diplomas during the ceremony."
 ],
 [
  "el certificado",
  "Al terminar el curso, recibo ___.",
  "When I finish the course, I receive the certificate."
 ],
 [
  "contra",
  "Mi equipo juega ___ tu equipo.",
  "My team plays against your team."
 ],
 [
  "eliminar",
  "Perder puede ___ a un equipo del torneo.",
  "Losing can eliminate a team from the tournament."
 ],
 [
  "la entrega de premios",
  "Recibimos las medallas durante ___.",
  "We receive the medals during the awards ceremony."
 ],
 [
  "¡Felicitaciones!",
  "¡Ganaste la carrera! ___",
  "You won the race! Congratulations!"
 ],
 [
  "la medalla",
  "Llevo ___ de oro en el cuello.",
  "I wear the gold medal around my neck."
 ],
 [
  "la meta",
  "Al cruzar ___, termino la carrera.",
  "When I cross the finish line, I finish the race."
 ],
 [
  "obtener",
  "Quiero ___ una medalla en la carrera.",
  "I want to get a medal in the race."
 ],
 [
  "el participante",
  "___ es una persona que compite.",
  "The participant is a person who competes."
 ],
 [
  "la representante",
  "Ana habla por su escuela; es ___.",
  "Ana speaks for her school; she is the representative."
 ],
 [
  "salir campeona",
  "Ana quiere ganar la final y ___.",
  "Ana wants to win the final and become the champion."
 ],
 [
  "el trofeo",
  "El equipo gana ___, una copa grande.",
  "The team wins the trophy, a large cup."
 ],
 [
  "vencer",
  "Queremos ___ al otro equipo en la final.",
  "We want to beat the other team in the final."
 ],
 [
  "animado",
  "Estoy ___ y tengo muchas ganas de jugar.",
  "I am excited and really want to play."
 ],
 [
  "asustar",
  "Un oso grande puede ___ a los niños.",
  "A big bear can scare the children."
 ],
 [
  "darse cuenta de",
  "Es importante ___ los errores para aprender.",
  "It is important to realize your mistakes in order to learn."
 ],
 [
  "desafortunadamente",
  "Queremos ir al parque; ___, está cerrado.",
  "We want to go to the park; unfortunately, it is closed."
 ],
 [
  "desanimado",
  "Estoy ___ porque perdí otra vez.",
  "I am discouraged because I lost again."
 ],
 [
  "duro",
  "El entrenamiento es ___; es muy difícil.",
  "The training is hard; it is very difficult."
 ],
 [
  "emocionarse",
  "Es normal ___ y llorar de alegría al ganar.",
  "It is normal to be moved and cry with joy when you win."
 ],
 [
  "estar orgullosa de",
  "Ana puede ___ su trabajo; lo hizo muy bien.",
  "Ana can be proud of her work; she did it very well."
 ],
 [
  "impresionar",
  "Su gran talento va a ___ al público.",
  "Her great talent is going to impress the audience."
 ],
 [
  "pasarlo bien",
  "Vamos a la fiesta para divertirnos y ___.",
  "We are going to the party to have fun and have a good time."
 ],
 [
  "aparecer",
  "Después de la lluvia, puede ___ un arcoíris.",
  "After the rain, a rainbow can appear."
 ],
 [
  "así",
  "Hazlo ___, como te muestro.",
  "Do it this way, as I show you."
 ],
 [
  "hacia",
  "Caminamos ___ el norte.",
  "We walk toward the north."
 ],
 [
  "perder el equilibrio",
  "En una bicicleta, puedes ___ y caerte.",
  "On a bicycle, you can lose your balance and fall."
 ],
 [
  "sin embargo",
  "Estoy cansada; ___, voy a terminar.",
  "I am tired; however, I am going to finish."
 ]
];
const $ = id => document.getElementById(id);
const shuffle = items => { const result = [...items]; for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];} return result; };
let deck, position, score, attempted, solved, english = false;
function start(){deck=shuffle(questions);position=0;score=0;render();}
function render(){
 attempted=false;solved=false;english=false;
 $('sentence').disabled=true;$('sentence').lang='es';$('hint').textContent='Choose an answer on the right.';
 $('count').textContent=`Sentence ${position+1} of ${deck.length}`;
 $('score').textContent=`${score} correct on first try`;
 $('bar').style.width=`${position/deck.length*100}%`;
 $('feedback').textContent='';$('feedback').className='feedback';$('next').disabled=true;
 $('next').textContent=position===deck.length-1?'See results →':'Next sentence →';
 const [answer,sentence]=deck[position];const [before,after]=sentence.split('___');
 const blank=document.createElement('span');blank.className='blank';blank.id='blank';blank.textContent='\u00a0';blank.setAttribute('aria-label','blank');
 $('sentence').replaceChildren(document.createTextNode(before),blank,document.createTextNode(after));
 scheduleFit();
 const alternatives=shuffle(questions.filter(q=>q[0]!==answer)).slice(0,3).map(q=>q[0]);
 $('choices').replaceChildren(...shuffle([answer,...alternatives]).map(word=>{const button=document.createElement('button');button.className='choice';button.textContent=word;button.addEventListener('click',()=>choose(word,button));return button;}));
}
function choose(word,button){
 if(solved)return;
 const answer=deck[position][0];
 if(word===answer){if(!attempted)score++;solved=true;showSpanish();$('hint').textContent=attempted?'Click the sentence for English.':'Choose Next sentence to continue.';button.classList.add('correct');$('feedback').className='feedback';$('feedback').textContent='✓ Correct!';$('score').textContent=`${score} correct on first try`;$('choices').querySelectorAll('button').forEach(b=>b.disabled=true);$('next').disabled=false;$('bar').style.width=`${(position+1)/deck.length*100}%`;}
 else{attempted=true;$('sentence').disabled=false;$('hint').textContent='Click the sentence to see it in English.';button.classList.add('wrong');button.disabled=true;$('feedback').className='feedback error';$('feedback').textContent='✕ Not quite. Try again.';}
}
function next(){if(!solved)return;if(position<deck.length-1){position++;render();}else{$('quiz').classList.add('hidden');$('count').textContent='Quiz complete';$('feedback').className='feedback';$('feedback').textContent=`You finished! ${score} of ${deck.length} correct on your first try.`;$('next').classList.add('hidden');$('restart').textContent='Play again ↻';}}
function restart(){$('quiz').classList.remove('hidden');$('next').classList.remove('hidden');$('restart').textContent='Start over ↻';start();}
 function showSpanish(){
 english=false;$('sentence').lang='es';
 const [answer,sentence]=deck[position];const [before,after]=sentence.split('___');
 const blank=document.createElement('span');blank.className='blank';blank.textContent=solved?answer:'\u00a0';
 if(!solved)blank.setAttribute('aria-label','blank');
 $('sentence').replaceChildren(document.createTextNode(before),blank,document.createTextNode(after));scheduleFit();
}
function translateSentence(){
 if(!attempted)return;
 if(english){showSpanish();$('hint').textContent='Click the sentence to see it in English.';}
 else{english=true;$('sentence').lang='en';$('sentence').textContent=deck[position][2];$('hint').textContent='Click the sentence to return to Spanish.';scheduleFit();}
}
// Fit actual rendered text to the available space, including browser zoom.
function fitText(element,max,min){
 let size=max;element.style.fontSize=size+'px';
 while(size>min&&(element.scrollHeight>element.clientHeight+1||element.scrollWidth>element.clientWidth+1)){size-=1;element.style.fontSize=size+'px';}
}
function scheduleFit(){requestAnimationFrame(()=>{
 fitText($('sentence'),Math.min(88,innerHeight*.105,innerWidth*.058),16);
 document.querySelectorAll('.choice').forEach(button=>fitText(button,Math.min(64,innerHeight*.075,innerWidth*.043),14));
});}
window.addEventListener('resize',scheduleFit);
if(window.visualViewport)window.visualViewport.addEventListener('resize',scheduleFit);
$('sentence').addEventListener('click',translateSentence);
$('next').addEventListener('click',next);$('restart').addEventListener('click',restart);start();
