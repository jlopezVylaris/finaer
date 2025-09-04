<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1
            class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"
          >
            <span class="text-[#6568E6]">Diabetología</span>
          </h1>

          <h3 class="text-2xl sm:text-start w-full lg:w-[90%]">
            <span class="text-[#000]">Consulta diabetologica</span>
          </h3>

          <p class="mt-5 mb-5">
            En Centro médico Finaer Focalizamos la atención en un ámbito de contención, donde el paciente encuentre no sólo el adecuado control que necesita, sino la información y la educación que son indispensables para tener una buena calidad de vida.
          </p>
          <p class="mt-5 mb-5">
            La Federación internacional de diabetes establece que esta patología es una de las mayores emergencias sanitarias mundiales del siglo XXI. Existen actualmente 537 millones de personas, en el mundo, con diagnostico de diabetes. En argentina, la cuarta encuesta nacional de factores de riesgo estableció una prevalencia en adultos de un 12.7%.
          </p>
        </div>
        <div>
          <img
            class="w-full aspect-video rounded-lg"
            src="../../assets/images/diabetologia.jpg"
          />
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
