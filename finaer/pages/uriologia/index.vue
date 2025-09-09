<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-16 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Texto -->
        <div class="order-2 lg:order-1">
          <h1 class="text-4xl md:text-5xl text-center lg:text-start font-bold w-full mb-4">
            <span class="text-[#8A88FF]">Urología</span>
          </h1>

          <!-- Caja destacada -->
          <div class="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-[#8A88FF] space-y-4 mt-6">
            <p class="text-lg text-gray-700 text-justify">
              En Centro Médico Finaer se brinda atención médica especializada en enfermedades y trastornos relacionados con los órganos reproductivos masculinos y las vías urinarias. Nuestro objetivo es que los pacientes reciban una evaluación exhaustiva y un tratamiento personalizado basado en sus necesidades individuales.
            </p>
            <p class="text-lg text-gray-700 text-justify">
              Contamos con tecnología avanzada y equipos de imágenes para ayudar a nuestros médicos a hacer un diagnóstico preciso y brindar un tratamiento efectivo. Además, contamos con un equipo de alto expertise y excelencia médica para realizar procedimientos quirúrgicos y tratar afecciones graves, restaurando la función y la calidad de vida a largo plazo.
            </p>
          </div>
        </div>

        <!-- Imagen -->
        <div class="order-1 lg:order-2 flex justify-center">
          <img
            id="uro"
            class="rounded-lg shadow-xl"
            src="../../assets/images/urologia.jpg"
            alt="Imagen de Urología"
          />
        </div>
      </div>

      <!-- Llamada a la acción -->
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

<style>
#uro {
  height: 400px;
  object-fit: cover;
  width: 100%;
  max-width: 600px;
}

.list-check li {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238A88FF'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/%3E%3C/svg%3E")
    no-repeat left center;
  background-size: 20px;
  padding-left: 30px;
  margin-bottom: 12px;
  list-style: none;
}
</style>
