<template> 
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-0 pt-28">

    <Header/>
    
    <main class="mt-10 h-auto lg:h-[600px] overflow-hidden">
      
      <section class="flex flex-wrap text-[rgba(37,73,105,255)]">

        <div class="w-full flex flex-col gap-y-10 lg:flex-row items-center justify-between">

          <header class="w-full lg:w-[50%] flex flex-col gap-4 self-center lg:self-start mt-20">
                       
            <h1 class="text-6xl text-center sm:text-start font-bold w-full lg:w-[90%]"> 
              <span class="text-[#8A88FF]">
                Centro Médico Finaer
              </span>
            </h1>
            <p class="text-[#2C2F4C] text-base text-center sm:text-start">
              Es un centro médico Fundado en 2016, ubicado en el barrio de Almagro y especializado en nefrología y diálisis, con 705 m2 distribuido en 3 plantas, equipado con los más altos estándares de calidad y servicio para el paciente.
            </p>
            
            <a href="/contacto" class="text-[#8A88FF] bg-white hover:bg-[#8A88FF] hover:text-[#fff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg shadow-md py-2 w-52 text-center sm:self-start self-center">
              Realiza tu consulta
            </a>

          </header>

          <!-- Bloque de carrousel adaptado -->
          <div class="w-full md:w-[60%] lg:w-[40%] bg-white flex items-center justify-center rounded-2xl overflow-hidden aspect-[4/3]">
            <!-- Contenedor del carrusel -->
            <div 
              ref="carousel" 
              class="w-full h-full flex transition-transform duration-700 ease-in-out"
            >
              <!-- Cada slide ocupa 100% del contenedor -->
              <div class="w-full flex-shrink-0 h-full">
                <img src="../assets/images/centroFinaer1.jpeg" class="w-full h-full object-cover" alt="">
              </div>
              <div class="w-full flex-shrink-0 h-full">
                <img src="../assets/images/centroFinaer2.jpeg" class="w-full h-full object-cover" alt="">
              </div>
              <div class="w-full flex-shrink-0 h-full">
                <img src="../assets/images/centroFinaer3.jpeg" class="w-full h-full object-cover" alt="">
              </div>
              <div class="w-full flex-shrink-0 h-full">
                <img src="../assets/images/centroFinaer4.jpeg" class="w-full h-full object-cover" alt="">
              </div>
            </div>
          </div>


        </div>

      </section>

    </main>
    
  </div>

  <main class="">
    <section class="flex flex-col items-center justify-center py-20 gap-10 bg-[#ecf6ff]">
      <div class="max-w-[90%] lg:max-w-[70%] text-center flex flex-col items-center justify-center">
      
        <h1 class="text-6xl text-[#8A88FF] font-bold">
          Conoce más sobre nosotros...
        </h1>
        <div class="mt-8 max-w-[85%] lg:max-w-[60%]">
          <p>
            Desde médicos especialistas hasta enfermeras, terapeutas y
            administradores, cada miembro de nuestro equipo desempeña un papel
            fundamental en la entrega de servicios de salud de alta calidad.
          </p>
        </div>

        <article class="mt-12">
          <div class="px-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Card 1 -->
            <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 class="text-3xl font-bold text-gray-800">105.600+</h3>
              <p class="text-sm uppercase tracking-wide text-gray-500 mt-2">
                Tratamientos de diálisis realizados
              </p>
            </div>
            
            <!-- Card 2 -->
            <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 class="text-3xl font-bold text-gray-800">8+</h3>
              <p class="text-sm uppercase tracking-wide text-gray-500 mt-2">
                Años de Experiencia
              </p>
            </div>
            
            <!-- Card 3 -->
            <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 class="text-3xl font-bold text-gray-800">19.500+</h3>
              <p class="text-sm uppercase tracking-wide text-gray-500 mt-2">
                Consultas en tratamientos
              </p>
            </div>

          </div>
        </article>

        <article class="mt-16">
          <a
            href="/nosotros/"
            class="px-9 py-3 text-[#8A88FF] bg-white hover:bg-[#8A88FF] hover:text-[#fff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg shadow-md py-2 w-52 text-center sm:self-start self-center"
          >
            Conoce más...
          </a>
        </article>
      </div>

      <article class="bg-white shadow-lg w-[90%] h-auto md:h-[250px] flex flex-col items-center justify-center p-4">
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

    <section class="bg-img mb-20 flex flex-col gap-4 items-center justify-center text-white h-auto py-8 md:h-[380px]">
      <div class="w-[90%] md:w-[50%]">
        <header></header>
      </div>
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


import { ref, onMounted } from 'vue';

const carousel = ref(null);
let index = 0;

onMounted(() => {
  const slides = carousel.value.children.length;

  setInterval(() => {
    index = (index + 1) % slides;
    carousel.value.style.transform = `translateX(-${index * 100}%)`;
  }, 3000); // Cambia cada 3 segundos
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
</style>
