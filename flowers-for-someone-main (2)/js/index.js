const title = document.querySelector('.title');
const text = `Para ti luanna`.split('');

title.style.display = 'flex';
title.style.flexWrap = 'wrap';
title.style.justifyContent = 'center';
title.style.gap = '0.5rem';

// Aparece el texto animado
for (let i = 0; i < text.length; i++) {
  if (text[i] !== ' ') {
    title.innerHTML += `<span>${text[i]}</span>`;
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`;
  }
}

setTimeout(() => {
  const cartaHTML = `
    <div class="carta">
      <p>
        Probablemente hayas pensado que no estaba dispuesto para hacer esto, o que simplemente no quería hacerlo y nunca lo haría hasta que pase algo y dejarlo ahí o dejar los sentimientos en la nada, no sabes las ganas de tener nuestro nombre, pero realmente quería hacerlo en persona, porque quiero que sientas que sea algo genuino, quisiera ser una marca de esas que no se borran, y de verdad, en serio, esperaría por hacerlo luanna, ya que siento que no seria justo para lo que siento, pero tampoco quiero que pienses que te hago esperar sin motivos, porque en realidad mi único motivo eres tu, el motivo de verte, abrazarte, darte varios besos en la frente y poder sentirte, pero admito que el amor que siento por ti me desborda y no creo aguantar, ya que, se que tratarnos como si fuésemos sin serlo, no seria algo tan bueno para ti, y aunque diga esperar, se que también para mi , pero aun asi tengo fe y se que lo hare aun asi porque realmente quiero hacerlo, estos sentimientos que tengo por ti es demasiado, todo el tiempo ando pensando en ti, mínimo 2 veces al día reviso nuestro chat o veo tus fotos, eres una de las razones por la cual me levanto feliz y la  razón por la que me cuesta dormir por las noches, me dan mini paros cuando me das los buenos días de manera tan linda que me quedo viendo ese mensaje e intentando escribirte de igual manera para que sientas lo mismo o simplemente un mensaje o audio tuyo escuchando tu voz, para que llegando a mi casa ponerme cómodo poder llamarte y casi siempre terminar bajo la fresada hablándote y diciéndote lo mucho que me encantas, mientras te pienso y te imagino que estas a mi costado, en verdad me gustas mucho, aunque se que habrá muchas facetas de ti que me falta conocer y descubrir en ti, bueno o malo quiero hacerlo, quiero vivir muchas cosas contigo en verdad, y desde ya te digo aunque ahora no estemos juntos, aunque el mundo cambie o la distancia se pueda hacer eterna por muchos motivos que dios no quiera, siempre vas a tener un lugar en mi corazon, espero lograra muchas cosas contigo en verdad, se que aun asi te lo pediré cuando se de el que nos veamos pero, realmente quisieras ser mi novia? 	
      </p>
        En verdad me gustas mucho... realmente, ¿quisieras estar conmigo?
      </p>
      <div class="botones">
        <button id="btnSi">Sí 💙</button>
        <button id="btnNo">No 💔</button>
      </div>
    </div>
  `;
  title.insertAdjacentHTML('afterend', cartaHTML);

  const btnSi = document.getElementById('btnSi');
  const btnNo = document.getElementById('btnNo');
  const openBtn = document.getElementById('openBtn');

  // Bloquea el botón Open hasta que se elija una opción
  openBtn.style.pointerEvents = 'none';
  openBtn.style.opacity = '0.3';

  btnSi.addEventListener('click', () => {
    document.querySelector('.carta').innerHTML = `
      <h2>Para tii amor</h2>
      <p>Y te dare mas cuando nos veamos</p>
      <p>Abrelo..</p>
    `;
    setTimeout(() => {
      document.querySelector('.carta').style.display = 'none';
      // Activa el botón "Open"
      openBtn.style.pointerEvents = 'auto';
      openBtn.style.opacity = '1';
    }, 3000);
  });

  btnNo.addEventListener('click', () => {
    document.querySelector('.carta').innerHTML = `
      <h2>:( igual toma</h2>
      <p>Pero igual las flores son tuyas 🌸</p>
    `;
    setTimeout(() => {
      document.querySelector('.carta').style.display = 'none';
      // También activa el botón Open (por si dice no)
      openBtn.style.pointerEvents = 'auto';
      openBtn.style.opacity = '1';
    }, 3000);
  });
}, 3000);