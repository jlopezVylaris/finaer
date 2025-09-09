<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="columns-1">
        <h1 class="text-5xl text-center font-bold w-full lg:w-[100%]">
          <span class="text-[#8A88FF]">Preguntas frecuentes</span>
        </h1>

        <div
          id="accordion-open"
          data-accordion="open"
          class="mt-20 mb-20 bg-[#fff]"
        >
          <h2 id="accordion-open-heading-1">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-b-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-open-body-1"
              aria-expanded="true"
              aria-controls="accordion-open-body-1"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 me-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                ¿Dónde está ubicado Centro MEDICO FINAER?</span
              >
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-1"
            class="hidden"
            aria-labelledby="accordion-open-heading-1"
          >
            <div
              class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
            >
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Centro médico FINAER tiene sede en Palestina 525, Almagro, CABA.
                Está ubicado a dos cuadras de Av. corrientes, y a 5 cuadras de
                la línea B de subte (estación Medrano).
              </p>
            </div>
          </div>
          <h2 id="accordion-open-heading-2">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-open-body-2"
              aria-expanded="false"
              aria-controls="accordion-open-body-2"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 me-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path></svg
                >¿Qué significa la demanda espontanea?</span
              >
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-2"
            class="hidden"
            aria-labelledby="accordion-open-heading-2"
          >
            <div
              class="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
            >
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                El nuevo servicio de demanda espontanea de nefrología está
                destinado a pacientes de 16 años que no reúnen criterios de
                urgencia pero que necesitan una atención a la brevedad. Podes
                acercarte sin turno previo los días lunes de 08:30 a 11:00, los
                miércoles de 13:00 a 16:00 y los jueves de 08:30 a 11:00 y
                dentro de esa franja horaria podrá ser atendido por un
                especialista en nefrología, y en el caso de que desees tener una
                cita programada tenemos más especialistas con turnos fijos para
                que puedas agendar tu cita.
              </p>
            </div>
          </div>
          <h2 id="accordion-open-heading-3">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-open-body-3"
              aria-expanded="false"
              aria-controls="accordion-open-body-3"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 me-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path></svg
                >¿Cómo puedo contactarme con Fundación FINAER?</span
              >
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-3"
            class="hidden"
            aria-labelledby="accordion-open-heading-3"
          >
            <div
              class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
            >
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Podes contactarte con nosotros vía: Mensaje de WhatsApp 11
                3685-0639 o 48628879
              </p>
            </div>
          </div>

          <h2 id="accordion-open-heading-4">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-open-body-4"
              aria-expanded="false"
              aria-controls="accordion-open-body-4"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 me-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path></svg
                >¿Cuáles son los días y horarios de atención del centro
                médico?</span
              >
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-4"
            class="hidden"
            aria-labelledby="accordion-open-heading-4"
          >
            <div
              class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
            >
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Nuestro horario de atención es de lunes a viernes de 8 a 18
                horas.
              </p>
            </div>
          </div>

          <h2 id="accordion-open-heading-5">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-open-body-5"
              aria-expanded="false"
              aria-controls="accordion-open-body-5"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 me-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path></svg
                >¿Cuáles son nuestras modalidades de atención?</span
              >
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-5"
            class="hidden"
            aria-labelledby="accordion-open-heading-5"
          >
            <div
              class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
            >
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Atención nefrológica por obra social con turno Atención
                nefrológica particular Atención nefrológica con turno Atención
                nefrológica con demanda espontanea. Laboratorio de análisis
                clínicos sin turno de lunes a viernes de 8 a 10 (recomendamos
                enviar la orden por WhatsApp para un mayor asesoramiento de las
                preparaciones) Atención nutricional con turno. Atención
                urológica Con turno. Atención cardiológica con turno.
              </p>
            </div>
          </div>

          <h2 id="accordion-open-heading-6">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-open-body-6"
              aria-expanded="false"
              aria-controls="accordion-open-body-6"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 me-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path></svg
                >¿Cómo se solicita turno?</span
              >
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-6"
            class="hidden"
            aria-labelledby="accordion-open-heading-6"
          >
            <div
              class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
            >
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Podes sacar turno por teléfono, WhatsApp o a través de nuestros
                turnos online
              </p>
            </div>
          </div>

          <h2 id="accordion-open-heading-7">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-open-body-7"
              aria-expanded="false"
              aria-controls="accordion-open-body-7"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 me-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path></svg
                >¿Atienden con obra social?</span
              >
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-7"
            class="hidden"
            aria-labelledby="accordion-open-heading-7"
          >
            <div
              class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
            >
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                En centro médico Finaer atendemos con las siguientes obras
                sociales: UNION PERSONAL,ACCORD SALUD,OSFE,OSPETELCO,ISSYS
                CHUBUT,VISITAR,PREMEDIC,MGN,OSMITA,ELEVAR (Pasteleros),OVVSRA,CM
                PUEYRREDÓN. En el caso de no tener ningún tipo de cobertura
                puede consultar el arancel para atenderse de manera particular a
                nuestros teléfonos de contacto.
              </p>
            </div>
          </div>

          <h2 id="accordion-open-heading-8">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-open-body-8"
              aria-expanded="false"
              aria-controls="accordion-open-body-8"
            >
              <span class="flex items-center"
                ><svg
                  class="w-5 h-5 me-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path></svg
                >¿Qué especialidades tratamos?</span
              >
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-8"
            class="hidden"
            aria-labelledby="accordion-open-heading-8"
          >
            <div
              class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
            >
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Ofrecemos atención médica integral a pacientes con problemas
                renales en cualquier etapa de la enfermedad. Para esto, contamos
                con un equipo de profesionales de distintas especialidades
                médicas que nos permiten brindar tratamiento interdisciplinario
                y que responden a diferentes aspectos que son necesarios atender
                durante el tratamiento renal: Nefrología, Nutrición,
                Diabetología, Cardiología y Urología.
              </p>
            </div>
          </div>
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

import { onMounted } from "vue";
import { Accordion } from "flowbite";

onMounted(() => {
  const accordionElement = document.getElementById("accordion-example");

  // create an array of objects with the id, trigger element (eg. button), and the content element
  const accordionItems = [
    {
      id: "accordion-example-heading-1",
      triggerEl: document.querySelector("#accordion-example-heading-1"),
      targetEl: document.querySelector("#accordion-example-body-1"),
      active: true,
    },
    {
      id: "accordion-example-heading-2",
      triggerEl: document.querySelector("#accordion-example-heading-2"),
      targetEl: document.querySelector("#accordion-example-body-2"),
      active: false,
    },
    {
      id: "accordion-example-heading-3",
      triggerEl: document.querySelector("#accordion-example-heading-3"),
      targetEl: document.querySelector("#accordion-example-body-3"),
      active: false,
    },
  ];
  // options with default values
  const options = {
    alwaysOpen: true,
    activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
    inactiveClasses: "text-gray-500 dark:text-gray-400",
    onOpen: (item) => {
      console.log("accordion item has been shown");
      console.log(item);
    },
    onClose: (item) => {
      console.log("accordion item has been hidden");
      console.log(item);
    },
    onToggle: (item) => {
      console.log("accordion item has been toggled");
      console.log(item);
    },
  };
  if (document.querySelector("#accordion-example-heading-1")) {
    /*
     * accordionItems: array of accordion item objects
     * options: optional
     */
    const accordion = new Accordion(accordionElement, accordionItems, options);
    // open accordion item based on id
    accordion.open("accordion-example-heading-2");
  }
});
</script>

<style></style>
