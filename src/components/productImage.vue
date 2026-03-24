<template>
  <picture class="md:flex md:flex-1">
    <!-- Desktop / large screens -->
    <source
      srcset="/image-product-desktop.jpg"
      media="(min-width: 768px)"
    />

    <!-- Fallback (mobile) -->
    <img
      src="/image-product-mobile.jpg"
      alt="Gabrielle Essence Eau De Parfum"
      class="w-full h-auto object-cover"
    />
  </picture>
</template>