<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main ref="faqRef" :class="['transition-all duration-1000 ease-out opacity-0 translate-y-10']">
      <div class="columns-1">
        <h1 class="text-5xl text-center font-bold w-full lg:w-[100%] mb-12">
          <span class="text-[#8A88FF]">Preguntas frecuentes</span>
        </h1>

        <div id="accordion-open" data-accordion="open" class="mt-6 mb-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div v-for="(item, index) in faqs" :key="index" 
               class="border-b border-gray-200 hover:shadow-lg transition-shadow duration-300 rounded-t-xl">
            <button 
              @click="toggle(index)" 
              class="flex items-center justify-between w-full p-5 font-medium text-gray-500 hover:bg-gray-100 gap-3 transition-colors duration-300"
            >
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5 shrink-0 text-[#8A88FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                </svg>
                {{ item.question }}
              </span>
              <svg :class="['w-3 h-3 shrink-0 transform transition-transform duration-500', openIndex === index ? 'rotate-180' : 'rotate-0']" fill="none" viewBox="0 0 10 6" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5 5 1 1 5" />
              </svg>
            </button>

            <div v-show="openIndex === index" 
                 class="p-5 text-gray-500 transition-all duration-500 ease-out origin-top scale-y-100">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../layout/header.vue";
import Footer from "../layout/footer.vue";
import { ref, onMounted } from "vue";

const faqs = [
  { question: "¿Dónde está ubicado Centro MEDICO FINAER?", answer: "Centro médico FINAER tiene sede en Palestina 525, Almagro, CABA..." },
  { question: "¿Qué significa la demanda espontanea?", answer: "El nuevo servicio de demanda espontanea de nefrología está destinado a pacientes..." },
  { question: "¿Cómo puedo contactarme con Fundación FINAER?", answer: "Podes contactarte con nosotros vía: WhatsApp 11 3685-0639 o 48628879" },
  { question: "¿Cuáles son los días y horarios de atención?", answer: "Nuestro horario de atención es de lunes a viernes de 8 a 18 horas." },
  { question: "¿Cuáles son nuestras modalidades de atención?", answer: "Atención nefrológica por obra social, particular, demanda espontánea..." },
  { question: "¿Cómo se solicita turno?", answer: "Podes sacar turno por teléfono, WhatsApp o a través de nuestros turnos online" },
  { question: "¿Atienden con obra social?", answer: "En centro médico Finaer atendemos con las siguientes obras sociales:..." },
  { question: "¿Qué especialidades tratamos?", answer: "Ofrecemos atención médica integral a pacientes con problemas renales..." },
];

const openIndex = ref(0);

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

// Animación de fade-in al scrollear
const faqRef = ref(null);
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if(faqRef.value) observer.observe(faqRef.value);
});
</script>

<style>
/* Escalado vertical animado para acordeón */
[v-show] {
  transform-origin: top;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}
[v-show="true"] {
  transform: scaleY(1);
  opacity: 1;
}
[v-show="false"] {
  transform: scaleY(0);
  opacity: 0;
}
</style>
