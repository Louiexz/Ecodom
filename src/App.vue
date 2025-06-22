<template>
  <SimpleHeader v-if="checkHeader" class="navbar-item"/>
  <Header v-else />
  <router-view />
  <Footer v-if="!checkHeader"/>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SimpleHeader from '@/components/SimpleHeader.vue' // lembre de importar se estiver usando

// Obter rota atual
const route = useRoute()

// Lista de rotas que devem exibir o SimpleHeader
const listSimpleHeader = [
  '/login',
  '/register',
  '/forgot-password',
  '/payment',
  '/confirm-payment'
]

// Computed para verificar se deve mostrar o SimpleHeader
const checkHeader = computed(() =>
  listSimpleHeader.some(path => route.path.includes(path))
)

// Prevenir clique direito em imagens
document.addEventListener('contextmenu', function (e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault()
  }
})
</script>