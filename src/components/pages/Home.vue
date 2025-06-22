<template>
  <main>
    <section class="carrossel">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="subtitulo banheiro">
              <h2>Seu banheiro mais sustentável</h2>
            </div>
            <div class="verProdutos banheiro">
              <router-link to="/category/bathroom">Ver produtos</router-link>
            </div>
            <div class="gradient">
              <img src="/assets/images/Category/bathroom.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <div class="carousel-item">
            <div class="subtitulo cozinha">
              <h2>Cozinhe com consciência</h2>
            </div>
            <div class="verProdutos cozinha">
              <router-link to="/category/kitchen">Ver produtos</router-link>
            </div>
            <div class="gradient">
              <img src="/assets/images/Category/kitchen.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <div class="carousel-item">
            <div class="subtitulo sala">
              <h2>Elegância sustentável para sua sala</h2>
            </div>
            <div class="verProdutos sala">
              <router-link to="/category/room">Ver produtos</router-link>
            </div>
            <div class="gradient">
              <img src="/assets/images/Category/room.jpg" class="d-block w-100" alt="...">
            </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section class="todosProdutos">
      <div class="verTodos">
        <span>Ver todos <br> os Produtos</span>
        <router-link to="/category/AllProducts">
          <i class="fa-solid fa-circle-arrow-right"></i>
        </router-link>
      </div>
      <div class="gradientItem">
        <div class="flex">
          <div class="item" id="item1"><img src="/assets/images/Products/Kitchen/Rod1.png" alt=""></div>
          <div class="item" id="item2"><img src="/assets/images/Products/Room/Tables1.png" alt=""></div>
          <div class="item" id="item3"><img src="/assets/images/Products/Bathroom/SoapDish/SoapSet1.png" alt=""></div>
          <div class="item" id="item4"><img src="/assets/images/Products/Kitchen/UtensilSet1.png" alt=""></div>
          <div class="item" id="item5"><img src="/assets/images/Products/Bathroom/BrushTeet/BambuTeetBrush2.png" alt=""></div>
        </div>
      </div>
    </section>

    <section class="maisVendidos">
      <div class="subtitulo2">
        <span>Mais Vendidos</span>
      </div>
      <div class="flexVendidos">

        <div class="item2">
          <router-link to="/product/Cutlery">
            <img src="/assets/images/Products/Kitchen/Cutlery/Cutlery5.png" alt="">
            <div class="descricao">
              <p>Talheres de Fibra de Trigo</p>
              <span class="preco">R$ 14,90</span>
            </div>
          </router-link>
        </div>

        <div class="item2">
          <router-link to="/product/chair">
            <img src="/assets/images/Products/Room/Chairs/chair1.png" alt="">
            <div class="descricao">
              <p>Cadeira Sextavada</p>
              <span class="preco">R$ 42,90</span>
            </div>
          </router-link>
        </div>

        <div class="item2">
          <router-link to="/product/BrushTeet">
            <img src="/assets/images/Products/Bathroom/BrushTeet/BambuTeetBrush4.png" alt="">
            <div class="descricao">
              <p>Escova de Dentes de Bambu</p>
              <span class="preco">R$ 23,90</span>
            </div>
          </router-link>
        </div>
        <div class="item2">
          <router-link to="/product/SoapDish">
            <img src="/assets/images/Products/Bathroom/SoapDish/SoapDish1.png" alt="">
            <div class="descricao">
              <p>Saboneteira de Bambu</p>
              <span class="preco">R$ 29,90</span>
            </div>
          </router-link>
        </div>
        <div class="item2">
          <router-link to="/product/BuckCup">
            <img src="/assets/images/Products/Kitchen/BuckCup/Cups1.png" alt="">
            <div class="descricao">
              <p>Copos Bucks bambu</p>
              <span class="preco">R$ 10,90</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Função para ajustar tamanhos com base no carrossel
function ajustarTamanhos() {
  const carrossel = document.getElementById("carouselExample")
  const subtitulo = document.querySelector(".subtitulo")
  const verProdutos = document.querySelector(".verProdutos")

  if (!carrossel || !subtitulo || !verProdutos) return

  const carrosselLargura = carrossel.offsetWidth
  const carrosselAltura = carrossel.offsetHeight

  subtitulo.style.width = `${carrosselLargura}px`
  subtitulo.style.height = `${carrosselAltura}px`
  verProdutos.style.width = `${carrosselLargura}px`
  verProdutos.style.height = `${carrosselAltura}px`
}

// Função de animação ao rolar
function animateOnScroll() {
  const todosProdutosSection = document.querySelector('.todosProdutos')
  const maisVendidosSection = document.querySelector('.maisVendidos')

  if (todosProdutosSection) {
    todosProdutosSection.style.opacity = '0'
    todosProdutosSection.style.transform = 'translateY(30px)'
  }

  if (maisVendidosSection) {
    maisVendidosSection.style.opacity = '0'
    maisVendidosSection.style.transform = 'translateY(30px)'
  }

  function checkVisibility() {
    const windowHeight = window.innerHeight

    if (todosProdutosSection) {
      const todosProdutosTop = todosProdutosSection.getBoundingClientRect().top
      if (todosProdutosTop < windowHeight * 0.75) {
        todosProdutosSection.style.opacity = '1'
        todosProdutosSection.style.transform = 'translateY(0)'
      }
    }

    if (maisVendidosSection) {
      const maisVendidosTop = maisVendidosSection.getBoundingClientRect().top
      if (maisVendidosTop < windowHeight * 0.75) {
        maisVendidosSection.style.opacity = '1'
        maisVendidosSection.style.transform = 'translateY(0)'
      }
    }
  }

  checkVisibility()
  window.addEventListener('scroll', checkVisibility)

  // Remover o event listener ao desmontar
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', checkVisibility)
  })
}

// Execução após montagem do componente
onMounted(() => {
  ajustarTamanhos()
  animateOnScroll()
  window.addEventListener('resize', ajustarTamanhos)
})

// Cleanup para o event resize
onBeforeUnmount(() => {
  window.removeEventListener('resize', ajustarTamanhos)
})
</script>

<style scoped>
@import "@/css/pages/home/carrosel.css";
@import "@/css/pages/home/featured-products.css";
@import "@/css/pages/home/todosProdutos.css";
</style>