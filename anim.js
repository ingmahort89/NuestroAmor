
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


const lyricsData = [
  { text: "You know", time: 6 },
  { text: "I've always been collected, calm and chill", time: 11 },
  { text: "And you know", time: 18 },
  { text: "I never look for conflict for the thrill", time: 23 },

  { text: "But if I'm feeling", time: 30 },
  { text: "Someone stepping towards you, can't describe", time: 34 },
  { text: "Just what I'm feeling", time: 40 },

  { text: "For you, I'd go", time: 47 },
  { text: "Step to a dude much bigger than me", time: 51 },
  { text: "For you, I know", time: 57 },
  { text: "I would get messed up, weigh 153", time: 61 },
  { text: "For you", time: 67 },
  { text: "I would get beat to smithereens", time: 70 },

  { text: "You know", time: 80 },
  { text: "I'll be in the corner taking notes", time: 85 },
  { text: "And you know", time: 91 },
  { text: "I got your six while you're working votes", time: 95 },

  { text: "But if I'm feeling", time: 103 },
  { text: "Someone stepping towards you, can't describe", time: 107 },
  { text: "Just what I'm feeling", time: 113 },

  { text: "For you, I'd go", time: 120 },
  { text: "Step to a dude much bigger than me", time: 124 },
  { text: "For you, I know", time: 130 },
  { text: "I would get messed up, weigh 153", time: 134 },
  { text: "For you", time: 140 },
  { text: "I would get beat to smithereens", time: 143 },

  { text: "I would get beat to", time: 150 },
  { text: "You know I had to do one", time: 155 },
  { text: "You know I had to do one on the record for you", time: 161 },

  { text: "If I'm feeling", time: 183 },
  { text: "Someone stepping towards you, can't describe", time: 187 },
  { text: "Just what I'm feeling", time: 193 },

  { text: "For you, I'd go", time: 200 },
  { text: "Write a slick song just to show you the world", time: 204 },
  { text: "For you, I know", time: 210 },
  { text: "They think it's messed up to sell out for your girl", time: 214 },

  { text: "For you, I'd go", time: 221 },
  { text: "Step to a dude much bigger than me", time: 225 },
  { text: "For you, I know", time: 231 },
  { text: "I would get messed up, weigh 153", time: 235 },
  { text: "For you", time: 241 },
  { text: "I would get beat to smithereens", time: 244 }
];




// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);