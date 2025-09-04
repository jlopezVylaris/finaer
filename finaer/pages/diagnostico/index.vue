<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <h1 class="text-5xl mb-5 text-center font-bold w-full lg:w-[100%]">
        <span class="text-[#6568E6]">Diagnostico por imágenes </span>
      </h1>
      <p class="text-center pl-5 pr-5 mb-8">
        Contamos con un centro médico de fácil acceso, con modernas y cómodas
        instalaciones, y equipamiento de última generación, lo que permite la
        realización de los siguientes exámenes, en un sólo lugar:
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 m-8">
        <div>
          <ul
            class="text-start list-inside list-image-[url(../../assets/images/check_2.png)]"
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
        <div>
          <img
            class="w-full aspect-video rounded-lg"
            src="../../assets/images/diagnostico.jpg"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 m-8">
        <div>
          <img
            class="w-full aspect-video rounded-lg"
            src="../../assets/images/diagnosticoima.jpg"
          />
        </div>
        <div>
          <ul
            class="text-start list-inside list-image-[url(../../assets/images/check_2.png)]"
          >
            <li>Eco Doppler ginecológico</li>
            <li>Eco Doppler peneano</li>
            <li>Eco Doppler testicular</li>
            <li>Eco Doppler renal</li>
            <li>Eco Doppler de tiroides</li>
            <li>Eco Doppler aorta y sus ramas</li>
            <li>Eco Doppler para control de fistulas arteriovenosa</li>
            <li>
              Eco Doppler de miembros superiores e inferiores arterial y
              venenoso
            </li>
            <li>Eco Doppler vasos de cuello</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script setup>
import Header from "../layout/header.vue";
import Banner from "../layout/banner.vue";
import Footer from "../layout/footer.vue";
import Content from "../layout/content.vue";
</script>

<style></style>
