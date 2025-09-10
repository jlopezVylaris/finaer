<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-16 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Texto -->
        <div ref="textRef" :class="['order-2 lg:order-1 transition-all duration-1000 ease-out opacity-0 translate-y-10']">
          <h1 class="text-4xl md:text-5xl text-center lg:text-start font-bold w-full mb-4">
            <span class="text-[#8A88FF]">Nutrición</span>
          </h1>

          <p class="mt-5 mb-5 text-lg text-justify">
            En Centro Médico Finaer, nuestros expertos en nutrición se comprometen a diseñar planes alimenticios adaptados a tus necesidades individuales, teniendo en cuenta tus preferencias, objetivos de salud, condiciones médicas y estilo de vida.
          </p>

          <!-- Caja destacada -->
          <div class="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-[#8A88FF] space-y-4 mt-6">
            <p class="text-lg text-gray-700 text-justify">
              Ofrecemos una amplia gama de servicios de nutrición, incluyendo evaluación nutricional integral, planificación de dietas personalizadas, educación nutricional, asesoramiento nutricional y seguimiento continuo para alcanzar tus metas de salud.
            </p>
            <ul class="text-lg list-check space-y-3">
              <li>Diabetes</li>
              <li>Vegetarianismo</li>
              <li>Hipertensión</li>
              <li>Obesidad y sobrepeso</li>
              <li>Patologías digestivas y renales</li>
              <li>Cambio de hábitos alimentarios</li>
              <li>Estilo de vida saludable y deporte</li>
            </ul>
          </div>
        </div>

        <!-- Imagen -->
        <div ref="imageRef" :class="['order-1 lg:order-2 flex justify-center transition-all duration-1000 ease-out opacity-0 translate-y-10']">
          <img
            id="nutri"
            class="rounded-lg shadow-xl"
            src="../../assets/images/nutric.jpg"
            alt="Imagen de Nutrición"
          />
        </div>
      </div>

      <!-- Llamada a la acción -->
      <div ref="ctaRef" :class="['mt-12 text-center transition-all duration-700 ease-out opacity-0 translate-y-10']">
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
import { ref, onMounted } from "vue";

const textRef = ref(null)
const imageRef = ref(null)
const ctaRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('opacity-100','translate-y-0')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })

  if(textRef.value) observer.observe(textRef.value)
  if(imageRef.value) observer.observe(imageRef.value)
  if(ctaRef.value) observer.observe(ctaRef.value)
})
</script>

<style>
#nutri {
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
