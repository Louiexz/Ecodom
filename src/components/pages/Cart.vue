<template>
  <main id="carrinho">
    <section id="compras">
      <h2><b>Compras</b></h2>
      <div class="grid">
        <div class="produto" v-for="(product, index) in products" :key="product.name + index">
          <router-link :to="`/product/${product.name}`">
            <img :src="`/assets/images/Products/${product.imagePath}1.png`" :alt="product.name" class="product-image" />
          </router-link>

          <div class="produto-info">
            <h5><b>{{ product.title }}</b></h5>
            <div class="info-detalhes">
              <div class="quantity">
                <span class="diminuir" @click="diminuirQuantity(product)">-</span>
                <span>{{ product.quantity }}</span>
                <span class="aumentar" @click="aumentarQuantity(product)">+</span>
              </div>

              <p class="valores-info">
                <b>R$ <span class="produto-valor">{{ formatCurrency(product.price * product.quantity) }}</span></b>
                <span class="parcela-info">ou <b>2x </b>de <b>{{ formatCurrency(product.price * product.quantity / 2) }}</b> sem juros</span>
              </p>
            </div>
            <button @click="removerDoCarrinho(index)" class="btn btn-remover">Remover</button>
          </div>
        </div>
      </div>

      <div id="frete">
        <h2><b>Frete</b></h2>
        <h3>Recife - PE</h3>
        <h4>Av. Mal. Mascarenhas de Morais, 3905<br>51150-003</h4>
        <h3>Escolha a forma de envio:</h3>

        <div class="caixa-radio">
          <input class="input-frete" type="radio" name="frete" :value="12.50" v-model="selectedFrete">
          <p class="radio-info">
            <span><b>Envio rápido:</b></span><br>
            <span>Entrega em até: 3 dias</span>
          </p>
          <b>R$<span class="frete-valor">12,50</span></b>
        </div><br>

        <div class="caixa-radio">
          <input class="input-frete" type="radio" name="frete" :value="5.45" v-model="selectedFrete">
          <p class="radio-info">
            <span><b>Envio normal:</b></span><br>
            <span>Entrega em até: 7 dias</span>
          </p>
          <b>R$ <span class="frete-valor">05,45</span></b>
        </div>
      </div>
    </section>

    <section id="resumo-compra">
      <h4><b>Resumo da compra</b></h4>
      <div id="resumo-info">
        <div class="row">
          <span><b>{{ totalQuantity }} produto{{ totalQuantity > 1 ? 's' : '' }}:</b></span>
          <span>R$ {{ formatCurrency(subtotal) }}</span>
        </div>
        <div class="row">
          <span><b>Frete:</b></span>
          <span>R$ {{ formatCurrency(selectedFrete) }}</span>
        </div>
        <hr>
        <div class="row">
          <span><b>Total:</b></span>
          <span>R$ {{ formatCurrency(total) }}</span>
        </div>
        <div id="pagamentos">
          <span>10% OFF no Pix R$ {{ formatCurrency(totalPix) }}</span><br>
          <span>ou até 2x de R$ {{ formatCurrency(parcelaCartao) }} sem juros</span>
        </div>
      </div>
      <router-link to="/payment" class="btn" id="continuar">Continuar</router-link>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';

const products = ref([]);
const selectedFrete = ref(5.45); // valor padrão

onMounted(() => {
  const savedCart = localStorage.getItem("cart");
  const parsed = savedCart ? JSON.parse(savedCart) : [];

  // Garante que cada item tenha quantidade
  products.value = parsed.map(p => ({ ...p, quantity: p.quantity || 1 }));
});

// Funções para + e -
function diminuirQuantity(product) {
  if (product.quantity > 1) product.quantity--;
}

function aumentarQuantity(product) {
  if (product.quantity < 10) product.quantity++;
}

function removerDoCarrinho(index) {
  products.value.splice(index, 1);
}

// Formatador de moeda BR
function formatCurrency(value) {
  return value.toFixed(2).replace('.', ',');
}

// Computeds
const totalQuantity = computed(() =>
  products.value.reduce((acc, p) => acc + p.quantity, 0)
);

const subtotal = computed(() =>
  products.value.reduce((acc, p) => acc + (p.price * p.quantity), 0)
);

const total = computed(() => subtotal.value + selectedFrete.value);

const totalPix = computed(() =>
  subtotal.value * 0.9 + selectedFrete.value
);

const parcelaCartao = computed(() =>
  total.value / 2
);

// Atualiza localStorage sempre que mudar algo
watch(products, (newCart) => {
  localStorage.setItem("cart", JSON.stringify(newCart));
}, { deep: true });
</script>

<style scoped>
@import "@/css/pages/cart.css";
@import "@/css/pages/simple/inputs.css";
</style>
