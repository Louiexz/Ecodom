<template>
  <main id="container">
    <section class="Painel">  
      <div class="produtoEscolhido">
        <img class="principal" :id="`${product.name}1`" :src="mainImageSrc" :alt="`${product.name} 1`">
        <ul class="miniaturas">
          <div
            v-for="quantity in product.imageQuantity"
            :key="product.name + (quantity + 1)"
          >
            <img
              v-if="quantity != 1"
              class="menorDestaque"
              :src="getThumbnailSrc(quantity)"
              :alt="`${product.name} ${quantity}`"
              :id="`${product.name}${quantity}`"
              @click="changeMainImage(`${product.name}${quantity}`)"
            />
          </div>
        </ul>
      </div>
      <div class="esposição">
        <h1><strong>{{ product.title }}</strong></h1>
        <div class="valores-info">
        <h2><strong>R$ {{ product.price * product.quantity }}</strong></h2>
        <span class="parcela-info">
          ou <b>2x </b>de <b>{{ formatCurrency(product.price * product.quantity / 2) }}</b> sem juros
        </span>
      </div>
        <span id="gray">quantidade</span>
        <div class="botoes">
          <div class="btn-qty">          
            <button class="menos" @click="diminuirQuantity(product)" :disabled="product.quantity <= 1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
              </svg>
            </button>
            <span>{{ product.quantity }}</span>
            <button class="mais" @click="aumentarQuantity(product)" :disabled="product.quantity >= 10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg>
            </button>
          </div>
          <router-link to="/cart" class="linkagem">
            <button class="btn-comprar" @click.prevent="toggleCart(product)">Comprar</button>
          </router-link>
        </div>
      </div>
    </section>
    <section class="descricoes">
      <div class="descricao">
        <h1><strong>Descrição do produto</strong></h1>
        <ul>
          <li>Categoria: {{ categoryName }}</li>
          <li>Estoque +1000</li>
          <li><strong>Saiba mais:</strong></li>
        </ul>
        <p>{{ product.details }}</p>
      </div>
    </section>

    <section class="avaliacoes">
      <div class="avaliacao">
        <h1><strong>Avaliações</strong></h1>
        <div class="container">
          <div class="comentario">
            <img src="/assets/images/Person/robson.png" alt="">
            <div class="profile">
              <span><strong>Robson</strong></span>
              <img src="/assets/images/stars.png">
              <p>Adorei o produto. São perfeitos para <br> meu dia a dia e ainda contribuo para <br> um mundo melhor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="catalog">
      <h1>Produtos Similares</h1>      
      <div class="grid">
        <div
          class="produto"
          v-for="(productInCategory, index) in produtosSimilares"
          :key="index"
        >
         <router-link :to="`/product/${productInCategory.name}`">
            <img :src="`/assets/images/Products/${productInCategory.imagePath}1.png`" :alt="productInCategory.name" class="productInCategory-image" />
          </router-link>
          <p>{{ productInCategory.title }}</p>
          <div class="product">              
            <div class="preco">
              <span>R$ {{ productInCategory.price }}</span>
            </div>
            <div class="stars">
              <img src="/assets/images/stars.png" id="stars">
            </div>
            <div class="carrinhoIcon">
              <i
                :class="productInCategory.addedToCart ? 'fa-cart-arrow-down' : 'fa-cart-plus'"
                class="fa-solid"
                @click.prevent="toggleCart(productInCategory)"
              ></i>
            </div>
          </div>
        </div>
      </div>     
    </section>
  </main>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute();

const product = ref({});
const categoryProduct = ref([]);

const categoryName = ref("AllProducts");
const productName = ref(route.params.name || "Bathroom");

const mainImageSrc = ref("")

function getThumbnailSrc(index) {
  return `/assets/images/Products/${product.value.imagePath}${index}.png`;
}

function changeMainImage(id) {
  const thumbnail = document.getElementById(id);

  let actualImage = thumbnail.src;

  thumbnail.src = mainImageSrc.value;

  mainImageSrc.value = actualImage;
}

const produtosSimilares = computed(() =>
  categoryProduct.value.filter(p => p.name !== product.value.name)
);

function formatCurrency(value) {
  return value.toFixed(2).replace('.', ',');
}

// Funções para + e -
function diminuirQuantity(product) {
  if (product.quantity > 1) product.quantity--;
}

function aumentarQuantity(product) {
  if (product.quantity < 10) product.quantity++;
}

async function fetchProducts() {
  try {
    const { data } = await axios.get(`/Json/allproducts.json`);

    // Encontra a categoria com o produto
    const foundCategory = data.find(category =>
      category.products.some(p => p.name.toLowerCase() === productName.value.toLowerCase())
    );

    if (foundCategory) {
      // Produto selecionado
      const selected = foundCategory.products.find(p => p.name.toLowerCase() === productName.value.toLowerCase());

      product.value = {
        ...selected,
        addedToCart: false,
        quantity: 1
      };

      mainImageSrc.value = getThumbnailSrc(1);

      const pickCategoryInPath = selected.imagePath.split("/");

      categoryName.value = pickCategoryInPath[0];

      const { data: categoryData } = await axios.get(`/Json/${categoryName.value.toLowerCase()}.json`);
      categoryProduct.value = categoryData[0].products;
    } else {
      product.value = null;
      console.warn("Produto não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    product.value = null;
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
    productName.value = newName || "BrushTeet";
    fetchProducts();
  }
);
</script>

<style scoped>
@import "@/css/pages/products/catalog.css";
@import "@/css/pages/products/descricao.css";
@import "@/css/pages/products/painel-product.css";
@import "@/css/pages/products/avaliacao.css"
</style>