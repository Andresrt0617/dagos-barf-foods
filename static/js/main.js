document.addEventListener("DOMContentLoaded", () => {
  const phone = "573232239511";
  const message = encodeURIComponent(
    "Hola 👋 Quiero información sobre la dieta BARF de Dagos Barf Foods"
  );

  const waLink = `https://wa.me/${phone}?text=${message}`;

  document.querySelectorAll(".btn-whatsapp").forEach(btn => {
    btn.href = waLink;
    btn.target = "_blank";
    btn.rel = "noopener";
  });
});
