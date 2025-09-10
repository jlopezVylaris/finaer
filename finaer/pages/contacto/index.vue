<template> 
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <h1 class="text-5xl text-center font-bold w-full lg:w-[100%]">
        <span class="text-[#8A88FF]">Contacto</span>
      </h1>
      <p class="text-center">
        Visítanos en nuestras redes sociales y conoce mucho más sobre nosotros!
      </p>

      <!-- Contenedor de botones responsive -->
      <div class="flex flex-col md:flex-row justify-center items-center mt-12 mb-12 gap-4 w-full">
        <!-- Botón Facebook -->
        <a href="https://www.facebook.com/CentroMedicoFINAER" target="_blank" class="w-full md:w-auto">
          <button type="button"
            class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 w-full md:w-auto"
          >
            Facebook
          </button>
        </a>

        <!-- Botón Instagram -->
        <a href="https://www.instagram.com/centrofinaer" target="_blank" class="w-full md:w-auto">
          <button type="button"
            class="text-white bg-[#ff8214] hover:bg-[#ff6908]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 w-full md:w-auto"
          >
            Instagram
          </button>
        </a>

        <!-- Botón WhatsApp -->
        <a href="https://wa.me/5491122664785" target="_blank" class="w-full md:w-auto">
          <button type="button"
            class="text-white bg-[#25D366] hover:bg-[#59CE72]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 w-full md:w-auto"
          >
            WhatsApp
          </button>
        </a>

        <!-- Botón Línea directa -->
        <a href="tel:+5448628879" target="_blank" class="w-full md:w-auto">
          <button type="button"
            class="text-white bg-[#075e54] hover:bg-[#075E54]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 w-full md:w-auto"
          >
            Línea directa
          </button>
        </a>

        <!-- Botón Turnos Online -->
        <a href="https://aplicacionmedicaweb.com.ar/tol-finaer/_client/turnosonline2.aspx" target="_blank" class="w-full md:w-auto">
          <button type="button"
            class="text-white bg-[#8A88FF] hover:bg-[#918FEB]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 w-full md:w-auto"
          >
            Turnos Online
          </button>
        </a>
      </div>
    </main>
  </div>
  <Footer />
</template>


<script setup>
import { ref, onMounted } from "vue";
import Header from "../layout/header.vue";
import Footer from "../layout/footer.vue";

const btn1 = ref(null);
const btn2 = ref(null);
const btn3 = ref(null);
const btn4 = ref(null);
const btn5 = ref(null);

onMounted(() => {
  const buttons = [btn1.value, btn2.value, btn3.value, btn4.value, btn5.value];

  buttons.forEach((btn, index) => {
    if (btn) {
      // Inicial posición a la izquierda y opacidad 0
      btn.style.transform = "translateX(-50px)";
      btn.style.transition = "all 0.5s ease-out";
    }
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        buttons.forEach((btn, index) => {
          setTimeout(() => {
            btn.style.opacity = "1";
            btn.style.transform = "translateX(0)";
          }, index * 200); // animación escalonada: 200ms de diferencia
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  // Observamos el contenedor de botones
  const container = document.querySelector(".flex.flex-col.md\\:flex-row");
  if (container) observer.observe(container);
});
</script>

<style>
/* Fuerza que en mobile se vean en columna */
@media (max-width: 768px) {
  .flex.flex-col.md\:flex-row > a {
    width: 100%;
  }
}
</style>
