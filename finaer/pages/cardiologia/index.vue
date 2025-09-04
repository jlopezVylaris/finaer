<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h1
            class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"
          >
            <span class="text-[#6568E6]">Cardiología </span>
          </h1>
          <p class="mt-5 mb-5">
            Nuestro objetivo es evitar la aparición de enfermedades
            cardiovasculares. Mediante la evaluación de cada paciente en forma
            cálida y personalizada realizamos el adecuado control de los
            factores de riesgo y en aquellos que ya han sufrido eventos
            cardiovasculares indicamos medidas para impedir su progresión. Podes
            sacar turno con nosotros a través de nuestra pagina web o a través
            de nuestros teléfonos de contacto.
          </p>
          <ul
            class="text-start list-inside list-image-[url(../../assets/images/check_2.png)]"
          >
            <li>CONSULTA DE CARDIOLOGÍA</li>
            <li>ECODOPPLER CARDIACO</li>
            <!--<li>DOPPLER OBSTÉTRICO</li>            
            <li>ECOCARDIOGRAMA TRANSESOFÁGICO</li>
            <li>ECOSTRESS (REPOSO/EJERCICIO)</li>
            <li>ECOSTRESS FARMACOLÓGICO</li>
            <li>ELECTROCARDIOGRAMA (CON/SIN PRUEBA DE ESFUERZO)</li>
            <li>ERGOMETRIA (12 DERIVACIONES)</li>
            <li>HOLTER (3 CANALES)</li>
            <li>PRESUROMETRÍA</li>-->
          </ul>
        </div>
        <div>
          <img
            id="cardio"
            class="rounded-lg"
            src="../../assets/images/cardiología.png"
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

<style>
#cardio {
  height: 450px;
  object-fit: cover;
}
</style>
