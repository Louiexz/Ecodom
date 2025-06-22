<template>
	<main class="inputs" id="pagamento">
    <form id="formulario-pagamento" method="dialog">
      <div id="lados">
        <div id="esquerdo">
          <h3>Endereço</h3><br>
          <div id=inputs>
            <div class="grid-two">
              <div class="grid">
                <span>Estado:</span>
                <select id=estado class="form-select" aria-label="Default select example" name="estado" required>
                  <option value="estado">Selecione o Estado</option> 
                  <option value="ac">Acre</option> 
                  <option value="al">Alagoas</option> 
                  <option value="am">Amazonas</option> 
                  <option value="ap">Amapá</option> 
                  <option value="ba">Bahia</option> 
                  <option value="ce">Ceará</option> 
                  <option value="df">Distrito Federal</option> 
                  <option value="es">Espírito Santo</option> 
                  <option value="go">Goiás</option> 
                  <option value="ma">Maranhão</option> 
                  <option value="mt">Mato Grosso</option> 
                  <option value="ms">Mato Grosso do Sul</option> 
                  <option value="mg">Minas Gerais</option> 
                  <option value="pa">Pará</option> 
                  <option value="pb">Paraíba</option> 
                  <option value="pr">Paraná</option> 
                  <option value="pe">Pernambuco</option> 
                  <option value="pi">Piauí</option> 
                  <option value="rj">Rio de Janeiro</option> 
                  <option value="rn">Rio Grande do Norte</option> 
                  <option value="ro">Rondônia</option> 
                  <option value="rs">Rio Grande do Sul</option> 
                  <option value="rr">Roraima</option> 
                  <option value="sc">Santa Catarina</option> 
                  <option value="se">Sergipe</option> 
                  <option value="sp">São Paulo</option> 
                  <option value="to">Tocantins</option> 
                </select>
              </div>
              <div class="grid">
                <span>CEP:</span>
                <input type="text" id=cep class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
              </div>
            </div>
            <div class="box-inputs">
              <span>Cidade:</span>
              <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="box-inputs">
              <span>Bairro:</span>
              <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="grid-two">
              <div class="grid">
                <span>Rua:</span>
                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
              </div>
              <div class="grid">
                <span>N°:</span>
                <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
              </div>
            </div>
            <div class="box-inputs">
              <span>Referência:</span>
              <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
            </div>
          </div>
        </div>
        <hr id="divisoria">
        <div id="direito">
          <h3>Pagamento</h3><br>
          <div id="pix">
            <h5>
              <img id="pix-img" src="/assets/images/Icons/pix-icon.png" alt="Ícone Pix">
              <b>Pague com pix</b>
            </h5>
            <img id="qr-code" src="/assets/images/qrCODE.jpeg" alt="QR-Code ECODOM"><br><br>
            <button type="button" class="btn">Copiar código cópia e cola</button>
          </div><br>
          <h5><b>Pague com cartão de crédito</b></h5><br>
          <div id="cartao-info">
            <span>N° cartão de crédito:</span>
            <input type="text" id=numCartao class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
            <div class="grid-three">
              <div>
                <span>Vencimento:</span>
                <input type="date" class="form-control" aria-label="Default"
                aria-describedby="inputGroup-sizing-default" required>
              </div>
              <div>
                <span>Código de segurança:</span>
                <input type="text" id=codSeg class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
              </div>
              <div>
                <span>Parcelas:</span>
                <input type="number" min=0 max="6" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id=botoes>
        <router-link to="/confirm-payment" id=confirmar class="btn">Confirmar</router-link>
        <router-link to="/cart" id="cancelar"class="btn">Cancelar</router-link>
      </div>
    </form>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();
</script>

<style scoped>
@import "@/css/pages/simple/icone.css";
@import "@/css/pages/simple/inputs.css";
@import "@/css/pages/payment/payment.css";
@import "@/css/pages/payment/payment-media.css";
</style>
