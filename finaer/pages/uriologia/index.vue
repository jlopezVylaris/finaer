<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h1
            class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"
          >
            <span class="text-[#6568E6]">Urología </span>
          </h1>

          <h3 class="text-2xl text-center sm:text-start w-full lg:w-[90%]">
            <span class="text-[#000]">Consulta urológica para adultos</span>
          </h3>

          <p class="mt-5 mb-5">
            En Centro Médico Finaer se brinda atención médica especializada en
            enfermedades y trastornos relacionados con los órganos reproductivos
            masculinos y las vías urinarias. Tenemos por objetivo que los
            pacientes reciban una evaluación exhaustiva y un tratamiento
            personalizado basado en sus necesidades individuales. Contamos con
            tecnología avanzada, y equipos de imágenes, para ayudar a nuestros
            médicos a hacer un diagnóstico preciso y brindar un tratamiento
            efectivo. Además, contamos con un equipo de alto expertise y
            excelencia médica para realizar procedimientos quirúrgicos y tratar
            afecciones graves con éxito, ayudando a restaurar la función y la
            calidad de vida a largo plazo.
          </p>
        </div>
        <div>
          <img
            class="w-full aspect-video rounded-lg"
            src="../../assets/images/urologia.jpg"
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
