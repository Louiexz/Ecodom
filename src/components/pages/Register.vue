<template>
  <main class="inputs cadastro">
    <h2>Cadastro</h2>
    <form id="formulario-1" @submit.prevent="handleRegister">
      <!-- Usuário -->
      <div class="box-inputs">
        <label>Usuário:</label>
        <input
          class="form-input"
          v-model="usuario"
          type="text"
          minlength="5"
          maxlength="20"
          required>
      </div>

      <!-- CPF -->
      <div class="box-inputs">
        <label>CPF:</label>
        <input
          class="form-input"
          v-model="cpf"
          type="text"          
          placeholder="000.000.000-00"
          minlength="11"
          maxlength="11"
          @input="checkCPF"
          required>
      </div>

      <!-- Telefone -->
      <div class="box-inputs">
        <label>Telefone:</label>
        <input
          class="form-input"
          v-model="telefone"
          type="text"
          placeholder="(00) 0 0000-0000"
          minlength="9"
          maxlength="9"
          @input="checkTelefone"
          required>
      </div>

      <!-- Senha -->
      <div class="box-inputs">
        <label>Senha:</label>
        <input class="form-input"  v-model="senha" type="password" minlength="8" maxlength="20" required>
        <div class="form-text">
          <label :style="{ color: senha.length >= 8 && senha.length <= 20 ? 'green' : 'red' }">
            Senha de 8 a 20 caracteres
          </label>
          <label :style="{ color: /[A-Z]/.test(senha) ? 'green' : 'red' }">
            , com uma letra maiúscula
          </label>
          <label :style="{ color: /^[a-zA-Z0-9]*$/.test(senha) && senha ? 'green' : 'red' }">
            , contendo apenas letras e números.
          </label>
        </div>
      </div>

      <!-- Confirmar Senha -->
      <div class="box-inputs">
        <label>Confirmar senha:</label>
        <input class="form-input" v-model="senhaConfirmada" type="password" minlength="8" maxlength="20" required>
        <div class="form-text">
          <label :style="{ color: senhasIguais === true ? 'green' : senhasIguais === false ? 'red' : '' }">
            {{ senhasIguais === null ? '' : senhasIguais ? 'As senhas são iguais' : 'As senhas não são iguais' }}
          </label>
        </div>
      </div>

      <!-- E-mail -->
      <div class="box-inputs">
        <label>Email:</label>
        <input class="form-input" v-model="email" type="email" required>
      </div>

      <!-- Confirmar E-mail -->
      <div class="box-inputs">
        <label>Confirmar Email:</label>
        <input class="form-input"  v-model="emailConfirmado" type="email" required>
        <div class="form-text">
          <label :style="{ color: emailsIguais === true ? 'green' : emailsIguais === false ? 'red' : '' }">
            {{ emailsIguais === null ? '' : emailsIguais ? 'E-mails iguais' : 'E-mails diferentes' }}
          </label>
        </div>
      </div>

      <!-- Termos -->
      <div id="check">
        <input v-model="termos" type="checkbox" required>
        <span>Aceito os <a href="#">termos de uso</a></span>
      </div>

      <!-- Botões -->
      <div id="botoes">
        <button type="submit" class="btn">Confirmar</button>
        <router-link to="/login" class="btn">Cancelar</router-link>
      </div>
    </form>
  </main>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Campos reativos
const usuario = ref('')
const cpf = ref('')
const telefone = ref('')
const senha = ref('')
const senhaConfirmada = ref('')
const email = ref('')
const emailConfirmado = ref('')
const termos = ref(false)

// Comparações
const senhasIguais = ref(null)
const emailsIguais = ref(null)

// Watchers
watch([senha, senhaConfirmada], () => {
  if (!senha.value || !senhaConfirmada.value) {
    senhasIguais.value = null
  } else {
    senhasIguais.value = senha.value === senhaConfirmada.value
  }
})

watch([email, emailConfirmado], () => {
  if (!email.value || !emailConfirmado.value) {
    emailsIguais.value = null
  } else {
    emailsIguais.value = email.value === emailConfirmado.value
  }
})

function isDigitOnly(str) {
  return /^\d+$/.test(str);
}

function checkTelefone() {
  if (!telefone.value || !isDigitOnly(telefone.value.replace(/\D/g, ''))) {
    telefone.value = "";
  }
}

function checkCPF() {
  if (!cpf.value || !isDigitOnly(cpf.value.replace(/\D/g, ''))) {
    cpf.value = "";
  }
}

// Validação e envio
function handleRegister() {
  if (
    !usuario.value || !cpf.value || !telefone.value ||
    !senha.value || !senhaConfirmada.value || !email.value || !emailConfirmado.value ||
    !termos.value || senhasIguais.value === false || emailsIguais.value === false
  ) {
    alert('Por favor, preencha todos os campos corretamente.')
    return
  }

  // Aqui você pode enviar os dados para o backend

  router.push('/login')
}
</script>

<style scoped>
@import "@/css/pages/simple/icone.css";
@import "@/css/pages/simple/inputs.css";
</style>
