<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-16 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Texto -->
        <div ref="textRef" :class="['order-2 lg:order-1 transition-all duration-1000 ease-out opacity-0 translate-y-10']">
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
        <div ref="imageRef" :class="['order-1 lg:order-2 flex justify-center transition-all duration-1000 ease-out opacity-0 translate-y-10']">
          <img
            id="uro"
            class="rounded-lg shadow-xl"
            src="../../assets/images/urologia.jpg"
            alt="Imagen de Urología"
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
#uro {
  height: 400px;
  object-fit: cover;
  width: 100%;
  max-width: 600px;
}
</style>
