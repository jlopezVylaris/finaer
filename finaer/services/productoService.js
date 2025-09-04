// src/services/productService.js
import { ref } from 'vue';

const products = ref([
     { id: 3, name: 'Casco de Seguridad con Lámpara', category: 'Equipos de Seguridad', stock: 20 },
    { id: 4, name: 'Detector de Gases', category: 'Herramientas de Medición', stock: 15 },
    // Añadir más equipos según sea necesario
  ]);
  

export function useProductService() {
  const getProducts = () => products.value;

  const addProduct = (product) => {
    const nextId = Math.max(...products.value.map(p => p.id)) + 1;
    const newProduct = { ...product, id: nextId, stock: 0 }; // Asumimos nuevo producto sin stock
    products.value.push(newProduct);
  };

  const updateStock = (id, quantity) => {
    const product = products.value.find(product => product.id === id);
    if (product) {
      product.stock += quantity;
    }
  };

  return { products, addProduct, updateStock };
}
