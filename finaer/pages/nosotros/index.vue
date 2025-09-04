<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1
            class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"
          >
            <span class="text-[#6568E6]">Sobre nosotros</span>
          </h1>
          <p class="mt-5 mb-5 text-justify">
            La enfermedad renal constituye un creciente problema de salud en
            todo el mundo y está asociada a efectos adversos, a un mayor riesgo
            de mortalidad y de morbilidad cardiovascular. Asimismo, los riñones
            tienen un papel importante en la diabetes, en la obesidad y la
            hipertensión arterial. Por ello, nuestro centro médico brinda una
            atención nefrológica integral, en un mismo espacio especialmente
            diseñado, el paciente y sus familiares encuentran una respuesta a
            todas sus necesidades: estudios, consultas con nefrólogos,
            cardiólogos, urólogos, nutricionistas, psicólogos y tratamientos
            personalizados. Contamos con tecnología de última generación en
            diagnóstico, tratamientos especiales y un equipo médico conformado
            por profesionales altamente capacitados unido por un mismo ideal:
            brindar medicina de excelencia basada en la cordialidad en la
            relación médico-paciente, la innovación tecnológica, el progreso
            científico y la calidez en la atención que brinda todo el personal.
          </p>
        </div>
        <div>
          <p>
            <img
              id="finaer"
              class="w-full aspect-video rounded-lg"
              src="../../assets/images/finaer.jpg"
            />
          </p>
        </div>
      </div>

      <article class="mt-2">
          <div
            class="px-7 flex flex-wrap justify-center items-center text-center gap-8 gap-y-16 mt-12"
          >
            <article
              class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"
            >
              <div>
                <h3 class="text-4xl font-medium">
                  105.600+
                  <span
                    class="text-sm uppercase tracking-wider block font-normal mt-2"
                  >
                    Tratamientos de dialisis realizados
                  </span>
                </h3>
              </div>
            </article>
            <article
              class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"
            >
              <div>
                <h3 class="text-4xl font-medium">
                  8+
                  <span
                    class="text-sm uppercase tracking-wider block font-normal mt-2"
                  >
                    Años de Experiencia
                  </span>
                </h3>
              </div>
            </article>
            <article
              class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"
            >
              <div>
                <h3 class="text-4xl font-medium">
                  19.500+
                  <span
                    class="text-sm uppercase tracking-wider block font-normal mt-2"
                  >
                    Consultas en tratamientos.
                  </span>
                </h3>
              </div>
            </article>
          </div>
        </article>
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
#finaer {
  height: 500px;
  object-fit: cover;
}
</style>
