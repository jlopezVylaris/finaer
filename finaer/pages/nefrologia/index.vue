<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 mb-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h1
            class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"
          >
            <span class="text-[#6568E6]">Nefrología</span>
          </h1>
          <p class="mt-5 mb-5">
            Nefrología para adultos: diagnóstico, tratamiento y supervisión del
            manejo de trastornos renales y de las vías urinarias. El consultorio
            externo de Nefrología Clínica de Centro médico FINAER se dedica en
            especial a la atención del daño renal causado por la hipertensión
            arterial, la diabetes mellitus y las enfermedades cardiovasculares,
            así como por otras causas (poliquistosis renal, glomerulonefritis,
            hipotrofias renales congénitas). Atendiendo a lo largo de estos años
            a mas de 19.500 pacientes en consultorios externos.
          </p>
          <ul
            class="text-start list-inside list-image-[url(../../assets/images/check_2.png)]"
          >
            <li>SERVICIOS</li>
            <li>TRATAMIENTOS</li>
            <li>CUIDADOS</li>
            <li>ACOMPAÑAMIENTO</li>
          </ul>
        </div>
        <div>
          <img
            class="w-full aspect-video rounded-lg"
            src="../../assets/images/nefrologia.jpg"
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
