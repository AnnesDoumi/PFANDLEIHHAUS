// src/App.vue
<template>
  <div class ="app-container">
    <Navbar />
    <main class="container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";

export default {
  components: { Navbar, Footer }
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  color: white;
  padding: 1rem;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.nav-links li {
  display: inline;
}
.nav-links a {
  color: yellow;
  text-decoration: none;
  font-weight: bold;
}
</style>