const chistes = [
  "¿Por qué el tomate se puso rojo? ¡Porque vio al pepino sin ropa!",
  "¿Cuál es el animal más antiguo? La cebra, ¡porque está en blanco y negro!",
  "¿Qué hace una vaca cuando sale el sol? ¡Sombra!",
  "¿Por qué el libro de matemáticas estaba triste? Porque tenía muchos problemas.",
  "¿Qué le dice una iguana a su hermana gemela? ¡Iguanita!",
  "¿Por qué el lápiz se fue al cielo? ¡Porque tenía una punta divina!",
  "¿Cómo se llama el campeón de buceo japonés? Tokofondo. ¿Y el subcampeón? Kasitoko.",
  "¿Qué hace un pez? ¡Nada!",
  "¿Qué le dice una escoba a otra? ¡Nos vemos en el barrido!",
  "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!"
];

let indice = 0;

function mostrarChiste() {
  document.getElementById("chiste").textContent = chistes[indice];
}

function siguienteChiste() {
  indice = (indice + 1) % chistes.length;
  mostrarChiste();
}

function anteriorChiste() {
  indice = (indice - 1 + chistes.length) % chistes.length;
  mostrarChiste();
}

document.addEventListener("DOMContentLoaded", mostrarChiste);

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }
});
