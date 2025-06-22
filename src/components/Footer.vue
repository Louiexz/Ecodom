<template>
	<footer>
    <ul class="ajuda">
      <li><router-link to="#">Contate-nos</router-link></li>
      <li><router-link to="#">Sobre nós</router-link></li>
      <li><router-link to="#">Pesquise em nossa loja</router-link></li>
      <li><router-link to="#">Termos e avisos de privacidade</router-link></li>
      <li><router-link to="#">Enviar feedback</router-link></li>
    </ul>
    <div class="logoF">

      <router-link to="/" class="logoEco">
        <img src="/assets/images/Logos/ecodom-logo.svg" alt="">
      </router-link>
      <div class="pagamentos">
        <img src="/assets/images/Logos/visa-logo.png" alt="">
        <img src="/assets/images/Logos/mastercard-logo.png" alt="">
        <img src="/assets/images/Logos/paypal-logo.png" alt="">
        <img src="/assets/images/Logos/cielo-logo.png" alt="">
      </div>
    </div>
    <ul class="redeSociais">
      <li><i class="fa-brands fa-facebook"><span> Facebook</span></i></li>
      <li><i class="fa-brands fa-whatsapp"></i><span> Whatsapp</span></li>
      <li><i class="fa-brands fa-instagram"></i><span> Instagram</span></li>
      <li><i class="fa-brands fa-youtube"></i><span> Youtube</span></li>
      <li><i class="fa-brands fa-google"></i><span> Google +</span></li>
    </ul>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style src="@/css/ui/footer.css" scoped></style>