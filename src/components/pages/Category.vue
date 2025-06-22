<template>
  <main style="background-color: #EAE6E6;">
    <section class="catalog" v-if="response">
      <h1>{{ categoryName }}</h1>
      <div class="grid">
        <div
          class="produto"
          v-for="(product, index) in response"
          :key="index"
        >
          <router-link :to="`/product/${product.name}`">
            <img :src="`/assets/images/Products/${product.imagePath}1.png`" :alt="product.name" class="product-image" />
          </router-link>
          <p>{{ product.title }}</p>
          <div class="product">              
              <div class="preco">
                <span>R$ {{ product.price.toFixed(2) }}</span>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star" v-for="n in 5" :key="n"></i>
              </div>
              <div class="carrinhoIcon">
                <i
				    :class="product.addedToCart ? 'fa-cart-arrow-down' : 'fa-cart-plus'"
				    class="fa-solid"
				    @click.prevent="toggleCart(product)"
				  ></i>
              </div>
            </div>
        </div>
      </div>
    </section>
    <p v-else>Categoria não encontrada.</p>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const response = ref(null);
const categoryName = ref(route.params.name || "Bathroom");

async function fetchProducts() {
  try {
    let { data } = await axios.get(`/Json/${categoryName.value.toLowerCase()}.json`);

    const foundCategory = data.find(
      (item) => item.category.toLowerCase() === categoryName.value.toLowerCase()
    );

    if (foundCategory) {
       response.value = foundCategory.products.map(product => ({
	    ...product,
	    addedToCart: false,
	    quantity: 1,
	  }));
    } else {
      response.value = null;
    }
  } catch (error) {
    console.error("Erro ao buscar JSON:", error);
    response.value = null;
  }
}

function toggleCart(product) {
  product.addedToCart = !product.addedToCart;

  // Recupera o carrinho do localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (product.addedToCart) {
    // Adiciona ao carrinho se ainda não estiver lá
    if (!cart.some(item => item.name === product.name)) {
      cart.push(product);
    }
  } else {
    // Remove do carrinho se desmarcado
    cart = cart.filter(item => item.name !== product.name);
  }

  // Atualiza o carrinho no localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Busca inicial
onMounted(fetchProducts);

// Reage a mudanças no parâmetro da rota
watch(
  () => route.params.name,
  (newName) => {
    categoryName.value = newName || "Bathroom";
    fetchProducts();
  }
);
</script>

<style src="@/css/pages/products/catalog.css" scoped></style>
