const questions = [
['acercarse a','Es peligroso ___ un animal salvaje.'],
['andar','Me gusta ___ por los senderos del parque.'],
['dar un paseo','Después de cenar, vamos a ___ por el parque.'],
['dejar de','Para descansar, tenemos que ___ caminar.'],
['escalar','Con cuerdas y cascos, vamos a ___ una montaña.'],
['perderse','Sin un mapa, es fácil ___ en un lugar desconocido.'],
['refugiarse','Durante la tormenta, es importante ___ en un lugar seguro.'],
['el bosque','Hay muchos árboles y senderos en ___.'],
['el desierto','Casi nunca llueve en ___ y hay muy poca vegetación.'],
['hermoso','El paisaje es muy ___; ¡qué belleza!'],
['la naturaleza','Debemos proteger ___: los animales, las plantas y los ríos.'],
['el paisaje','Desde la cima, podemos admirar ___ con sus montañas y valles.'],
['el refugio','Durante la tormenta, ___ nos ofreció un lugar seguro para dormir.'],
['la roca','Para cruzar el río sin mojarnos, saltamos sobre ___.'],
['la sierra','Una cadena de montañas forma ___.'],
['el valle','Entre las dos montañas se extiende ___.'],
['los binoculares','Para ver los pájaros que están lejos, uso ___.'],
['la brújula','Para saber dónde está el norte, consulto ___.'],
['la linterna','Como está oscuro, enciendo ___.'],
['el repelente de insectos','Para evitar las picaduras de mosquitos, uso ___.'],
['el saco de dormir','Para dormir abrigado al acampar, me meto en ___.'],
['la tienda de acampar','Al llegar al campamento, montamos ___ para dormir dentro.'],
['caer granizo','El cielo se oscureció y empezó a ___: ¡bolas de hielo!'],
['el granizo','Durante la tormenta, ___ cayó en pequeñas bolas de hielo.'],
['el relámpago','De pronto, ___ iluminó el cielo durante la tormenta.'],
['el trueno','Después del destello de luz, oímos ___ retumbar.'],
['suceder','Nadie sabe qué va a ___ mañana.'],
['tener lugar','La ceremonia va a ___ en el gimnasio.'],
['al amanecer','Salimos ___, cuando apareció la primera luz del día.'],
['al anochecer','Regresamos ___, cuando el día terminó y empezó a oscurecer.'],
['al principio','Todo era nuevo ___, pero después nos acostumbramos.'],
['un rato','Estoy cansado; quiero descansar ___ antes de continuar.'],
['una vez allí','Primero viajamos al campamento; ___, montamos la tienda.'],
['el entrenamiento','Para prepararnos para la carrera, hacemos ___ todos los días.'],
['entrenarse','Para mejorar su resistencia, un atleta debe ___ con frecuencia.'],
['hacer un esfuerzo','La subida es difícil; tenemos que ___ para llegar a la cima.'],
['inscribirse','Para participar en la carrera, hay que ___ antes del viernes.'],
['la inscripción','Para completar ___, escribe tu nombre en el formulario.'],
['alcanzar','Con paciencia, puedes ___ tus objetivos.'],
['la carrera','Todos los corredores esperan ganar ___ de cinco kilómetros.'],
['la ceremonia','Durante ___ de graduación, los estudiantes recibieron sus diplomas.'],
['el certificado','Al terminar el curso, recibí ___ que demuestra que lo completé.'],
['contra','Nuestro equipo juega ___ el equipo de otra escuela.'],
['eliminar','En este torneo, perder un partido puede ___ a un equipo de la competencia.'],
['la entrega de premios','Los ganadores recibieron sus trofeos durante ___.'],
['¡Felicitaciones!','Ganaste el primer premio. ___'],
['la medalla','La ganadora lleva ___ de oro colgada del cuello.'],
['la meta','El corredor cruzó ___ y terminó la carrera.'],
['obtener','Si apruebas el curso, puedes ___ un certificado.'],
['el participante','Cada persona que compite es ___ en la carrera.'],
['la representante','Ana habla en nombre de su escuela; ella es ___ del grupo.'],
['salir campeona','Si gana la final, nuestra atleta puede ___.'],
['el trofeo','El equipo ganador levantó ___, una gran copa de plata.'],
['vencer','Para ganar la final, tenemos que ___ al otro equipo.'],
['animado','Antes de la fiesta, estoy muy ___ y lleno de entusiasmo.'],
['asustar','Un ruido fuerte en la oscuridad puede ___ a los niños.'],
['darse cuenta de','Al mirar el mapa, pudo ___ que iba por el camino equivocado.'],
['desafortunadamente','Queríamos salir; ___, una tormenta nos obligó a quedarnos en casa.'],
['desanimado','Después de perder tres partidos, estoy ___ y sin ganas de seguir.'],
['duro','El entrenamiento fue muy ___; terminamos agotados.'],
['emocionarse','Al recibir una sorpresa tan especial, es normal ___ y llorar de alegría.'],
['estar orgullosa de','Después de tanto trabajo, ella puede ___ su esfuerzo.'],
['impresionar','Su increíble talento va a ___ al público.'],
['pasarlo bien','En las vacaciones queremos divertirnos y ___.'],
['aparecer','Después de la lluvia, un arcoíris puede ___ en el cielo.'],
['así','Mira cómo lo hago; dobla el papel exactamente ___.'],
['hacia','La flecha señala la dirección: debemos caminar ___ el norte.'],
['perder el equilibrio','Si te paras en un solo pie, puedes ___ y caerte.'],
['sin embargo','Estaba muy cansada; ___, terminó la carrera.']
];
const $ = id => document.getElementById(id);
const shuffle = items => { const result = [...items]; for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];} return result; };
let deck, position, score, attempted, solved;
function start(){deck=shuffle(questions);position=0;score=0;render();}
function render(){
 attempted=false;solved=false;
 $('count').textContent=`Sentence ${position+1} of ${deck.length}`;
 $('score').textContent=`${score} correct on first try`;
 $('bar').style.width=`${position/deck.length*100}%`;
 $('feedback').textContent='';$('feedback').className='feedback';$('next').disabled=true;
 $('next').textContent=position===deck.length-1?'See results →':'Next sentence →';
 const [answer,sentence]=deck[position];const [before,after]=sentence.split('___');
 const blank=document.createElement('span');blank.className='blank';blank.id='blank';blank.textContent='\u00a0';blank.setAttribute('aria-label','blank');
 $('sentence').replaceChildren(document.createTextNode(before),blank,document.createTextNode(after));
 const alternatives=shuffle(questions.filter(q=>q[0]!==answer)).slice(0,3).map(q=>q[0]);
 $('choices').replaceChildren(...shuffle([answer,...alternatives]).map(word=>{const button=document.createElement('button');button.className='choice';button.textContent=word;button.addEventListener('click',()=>choose(word,button));return button;}));
}
function choose(word,button){
 if(solved)return;
 const answer=deck[position][0];
 if(word===answer){if(!attempted)score++;solved=true;$('blank').textContent=answer;$('blank').removeAttribute('aria-label');button.classList.add('correct');$('feedback').className='feedback';$('feedback').textContent='✓ Correct!';$('score').textContent=`${score} correct on first try`;$('choices').querySelectorAll('button').forEach(b=>b.disabled=true);$('next').disabled=false;$('bar').style.width=`${(position+1)/deck.length*100}%`;}
 else{attempted=true;button.classList.add('wrong');button.disabled=true;$('feedback').className='feedback error';$('feedback').textContent='✕ Not quite. Try another word.';}
}
function next(){if(!solved)return;if(position<deck.length-1){position++;render();$('sentence').scrollIntoView({block:'nearest'});}else{$('quiz').classList.add('hidden');$('count').textContent='Quiz complete';$('feedback').className='feedback';$('feedback').textContent=`You finished! ${score} of ${deck.length} correct on your first try.`;$('next').classList.add('hidden');$('restart').textContent='Play again ↻';}}
function restart(){$('quiz').classList.remove('hidden');$('next').classList.remove('hidden');$('restart').textContent='Start over ↻';start();}
 $('next').addEventListener('click',next);$('restart').addEventListener('click',restart);start();
