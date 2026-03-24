<template>
  <div class="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden max-w-sm w-full md:max-w-150! sm:h-112.5 sm:m-0 mt-32.5 mb-50 shadow-sm"> 
    <ProductImage />
    <ProductInfo />
  </div>
</template>

<script setup>
import ProductImage from './productImage.vue'
import ProductInfo from './productInfo.vue'
</script>