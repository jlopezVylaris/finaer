<template>
  <div>
    <section class="bg-white">
      <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">

        <!-- Título animado -->
        <h1 
          ref="titleRef"
          :class="[
            'text-6xl text-[#8A88FF] text-center font-bold mb-5 transition-all duration-1000 ease-out opacity-0 translate-y-10',
            titleVisible ? 'opacity-100 translate-y-0' : ''
          ]"
        >
          Trabajamos con las siguientes<br />
          obras sociales
        </h1>

        <!-- Primera fila de logos -->
        <div class="grid grid-cols-1 gap-8 mt-12 text-gray-500 sm:gap-12 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 dark:text-gray-400">
          <div ref="logo1" class="flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 0ms">
            <img src="../../assets/images/marcas/accordyunion1.jpg" alt="ACCORD Y UNION Logo" class="h-15" />
          </div>
          <div ref="logo2" class="flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 150ms">
            <img src="../../assets/images/marcas/OSMITA1.jpg" alt="OSMITA Logo" class="h-15" />
          </div>
          <div ref="logo3" class="flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 300ms">
            <img src="../../assets/images/marcas/premedic.png" alt="PREMEDIC Logo" class="h-15" />
          </div>
          <div ref="logo4" class="flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 450ms">
            <img src="../../assets/images/marcas/pueyrredon1.jpeg" alt="PUEYRREDON Logo" class="h-15" />
          </div>
          <div ref="logo5" class="flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 600ms">
            <img src="../../assets/images/marcas/issys1.jpeg" alt="ISSYS Logo" class="h-15" />
          </div>
        </div>

        <!-- Segunda fila de logos -->
        <div class="grid grid-cols-1 gap-8 mt-12 text-gray-500 sm:gap-12 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 dark:text-gray-400">
          <div ref="logo6" class="flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 0ms">
            <img src="../../assets/images/marcas/mgn1.jpeg" alt="MGN Logo" class="h-13" />
          </div>
          <div ref="logo7" class="flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 150ms">
            <img src="../../assets/images/marcas/elevar1.jpg" alt="ELEVAR Logo" class="h-13" />
          </div>
          <div ref="logo8" class="flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 300ms">
            <img src="../../assets/images/marcas/visitar1.jpeg" alt="VISITAR Logo" class="h-13" />
          </div>
          <div ref="logo9" class="flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700" style="transition-delay: 450ms">
            <img src="../../assets/images/marcas/ospetelco.png" alt="OSPETELCO Logo" class="h-13" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const titleRef = ref(null)
const titleVisible = ref(false)

// Refs para cada logo
const logo1 = ref(null)
const logo2 = ref(null)
const logo3 = ref(null)
const logo4 = ref(null)
const logo5 = ref(null)
const logo6 = ref(null)
const logo7 = ref(null)
const logo8 = ref(null)
const logo9 = ref(null)

onMounted(() => {
  // Animación del título
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        titleVisible.value = true
        titleObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })
  if(titleRef.value) titleObserver.observe(titleRef.value)

  // Animación de logos
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]
  logos.forEach(logo => {
    if(logo.value){
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('opacity-100','translate-y-0')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.3 })
      observer.observe(logo.value)
    }
  })
})
</script>
