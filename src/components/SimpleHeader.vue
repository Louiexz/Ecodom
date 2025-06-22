<template>
	<nav id="navbar">
        <router-link to="/">
        	<img id="nav-img" class=icone src="/assets/images/Logos/ecodom-logo.svg" alt="Ícone ECODOM">
        </router-link>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style src="@/css/ui/header-simple.css" scoped></style>