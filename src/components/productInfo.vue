<template>
    <div class="p-6">
        <!-- Category -->
        <p class="uppercase tracking-[0.3em] text-gray-500 text-xs mb-4">
            Perfume
        </p>

        <!-- Title -->
        <h1 class="text-2xl font-bold text-gray-900 leading-tight mb-4">
            Gabrielle Essence Eau De Parfum
        </h1>

        <!-- Description -->
        <p class="text-gray-500 text-sm mb-6">
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