// script.js
const frases = [
    "Puedes ir aprendiendo cosas poco a poco. Si estás vacío, puedes meter cosas en tu interior, de hecho es mejor estar vacío si quieres renacer."
  ];
  
  function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    const index = Math.floor(Math.random() * frases.length);
    mensaje.textContent = frases[index];
  }
  