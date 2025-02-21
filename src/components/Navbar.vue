<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/src/assets/logo.png" alt="Logo" />
    </div>
    <button class="menu-btn" @click="toggleMenu">☰</button>
    <div class="nav-container" :class="{ open: menuOpen }">
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/services">Leistungen</router-link></li>
        <li><router-link to="/conditions">Konditionen</router-link></li>
        <li><router-link to="/sales">Verkauf</router-link></li>
        <li><router-link to="/contact">Kontakt</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.$emit("toggle-menu", this.menuOpen);
    }
  }
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
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.nav-container {
  display: none;
  width: 100%;
}
.nav-container.open {
  display: block;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: #222;
  z-index: 1000;
  padding: 1rem 0;
}
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-links li {
  padding: 0.5rem 1rem;
}
.nav-links a {
  color: yellow;
  text-decoration: none;
  font-weight: bold;
}
.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}
@media (max-width: 768px) {
  .menu-btn {
    display: block;
  }
  .app-container.menu-open .container {
    margin-top: 200px;
  }
}
</style>
