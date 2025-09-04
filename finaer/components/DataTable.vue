<template>
    <section class="bg-gray-50 dark:bg-gray-900 p-3 mt-7 sm:p-5">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <!-- Barra de búsqueda y botones de acción -->
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <!-- Slot para barra de búsqueda y botones -->
            <slot name="actions"></slot>
          </div>
          <!-- Tabla -->
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-4 py-3" v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
              </thead>
              <tbody>
                <slot name="rows"></slot>
              </tbody>
            </table>
          </div>
          <!-- Navegación/paginación -->
          <slot name="pagination"></slot>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    headers: Array,
  });
  </script>
  
  <style scoped>
  /* Aquí puedes añadir estilos específicos para tu tabla, si es necesario */
  </style>
  