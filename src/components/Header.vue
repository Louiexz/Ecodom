<template>
  <header>
    <div class="menu">
      <div class="logo">
        <router-link to="/">
          <img id="nav-img" class=icone src="/assets/images/Logos/ecodom-logo.svg" alt="Ícone ECODOM">
        </router-link>
      </div>

      <div class="search">
        <input type="text" placeholder="Pesquise um produto"><i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <nav>
        <ul class="navigation">
          <li><router-link to="/login"><i class="fa-solid fa-user"></i></router-link></li>
          <li><router-link to="/cart"><i class="fa-solid fa-cart-shopping"></i></router-link></li>
        </ul>
      </nav>

      <button class="menu-toggle" @click="mostrar"><i class="fa fa-bars"></i></button>
    </div>
    <div class="categorias">
      <ul>
        <li><router-link to="/" id="home" exact-active-class="active">HOME</router-link></li>
        <li><router-link to="/category/Kitchen" id="kitchen" active-class="active">KITCHEN</router-link></li>
        <li><router-link to="/category/Room" id="room" active-class="active">ROOM</router-link></li>
        <li><router-link to="/category/Bathroom" id="bathroom" active-class="active">BATHROOM</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const pathList = ["kitchen", "room", "bathroom"];

if (route.path === "/") {
  document.getElementById("home")?.classList.toggle('ativar');
}

for (const path of pathList) {
  if (route.path.includes(path)) {
    document.getElementById(path)?.classList.toggle('ativar');
  }
}

function mostrar () {
  const categorias = document.querySelector('.categorias');
  categorias.classList.toggle('ativar');
}
</script>

<style src="@/css/ui/header.css" scoped>
</style>
