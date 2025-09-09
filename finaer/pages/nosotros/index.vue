<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-16 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Texto -->
        <div class="order-2 lg:order-1">
          <h1 class="text-4xl md:text-5xl text-center lg:text-start font-bold mb-6">
            <span class="text-[#8A88FF]">Sobre Nosotros</span>
          </h1>

          <!-- Caja destacada -->
          <div class="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-[#8A88FF] space-y-4">
            <p class="text-lg text-gray-700 text-justify">
              La enfermedad renal constituye un creciente problema de salud en todo el mundo y está asociada a efectos adversos, mayor riesgo de mortalidad y morbilidad cardiovascular. Nuestro centro médico brinda atención integral: estudios, consultas con nefrólogos, cardiólogos, urólogos, nutricionistas, psicólogos y tratamientos personalizados.
            </p>
            <p class="text-lg text-gray-700 text-justify">
              Contamos con tecnología de última generación en diagnóstico, tratamientos especiales y un equipo médico altamente capacitado, comprometido con la excelencia, la innovación tecnológica y la calidez en la atención.
            </p>
          </div>
        </div>

        <!-- Imagen -->
        <div class="order-1 lg:order-2 flex justify-center mt-6 lg:mt-0">
          <img
            id="finaer"
            class="rounded-lg shadow-xl"
            src="../../assets/images/finaer.jpg"
            alt="Centro Médico Finaer"
          />
        </div>
      </div>

      <!-- Estadísticas destacadas -->
      <article class="mt-12">
        <div class="px-4 md:px-0 flex flex-wrap justify-center items-center text-center gap-6 mt-12">
          <article class="p-6 bg-white rounded-xl shadow-md w-64">
            <h3 class="text-4xl font-bold text-[#8A88FF]">105.600+</h3>
            <p class="text-sm mt-2 text-gray-600">
              Tratamientos de diálisis
            </p>
          </article>

          <article class="p-6 bg-white rounded-xl shadow-md w-64">
            <h3 class="text-4xl font-bold text-[#8A88FF]">8+</h3>
            <p class="text-sm mt-2 text-gray-600">
              Años de experiencia
            </p>
          </article>

          <article class="p-6 bg-white rounded-xl shadow-md w-64">
            <h3 class="text-4xl font-bold text-[#8A88FF]">19.500+</h3>
            <p class="text-sm mt-2 text-gray-600">
              Consultas en tratamientos
            </p>
          </article>
        </div>
      </article>
    </main>
  </div>
  <Footer />
</template>

<script setup>
import Header from "../layout/header.vue";
import Footer from "../layout/footer.vue";
</script>

<style>
#finaer {
  height: 500px;
  object-fit: cover;
}
</style>
