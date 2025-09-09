<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-16 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Texto -->
        <div class="order-2 lg:order-1">
          <h1 class="text-4xl md:text-5xl text-center lg:text-start font-bold w-full">
            <span class="text-[#8A88FF]">Hemodiálisis</span>
          </h1>

          <p class="mt-5 mb-5 text-lg text-justify">
            SE REALIZARON MÁS DE 105.600 tratamientos de Hemodiálisis Crónica, atendiendo a más de 40.000 pacientes en consultorios externos de nefrología, urología, cardiología, nutrición y diabetología.
          </p>

          <p class="mt-5 mb-5 text-lg text-justify">
            <strong>Bioseguridad:</strong> Aplicamos protocolos basados en investigaciones científicas y trabajos docentes, con el objetivo de prevenir riesgos e infecciones derivadas de la exposición a agentes potencialmente infecciosos o de riesgo biológico, químico y físico. Contamos con equipos de última generación con tecnología digital y microprocesadores computarizados, ultrafiltración controlada y pantalla táctil.
          </p>

          <p class="mt-5 mb-5 text-lg text-justify">
            <strong>Psicología:</strong> Apoyo psicológico para mejorar la calidad de vida del paciente durante las distintas etapas del tratamiento. <strong>Diálisis peritoneal:</strong> contamos con la opción de realizarla, con controles mensuales en consultorios externos y análisis clínicos. Hemos acompañado a más de 100 pacientes en este tratamiento y a sus familiares.
          </p>

          <!-- Caja destacada -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 class="text-2xl font-semibold text-[#8A88FF] mb-4">Nuestros Servicios</h2>
            <ul class="text-lg list-check space-y-3">
              <li>Tratamientos de Hemodiálisis Crónica</li>
              <li>Diálisis Peritoneal</li>
              <li>Apoyo Psicológico</li>
              <li>Control de Bioseguridad</li>
            </ul>
          </div>
        </div>

        <!-- Imagen -->
        <div class="order-1 lg:order-2 flex justify-center">
          <img
            id="hemo"
            class="rounded-lg shadow-xl"
            src="../../assets/images/hemodialisis.jpg"
            alt="Imagen de Hemodiálisis"
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
#hemo {
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
