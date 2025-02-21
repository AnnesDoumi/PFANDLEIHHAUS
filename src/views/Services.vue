// src/views/Services.vue
<template>
  <div class="services">
    <h1>Unsere Leistungen</h1>
    <div class="image-grid">
      <img src="/src/assets/geldtransfer.jpg" alt="Geldtransfer" class="responsive-img" />
      <img src="/src/assets/goldankauf.jpg" alt="Goldankauf" class="responsive-img" />
      <img src="/src/assets/messgeraet.png" alt="Messgerät" class="responsive-img" />
      <img src="/src/assets/pfandkredit.jpg" alt="Pfandkredit" class="responsive-img" />
    </div>
  </div>
</template>

<style>
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
.responsive-img {
  width: 100%;
  height: auto;
  max-width: 500px;
  margin: auto;
}
</style>