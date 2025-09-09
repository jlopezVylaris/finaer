<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <!-- Título principal -->
      <h1
        class="text-4xl sm:text-5xl mb-5 text-center font-extrabold tracking-tight"
      >
        <span class="text-[#8A88FF]">Diagnóstico por Imágenes</span>
      </h1>
      <p
        class="text-center px-4 sm:px-10 lg:px-32 text-gray-700 text-lg leading-relaxed mb-12"
      >
        Contamos con un centro médico de fácil acceso, con modernas y cómodas
        instalaciones, y equipamiento de última generación, lo que permite la
        realización de los siguientes exámenes en un sólo lugar:
      </p>

      <!-- Bloque 1 -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center bg-white rounded-2xl shadow-lg p-6 m-4"
      >
        <!-- Lista -->
        <div>
          <h2
            class="text-2xl font-bold text-[#8A88FF] mb-4 border-l-4 border-[#8A88FF] pl-3"
          >
            Estudios Ecográficos
          </h2>
          <ul
            class="text-start space-y-2 list-inside list-image-[url(../../assets/images/check_2.png)]"
          >
            <li>Ecografía aorta abdominal</li>
            <li>Ecografía completa de abdomen</li>
            <li>Ecografía de vejiga o próstata</li>
            <li>Ecografía mamaria uni o bilateral</li>
            <li>Ecografía tiroidea</li>
            <li>Ecografía renal bilateral</li>
            <li>Ecografía de parótida</li>
            <li>Ecografía toco ginecológica</li>
            <li>Ecografía de partes blandas</li>
            <li>Ecografía de pene</li>
            <li>Ecografía transvaginal</li>
            <li>Ecografía transrectal</li>
          </ul>
        </div>
        <!-- Imagen -->
        <div>
          <img
            class="w-full aspect-video rounded-2xl shadow-md object-cover"
            src="../../assets/images/diagnostico.jpg"
            alt="Diagnóstico por imágenes"
          />
        </div>
      </div>

      <!-- Bloque 2 -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center bg-white rounded-2xl shadow-lg p-6 m-4"
      >
        <!-- Imagen -->
        <div>
          <img
            class="w-full aspect-video rounded-2xl shadow-md object-cover"
            src="../../assets/images/diagnosticoima.jpg"
            alt="Eco Doppler estudios"
          />
        </div>
        <!-- Lista -->
        <div>
          <h2
            class="text-2xl font-bold text-[#8A88FF] mb-4 border-l-4 border-[#8A88FF] pl-3"
          >
            Estudios Doppler
          </h2>
          <ul
            class="text-start space-y-2 list-inside list-image-[url(../../assets/images/check_2.png)]"
          >
            <li>Eco Doppler ginecológico</li>
            <li>Eco Doppler peneano</li>
            <li>Eco Doppler testicular</li>
            <li>Eco Doppler renal</li>
            <li>Eco Doppler de tiroides</li>
            <li>Eco Doppler aorta y sus ramas</li>
            <li>Eco Doppler para control de fístulas arteriovenosas</li>
            <li>
              Eco Doppler de miembros superiores e inferiores arterial y venoso
            </li>
            <li>Eco Doppler vasos de cuello</li>
          </ul>
        </div>
      </div>
      <div class="mt-12 text-center">
        <a
          href="https://aplicacionmedicaweb.com.ar/tol-finaer/_client/turnosonline2.aspx"
          target="_blank"
          class="bg-[#8A88FF] hover:bg-[#7270e0] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
        >
          Solicitar Turno
        </a>
        <p class="mt-4 text-gray-600">
          O contáctenos a través de nuestros teléfonos
        </p>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script setup>
import Header from "../layout/header.vue";
import Footer from "../layout/footer.vue";
</script>
