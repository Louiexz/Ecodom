<template>

  <main class="inputs recuperacao">
    <h2>Recuperar senha</h2>
    <img class="icone" src="/assets/images/Icons/warn-icon.png" alt="Ícone alerta" />

    <form id="formulario-recuperacao" @submit.prevent="handleSubmit">
        <!-- MENSAGEM DE CONFIRMAÇÃO -->
        <div v-if="showMensagem" class="mensagem-confirmacao">
          <h5>Recuperação de senha</h5>
          <p>Link de recuperação enviado para seu e-mail!</p>
          <small>Você será redirecionado em instantes...</small>
        </div>
      <div class="box-inputs">
        <span>E-mail:</span>
        <input
          v-model.trim="email"
          type="email"
          placeholder="www.seuemail@gmail.com"
          class="form-control"
          required
        />
      </div>

      <div class="box-inputs">
        <span>CPF:</span>
        <input
          v-model.trim="cpf"
          type="text"
          placeholder="000.000.000-00"
          class="form-control"
          maxlength="11"
          minlength="11"
          required
        />
      </div>

      <div id="botoes">
        <button type="submit" class="btn">Enviar</button>
        <router-link to="/login" id="cancelar" class="btn">Cancelar</router-link>
      </div>
    </form>    
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const cpf = ref('')
const showMensagem = ref(false)

const router = useRouter()

function handleSubmit() {
  if (!email.value || !cpf.value) {
    alert('Preencha todos os campos obrigatórios.')
    return
  }

  showMensagem.value = true

  // Aguarda 2 segundos e redireciona
  setTimeout(() => {
    router.push('/login')
  }, 3000)
}
</script>

<style scoped>
@import "@/css/pages/simple/icone.css";
@import "@/css/pages/simple/inputs.css";

.mensagem-confirmacao {
  margin-top: 20px;
  padding: 20px;
  background-color: #d1e7dd;
  color: #0f5132;
  border: 1px solid #badbcc;
  border-radius: 8px;
  text-align: center;
}
</style>
