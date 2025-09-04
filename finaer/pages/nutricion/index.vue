<template>
  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">
    <Header />
    <main class="mt-10 h-auto overflow-hidden">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h1
            class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"
          >
            <span class="text-[#6568E6]">Nutrición</span>
          </h1>
          <h3 class="text-2xl text-center sm:text-start w-full lg:w-[90%]">
            <span class="text-[#000]">Consulta a nutricionista</span>
          </h3>

          <p class="mt-5 mb-5">
            En Centro Médico Finaer, Nuestros expertos en nutrición se
            comprometen a diseñar planes alimenticios adaptados a tus
            necesidades individuales, teniendo en cuenta tus preferencias,
            objetivos de salud, condiciones médicas y estilo de vida. Ofrecemos
            una amplia gama de servicios de nutrición, incluyendo: Evaluación
            nutricional integral: Analizamos tu ingesta dietética, hábitos
            alimentarios, historial médico y estilo de vida para identificar
            áreas de mejora y establecer objetivos realistas. Planificación de
            dietas: Desarrollamos planes alimenticios equilibrados y
            personalizados que se ajusten a tus necesidades nutricionales y
            preferencias individuales. Educación nutricional: Proporcionamos
            información y recursos educativos para ayudarte a tomar decisiones
            informadas sobre alimentación saludable, etiquetado de alimentos,
            control de porciones y más. Asesoramiento nutricional: Ofrecemos
            orientación y apoyo continuo para ayudarte a superar desafíos,
            mantener la motivación y adoptar hábitos alimentarios saludables a
            largo plazo. Seguimiento y monitoreo: Realizamos seguimientos
            periódicos para evaluar tu progreso, ajustar los planes según sea
            necesario y brindarte el apoyo necesario para alcanzar tus metas
            Contamos con 3 nutricionistas que abarcan distintos temas como:
          </p>
          <ul
            class="text-start list-inside list-image-[url(../../assets/images/check_2.png)]"
          >
            <li>Diabetes</li>
            <li>Vegetarianismo</li>
            <li>Hipertensión </li>
            <li>Obesidad y sobrepeso </li>
            <li>Especialidad en patologías digestivas y renales</li>
            <li>Cambio de hábitos alimentarios </li>
            <li>Estilo de vida saludable y deporte</li>
          </ul>
        </div>
        <div>
          <img
            id="nutri"
            class="w-full aspect-video rounded-lg"
            src="../../assets/images/nutric.jpg"
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

<style>
#nutri {
  height: 750px;
  object-fit: cover;
}
</style>
