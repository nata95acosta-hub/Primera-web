// Año automático en footer
document.getElementById("year").textContent = new Date().getFullYear();

// Fecha simple de "última actualización"
const lastUpdate = new Date(document.lastModified);
document.getElementById("lastUpdate").textContent = lastUpdate.toLocaleDateString("es-CO");

// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Cerrar menú al hacer click en un link (móvil)
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Formulario demo (no envía, solo valida)
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 2) return setStatus("Escribe un nombre válido (mínimo 2 caracteres).");
  if (!email.includes("@")) return setStatus("Escribe un email válido.");
  if (message.length < 10) return setStatus("Tu mensaje debe tener mínimo 10 caracteres.");

  setStatus("✅ Listo. (Demo) Copia el mensaje y envíamelo por email o conecta un backend.");
  form.reset();
});

function setStatus(msg){
  status.textContent = msg;
}
