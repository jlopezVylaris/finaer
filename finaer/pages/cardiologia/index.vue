<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-16 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Texto -->
        <div class="order-2 lg:order-1">
          <h1 class="text-4xl md:text-5xl text-center lg:text-start font-bold w-full">
            <span class="text-[#8A88FF]">Cardiología</span>
          </h1>

          <p class="mt-5 mb-5 text-lg text-justify">
            Nuestro objetivo es evitar la aparición de enfermedades
            cardiovasculares. Mediante la evaluación de cada paciente en forma
            cálida y personalizada realizamos el adecuado control de los
            factores de riesgo y en aquellos que ya han sufrido eventos
            cardiovasculares indicamos medidas para impedir su progresión.
          </p>

          <p class="mt-5 mb-5 text-lg text-justify">
            Podés sacar turno con nosotros a través de nuestra página web o a
            través de nuestros teléfonos de contacto.
          </p>

          <!-- Caja destacada -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 class="text-2xl font-semibold text-[#8A88FF] mb-4">Nuestros Estudios</h2>
            <ul class="text-lg list-check space-y-3">
              <li>Consulta de Cardiología</li>
              <li>Ecodoppler Cardíaco</li>
              <!-- Si luego querés, descomento los que estaban -->
              <!--
              <li>Doppler Obstétrico</li>
              <li>Ecocardiograma Transesofágico</li>
              <li>Ecostress (Reposo/Ejercicio)</li>
              <li>Ecostress Farmacológico</li>
              <li>Electrocardiograma (Con/Sin Prueba de Esfuerzo)</li>
              <li>Ergometría (12 Derivaciones)</li>
              <li>Holter (3 Canales)</li>
              <li>Presurometría</li>
              -->
            </ul>
          </div>
        </div>

        <!-- Imagen -->
        <div class="order-1 lg:order-2 flex justify-center">
          <img
            id="cardio"
            class="rounded-lg shadow-xl"
            src="../../assets/images/cardiología.png"
            alt="Imagen de Cardiología"
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
#cardio {
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
