<template>
    <main class="inputs login">
        <h2>Login</h2>
        <form id=formulario-login method="dialog" @submit="handleLogin">
            <div class="box-inputs">
                <span>E-mail:</span>
                <input id="email" type="email" placeholder="www.seuemail@gmail.com" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="box-inputs">
                <span>Senha:</span>
                <input id="senha" type="password" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div id="links">
                <div class="box-inputs" id="enter">
                    <button id="entrar" type="submit" class="btn">Entrar</button>
                </div>
                <span>
                    Esqueceu sua senha?
                    <router-link to="/forgot-password" id="recuperar" class="btn-link">
                        Clique aqui
                    </router-link>
                </span>
                <br>
                <router-link to="/register" id="cadastro" class="btn-link">Registre-se</router-link>
            </div>
        </form>
    </main>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function handleLogin(e) {
  e.preventDefault()
  router.push("/") // Redireciona para a página inicial
}

</script>

<style scoped>
@import "@/css/pages/simple/icone.css";
@import "@/css/pages/simple/inputs.css";
</style>