<template> 
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-0 pt-28">

    <Header/>

    <main class="mt-5 h-auto lg:h-[400px] overflow-hidden">
      <section class="flex flex-wrap text-[rgba(37,73,105,255)]">

        <div class="w-full flex flex-col gap-y-10 lg:flex-row items-center justify-between">

          <!-- BLOQUE TEXTO + BOTÓN -->
          <header 
            class="w-full flex flex-col gap-4 text-center self-center lg:self-start mt-20 
                  opacity-0 translate-y-10 animate-fade-up delay-700"
          >
            <h1 class="text-6xl text-center  font-bold w-full lg:w-[90%]"> 
              <span class="text-[#8A88FF]">
                Centro Médico Finaer
              </span>
            </h1>

            <p class="text-[#2C2F4C] text-base text-center ">
              Es un centro médico Fundado en 2016, ubicado en el barrio de Almagro y especializado en nefrología y diálisis, con 705 m2 distribuido en 3 plantas, equipado con los más altos estándares de calidad y servicio para el paciente.
            </p>
            
            <a href="/contacto" 
              class="text-[#fff] mb-6 bg-[#8A88FF] hover:bg-[#918FEB]/90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg shadow-md py-2 w-52 text-center  self-center">
              Realiza tu consulta
            </a>
          </header>
        </div>
      </section>
    </main>
  </div>
            <!-- Carousel debajo del botón -->
            <div id="default-carousel" 
                class="relative w-full max-w-4xl mx-auto"
                data-carousel="slide">

              <!-- Carousel wrapper -->
              <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="../assets/images/centroFinaer1.jpeg" 
                      class="absolute block w-full h-full object-cover" 
                      alt="Imagen 1">
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="../assets/images/centroFinaer2.jpeg" 
                      class="absolute block w-full h-full object-cover" 
                      alt="Imagen 2">
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="../assets/images/centroFinaer3.jpeg" 
                      class="absolute block w-full h-full object-cover" 
                      alt="Imagen 3">
                </div>
                <!-- Item 4 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="../assets/images/centroFinaer4.jpeg" 
                      class="absolute block w-full h-full object-cover" 
                      alt="Imagen 3">
                </div>
              </div>

              <!-- Slider indicators -->
              <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                <button type="button" class="w-3 h-3 rounded-full" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-full" data-carousel-slide-to="3"></button>
              </div>

              <!-- Slider controls -->
              <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 group" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                  <svg class="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>
                </span>
              </button>
              <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 group" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                  <svg class="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg>
                </span>
              </button>
            </div>


  <main class="">
    <section class="flex flex-col items-center justify-center py-20 gap-10 bg-[#ecf6ff]">
      <div class="max-w-[90%] lg:max-w-[70%] text-center flex flex-col items-center justify-center">
      
    <!-- SECCIÓN “Conoce más sobre nosotros” -->
        <div
          ref="aboutSection" 
          class=" flex flex-col items-center px-6 text-center mt-5"
        >
          <div 
            :class="[
              'transition-all duration-1000 ease-out',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
          >
            <h1 class="text-6xl text-[#8A88FF] font-bold">
              Conoce más sobre nosotros...
            </h1>
            <div class="mt-8 max-w-[85%] lg:max-w-[60%] mx-auto">
              <p class="text-lg text-gray-700">
                Desde médicos especialistas hasta enfermeras, terapeutas y
                administradores, cada miembro de nuestro equipo desempeña un papel
                fundamental en la entrega de servicios de salud de alta calidad.
              </p>
            </div>
          </div>
        </div>

        <article class="mt-12">
          <div class="px-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <!-- Card 1 -->
            <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 class="text-3xl font-bold text-gray-800" ref="num1">0</h3>
              <p class="text-sm uppercase tracking-wide text-gray-500 mt-2">
                Tratamientos de diálisis realizados
              </p>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 class="text-3xl font-bold text-gray-800" ref="num2">0</h3>
              <p class="text-sm uppercase tracking-wide text-gray-500 mt-2">
                Años de Experiencia
              </p>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 class="text-3xl font-bold text-gray-800" ref="num3">0</h3>
              <p class="text-sm uppercase tracking-wide text-gray-500 mt-2">
                Consultas en tratamientos
              </p>
            </div>

          </div>
        </article>

        <article class="mt-16">
          <a
            href="/nosotros/"
            class="px-9 py-3 text-[#fff] bg-[#8A88FF] hover:bg-[#918FEB]/90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg shadow-md py-2 w-52 text-center sm:self-start self-center"
          >
            Conoce más
          </a>
        </article>
      </div>

      <article class="bg-white shadow-lg w-[90%] h-auto md:h-[250px] flex flex-col rounded-3xl items-center justify-center p-4">
        <div class="w-44">
          <img src="../assets/images/line.webp" alt="" class="w-full" />
        </div>
        <p class="text-center mt-5">
          En Finaer, ofrecemos una amplia gama de servicios médicos
          especializados, incluyendo consulta médica general, atención
          urologica, nefrologíca, cardiologíca, diabetologica, nutricionista y diagnostico de imagenes. Asi tambien como la hemodialisis.
          Nuestro objetivo es proporcionar atención integral y personalizada
          para satisfacer las necesidades de salud de toda la familia.
        </p>
      </article>
    </section>
  </main>

  <Obras />

  <Footer />
</template>

<script setup>
import Header from "./layout/header.vue";
import Banner from "./layout/banner.vue";
import Footer from "./layout/footer.vue";
import Content from "./layout/content.vue";
import Obras from "./obras";

import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const aboutSection = ref(null);

// Refs para los números de las cards
const num1 = ref(null);
const num2 = ref(null);
const num3 = ref(null);

// Animación rápida de números con efecto de "subida de 10 unidades"
const animateNumberQuick = (el, end) => {
  let start = end - 10; // inicio 10 números por debajo
  const duration = 500; // 0.5 segundos
  const stepTime = duration / 10; // 10 pasos
  const timer = setInterval(() => {
    start += 1;
    el.innerText = start.toLocaleString();
    if (start >= end) clearInterval(timer);
  }, stepTime);
};

onMounted(() => {
  // Animación de aparición de la sección "about"
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (aboutSection.value) observer.observe(aboutSection.value);

  onUnmounted(() => {
    if (aboutSection.value) observer.unobserve(aboutSection.value);
  });

  // Inicializamos las transformaciones para animaciones de cards
  if (num1.value) {
    num1.value.parentElement.style.transform = "translateX(-50px)";
    num1.value.parentElement.style.opacity = "0";
    num1.value.parentElement.style.transition = "all 0.6s ease-out";
  }
  if (num2.value) {
    num2.value.parentElement.style.opacity = "0";
    num2.value.parentElement.style.transition = "opacity 0.6s ease-out";
  }
  if (num3.value) {
    num3.value.parentElement.style.transform = "translateX(50px)";
    num3.value.parentElement.style.opacity = "0";
    num3.value.parentElement.style.transition = "all 0.6s ease-out";
  }

  // Animación de números y entrada de cards
  const cards = [num1.value, num2.value, num3.value];
  const targets = [105600, 8, 19500];

  const cardContainer = document.querySelector('.px-7.grid');
  const cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animación de entrada de cada card
          if (num1.value) {
            num1.value.parentElement.style.transform = "translateX(0)";
            num1.value.parentElement.style.opacity = "1";
          }
          if (num2.value) {
            num2.value.parentElement.style.opacity = "1";
          }
          if (num3.value) {
            num3.value.parentElement.style.transform = "translateX(0)";
            num3.value.parentElement.style.opacity = "1";
          }

          // Animación de números
          cards.forEach((card, i) => {
            animateNumberQuick(card, targets[i]);
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (cardContainer) cardObserver.observe(cardContainer);
});
</script>



<style>
.bg-img {
  position: relative;
  width: 100%;
  z-index: 10;
  background: url(../assets/images/centro.jpg);
}
.bg-img::before {
  content: "";
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(37, 73, 105, 0.75);
  z-index: -1;
}

/* Animación fade + slide up */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 1s ease forwards;
}

.delay-700 {
  animation-delay: 0.7s; /* espera a que termine el logo */
}
</style>
