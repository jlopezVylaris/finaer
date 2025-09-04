<!-- Banner.vue -->
<template>

  <div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">

    <Header/>
    
    <main class="mt-10 h-auto lg:h-[400px] overflow-hidden">
      
      <section class="flex flex-wrap text-[rgba(37,73,105,255)]">

        <div class="w-full flex flex-col gap-y-10 lg:flex-row items-center justify-between">

          <header class="w-full lg:w-[50%] flex flex-col gap-4 self-center lg:self-start mt-20">
                       
            <h1 class="text-6xl text-center sm:text-start font-bold w-full lg:w-[90%]"> 
                  <span class="text-[#6568E6]">
                Centro Médico Finaer
              </span>
            </h1>
            <p class="text-[#2C2F4C] text-base text-center sm:text-start">Es un centro médico Fundado en 2016, ubicado en el barrio de Almagro y especializado en nefrología y diálisis, con 705 m2 distribuido en 3 plantas, equipado con los más altos estándares de calidad y servicio para el paciente.
            </p>
            
          <a href="/" class="text-[rgba(8,133,243,255)] bg-white hover:bg-[#6568E6] hover:text-[#fff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  shadow-md py-2 w-52 text-center sm:self-start self-center" >Realiza tu consulta</a>

          <!--<a href="/" class="bg-white text-[rgba(8,133,243,255)] rounded-md shadow-md py-2 w-52 text-center sm:self-start self-center">Realiza tu consulta</a>-->
          </header>

          <div class="w-full md:w-[60%] lg:w-[35%] bg-white flex items-center justify-center rounded-full overflow-hidden">
            <img class="translate-x-10" src="../../assets/images/finaer.jpg" alt="">
          </div>

        </div>

      </section>

    </main>
    
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { useProductService } from '@/services/productoService.js';
import Header from './header.vue';

const { products, updateStock } = useProductService();
</script>
