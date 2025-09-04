<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h1
            class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"
          >
            <span class="text-[#6568E6]">Hemodiálisis</span>
          </h1>
          <p class="mt-5 mb-5">
            SE REALIZARON MAS DE 105.600 tratamientos de Hemodiálisis Cronica. Atendiendo a más de 40.000 pacientes en consultorios externos de nefrología, urología, cardiología, nutrición y Diabetología.
          </p>
          <p class="mt-5 mb-5">
            <strong>Bioseguridad:</strong>Aplicamos protocolos realizados en investigaciones científicas y trabajos docentes con el objetivo de contribuir a la prevención de riesgos o infecciones derivadas de la exposición a agentes potencialmente infecciosos o de riesgo biológico, químico y/o físicos. Contamos con equipos de última generación. Todos los equipos utilizados poseen tecnología digital y microprocesadores computarizados con pantalla táctil, ultrafiltración controlada y los últimos avances tecnológicos. A lo largo de estos años hemos realizado mas de 105.600 tratamientos de hemodiálisis cronica, acompañando a pacientes y familiares en este proceso.
          </p>
          <p class="mt-5 mb-5 ">
            <strong>Psicología:</strong> Apoyo psicológico con el fin de mejorar la calidad de vida del paciente, conforme atraviesa las distintas etapas del tratamiento. Diálisis peritoneal: En centro Médico Finaer contamos con la opción de realizar diálisis peritoneal, con controles mensuales en consultorios externos y análisis clínicos. A lo largo de estos años hemos acompañado a más de 100 pacientes en el tratamiento de diálisis peritoneal y a sus familiares.
          </p>
        </div>
        <div>
          <img
            id="hemo"
            class="rounded-lg"
            src="../../assets/images/hemodialisis.jpg"
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
#hemo {
  height: 450px;
  object-fit: cover;
}
</style>
