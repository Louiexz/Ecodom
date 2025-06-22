<template>
	<main class="inputs confirmacao">
        <img class=icone src="/assets/images/Icons/accept-icon.png" alt="Ícone correto">

        <h2>Compra finalizada</h2>
        <p id="texto">A compra do produto foi concluída com sucesso!<br>
            Você poderá acompanhar o seu pedido ou voltar
             a página principal do site.</p>
        <router-link to="/" id="finalizar" class="btn">Finalizar</router-link>
    </main>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
@import "@/css/pages/simple/icone.css";
@import "@/css/pages/simple/inputs.css";
@import "@/css/pages/confirm-payment.css";
</style>
