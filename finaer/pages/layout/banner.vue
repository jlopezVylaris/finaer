<!-- Banner.vue -->
<template>

  

</template>

<script setup>
import { ref } from 'vue';
import { useProductService } from '@/services/productoService.js';
import Header from './header.vue';

const { products, updateStock } = useProductService();

</script>
