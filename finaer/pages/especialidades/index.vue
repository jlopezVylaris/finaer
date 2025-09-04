<template>
    <Banner/>
    <main class="">
          <section class="flex flex-col items-center justify-center py-20 gap-10 bg-[#ecf6ff]">
            <div class="max-w-[90%] lg:max-w-[70%] text-center flex flex-col items-center justify-center">
                <h1 class="text-3xl md:text-5xl text-[rgba(37,73,105,255)]">
                       Conoce más sobre nosotros... </h1>
                <div class="mt-8 max-w-[85%] lg:max-w-[60%] ">
                    <p>
                        Desde médicos especialistas hasta enfermeras, terapeutas y administradores, cada miembro de nuestro equipo desempeña un papel fundamental en la entrega de servicios de salud de alta calidad.                    </p>
                </div>

            <article class="mt-2">
                <div class='px-7 flex flex-wrap justify-center items-center text-center gap-8 gap-y-16 mt-12'>
                    <article class='p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64'>
                        <div>
                            <h3 class='text-4xl font-medium'>
                                324+
                                <span class='text-sm uppercase tracking-wider block font-normal mt-2'>
                                 Tratamientos de dialisis
                                </span>
                            </h3>
                        </div>
                    </article>
                    <article class='p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64'>
                        <div>
                            <h3 class='text-4xl font-medium'>
                                8+
                                <span class='text-sm uppercase tracking-wider block font-normal mt-2'>
                                    Años de Experiencia
                                </span>
                            </h3>
                        </div>
                    </article>
                    <article class='p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64'>
                        <div>
                            <h3 class='text-4xl font-medium'>
                                400+
                                <span class='text-sm uppercase tracking-wider block font-normal mt-2'>
                                    Consultas en tratamientos
                                </span>
                            </h3>
                        </div>
                    </article>
                </div>
            </article>
            
            <article class="mt-16">
                    <a href="#" class="px-6 py-2 text-lg border bg-[#6568E6] text-white rounded-full">
                        Contactanos
                    </a>
            </article>

            </div>      
            
            <article class="bg-white shadow-lg w-[90%] h-auto md:h-[250px] flex flex-col items-center justify-center p-4">
                <div class="w-44">
                    <img src="../../assets/images/line.webp" alt="" class="w-full">
                </div>
                <p class="text-center mt-5">
                    En Finaer, ofrecemos una amplia gama de servicios médicos especializados, incluyendo consulta médica general, atención pediátrica, ginecología, dermatología, odontología, psicología, y más. Nuestro objetivo es proporcionar atención integral y personalizada para satisfacer las necesidades de salud de toda la familia.</p>
            </article>

        </section>

        <section class="bg-img mb-20 flex flex-col gap-4 items-center justify-center text-white h-auto py-8 md:h-[380px]">
           
               
                
        </section>

    </main>
    <Footer/>
</template> 

<script setup>
    import Header from '../layout/header.vue';
    import Banner from '../layout/banner.vue';
    import Footer from '../layout/footer.vue';
    import Content from '../layout/content.vue';
</script>

<style></style>