const questions = [
 [
  "acercarse a",
  "No debes ___ un oso.",
  "You should not ___ a bear."
 ],
 [
  "andar",
  "Me gusta ___ por el parque.",
  "I like ___ through the park."
 ],
 [
  "dar un paseo",
  "Vamos a ___ después de comer.",
  "We are going to ___ after eating."
 ],
 [
  "dejar de",
  "Debes ___ correr y descansar.",
  "You should ___ running and rest."
 ],
 [
  "escalar",
  "Vamos a ___ una montaña.",
  "We are going to ___ a mountain."
 ],
 [
  "perderse",
  "Es fácil ___ sin un mapa.",
  "It is easy to ___ without a map."
 ],
 [
  "refugiarse",
  "Hay una tormenta; es necesario ___.",
  "There is a storm; it is necessary to ___."
 ],
 [
  "el bosque",
  "Hay muchos árboles en ___.",
  "There are many trees in ___."
 ],
 [
  "el desierto",
  "Hay mucha arena en ___.",
  "There is a lot of sand in ___."
 ],
 [
  "hermoso",
  "El parque es muy ___; ¡qué bonito!",
  "The park is very ___; how pretty!"
 ],
 [
  "la naturaleza",
  "Me gustan los animales y las plantas de ___.",
  "I like the animals and plants in ___."
 ],
 [
  "el paisaje",
  "Desde aquí, ___ de montañas y ríos es bonito.",
  "From here, ___ of mountains and rivers is pretty."
 ],
 [
  "el refugio",
  "Dormimos en ___ durante la tormenta.",
  "We slept in ___ during the storm."
 ],
 [
  "la roca",
  "___ es una piedra muy grande.",
  "___ is a very big stone."
 ],
 [
  "la sierra",
  "Hay muchas montañas en ___.",
  "There are many mountains in ___."
 ],
 [
  "el valle",
  "El río pasa por ___ entre las montañas.",
  "The river passes through ___ between the mountains."
 ],
 [
  "los binoculares",
  "Uso ___ para ver pájaros que están lejos.",
  "I use ___ to see birds that are far away."
 ],
 [
  "la brújula",
  "___ indica dónde está el norte.",
  "___ shows where north is."
 ],
 [
  "la linterna",
  "Uso ___ para ver en la oscuridad.",
  "I use ___ to see in the dark."
 ],
 [
  "el repelente de insectos",
  "Uso ___ para protegerme de los mosquitos.",
  "I use ___ to protect myself from mosquitoes."
 ],
 [
  "el saco de dormir",
  "Duermo en ___ cuando voy de camping.",
  "I sleep in ___ when I go camping."
 ],
 [
  "la tienda de acampar",
  "Montamos ___ para dormir en el camping.",
  "We put up ___ to sleep at the campsite."
 ],
 [
  "caer granizo",
  "Empieza a ___: cae hielo del cielo.",
  "It begins to ___: ice falls from the sky."
 ],
 [
  "el granizo",
  "___ es hielo que cae del cielo.",
  "___ is ice that falls from the sky."
 ],
 [
  "el relámpago",
  "___ es una luz en el cielo durante la tormenta.",
  "___ is a light in the sky during the storm."
 ],
 [
  "el trueno",
  "Oímos ___ durante la tormenta.",
  "We hear ___ during the storm."
 ],
 [
  "suceder",
  "¿Qué va a ___ mañana?",
  "What is going to ___ tomorrow?"
 ],
 [
  "tener lugar",
  "La fiesta va a ___ en mi casa.",
  "The party is going to ___ at my house."
 ],
 [
  "al amanecer",
  "Salimos ___, cuando sale el sol.",
  "We leave ___, when the sun comes up."
 ],
 [
  "al anochecer",
  "Volvemos ___, cuando empieza la noche.",
  "We return ___, when night begins."
 ],
 [
  "al principio",
  "___ no sabía nadar; ahora nado bien.",
  "___ I did not know how to swim; now I swim well."
 ],
 [
  "un rato",
  "Voy a descansar ___, unos diez minutos.",
  "I am going to rest ___, about ten minutes."
 ],
 [
  "una vez allí",
  "Vamos al parque; ___, podemos caminar.",
  "We are going to the park; ___, we can walk."
 ],
 [
  "el entrenamiento",
  "___ de hoy incluye correr y nadar.",
  "Today's ___ includes running and swimming."
 ],
 [
  "entrenarse",
  "Un atleta necesita ___ todos los días.",
  "An athlete needs ___ every day."
 ],
 [
  "hacer un esfuerzo",
  "Es difícil, pero voy a ___ para terminar.",
  "It is difficult, but I am going to ___ to finish."
 ],
 [
  "inscribirse",
  "Para participar, hay que ___ primero.",
  "To participate, you have to ___ first."
 ],
 [
  "la inscripción",
  "Para completar ___, escribe tu nombre.",
  "To complete ___, write your name."
 ],
 [
  "alcanzar",
  "Quiero ___ mi objetivo de correr cinco kilómetros.",
  "I want to ___ my goal of running five kilometers."
 ],
 [
  "la carrera",
  "Los atletas corren en ___ de cinco kilómetros.",
  "The athletes run in ___ of five kilometers."
 ],
 [
  "la ceremonia",
  "Recibimos los diplomas durante ___.",
  "We receive our diplomas during ___."
 ],
 [
  "el certificado",
  "Al terminar el curso, recibo ___.",
  "When I finish the course, I receive ___."
 ],
 [
  "contra",
  "Mi equipo juega ___ tu equipo.",
  "My team plays ___ your team."
 ],
 [
  "eliminar",
  "Perder puede ___ a un equipo del torneo.",
  "Losing can ___ a team from the tournament."
 ],
 [
  "la entrega de premios",
  "Recibimos las medallas durante ___.",
  "We receive the medals during ___."
 ],
 [
  "¡Felicitaciones!",
  "¡Ganaste la carrera! ___",
  "You won the race! ___"
 ],
 [
  "la medalla",
  "Llevo ___ de oro en el cuello.",
  "I wear ___ of gold around my neck."
 ],
 [
  "la meta",
  "Al cruzar ___, termino la carrera.",
  "When I cross ___, I finish the race."
 ],
 [
  "obtener",
  "Quiero ___ una medalla en la carrera.",
  "I want to ___ a medal in the race."
 ],
 [
  "el participante",
  "___ es una persona que compite.",
  "___ is a person who competes."
 ],
 [
  "la representante",
  "Ana habla por su escuela; es ___.",
  "Ana speaks for her school; she is ___."
 ],
 [
  "salir campeona",
  "Ana quiere ganar la final y ___.",
  "Ana wants to win the final and ___."
 ],
 [
  "el trofeo",
  "El equipo gana ___, una copa grande.",
  "The team wins ___, a large cup."
 ],
 [
  "vencer",
  "Queremos ___ al otro equipo en la final.",
  "We want to ___ the other team in the final."
 ],
 [
  "animado",
  "Estoy ___ y tengo muchas ganas de jugar.",
  "I am ___ and really want to play."
 ],
 [
  "asustar",
  "Un oso grande puede ___ a los niños.",
  "A big bear can ___ the children."
 ],
 [
  "darse cuenta de",
  "Es importante ___ los errores para aprender.",
  "It is important to ___ your mistakes in order to learn."
 ],
 [
  "desafortunadamente",
  "Queremos ir al parque; ___, está cerrado.",
  "We want to go to the park; ___, it is closed."
 ],
 [
  "desanimado",
  "Estoy ___ porque perdí otra vez.",
  "I am ___ because I lost again."
 ],
 [
  "duro",
  "El entrenamiento es ___; es muy difícil.",
  "The training is ___; it is very difficult."
 ],
 [
  "emocionarse",
  "Es normal ___ y llorar de alegría al ganar.",
  "It is normal ___ and cry with joy when you win."
 ],
 [
  "estar orgullosa de",
  "Ana puede ___ su trabajo; lo hizo muy bien.",
  "Ana can ___ her work; she did it very well."
 ],
 [
  "impresionar",
  "Su gran talento va a ___ al público.",
  "Her great talent is going to ___ the audience."
 ],
 [
  "pasarlo bien",
  "Vamos a la fiesta para divertirnos y ___.",
  "We are going to the party to have fun and ___."
 ],
 [
  "aparecer",
  "Después de la lluvia, puede ___ un arcoíris.",
  "After the rain, a rainbow can ___."
 ],
 [
  "así",
  "Hazlo ___, como te muestro.",
  "Do it ___, as I show you."
 ],
 [
  "hacia",
  "Caminamos ___ el norte.",
  "We walk ___ the north."
 ],
 [
  "perder el equilibrio",
  "En una bicicleta, puedes ___ y caerte.",
  "On a bicycle, you can ___ and fall."
 ],
 [
  "sin embargo",
  "Estoy cansada; ___, voy a terminar.",
  "I am tired; ___, I am going to finish."
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
 else{english=true;$('sentence').lang='en';const [before,after]=deck[position][2].split('___');const blank=document.createElement('span');blank.className='blank';blank.textContent='\u00a0';blank.setAttribute('aria-label','blank');$('sentence').replaceChildren(document.createTextNode(before),blank,document.createTextNode(after));$('hint').textContent='Click the sentence to return to Spanish.';scheduleFit();}
}
// Fit actual rendered text to the available space, including browser zoom.
function fitText(element,max,min){
 let size=max;element.style.fontSize=size+'px';
 while(size>min&&(element.scrollHeight>element.clientHeight+1||element.scrollWidth>element.clientWidth+1)){size-=1;element.style.fontSize=size+'px';}
}
function scheduleFit(){requestAnimationFrame(()=>{
 if(window.fitQuiz)window.fitQuiz();
 const workspace=$('workspace');
 fitText($('sentence'),Math.min(88,workspace.clientHeight*.105,workspace.clientWidth*.058),16);
 document.querySelectorAll('.choice').forEach(button=>fitText(button,Math.min(64,workspace.clientHeight*.075,workspace.clientWidth*.043),14));
});}
window.addEventListener('resize',scheduleFit);
if(window.visualViewport)window.visualViewport.addEventListener('resize',scheduleFit);
$('sentence').addEventListener('click',translateSentence);
$('next').addEventListener('click',next);$('restart').addEventListener('click',restart);start();
