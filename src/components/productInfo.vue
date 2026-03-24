<template>
    <div class="p-6 text-left flex-1">
        <!-- Category -->
        <p class="uppercase tracking-[0.3em] text-gray-500 text-xs mb-4">
            Perfume
        </p>

        <!-- Title -->
        <h1 class="text-2xl md:text-[32px]! md:leading-11! font-bold text-gray-900 leading-tight mb-4">
            Gabrielle <br/> Essence Eau De Parfum
        </h1>

        <!-- Description -->
        <p class="text-gray-500 text-[16px] md:text-[18px] mb-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <ProductPrice />
        <AddToCartButton />
    </div>
</template>

<script setup>
import ProductPrice from './productPrice.vue'
import AddToCartButton from './addToCart.vue'
</script>