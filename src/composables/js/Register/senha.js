export default class ValidaPassword {
  constructor() {
    this.senha = document.querySelector("#senha");
    this.senhaConfirmada = document.querySelector("#senhaConfirmada");

    this.iguais = document.querySelector("#iguais");
    this.tamanho = document.querySelector("#tamanho");
    this.maiuscula = document.querySelector("#maiuscula");
    this.alfaNum = document.querySelector("#alfaNum");
  }

  validarConfirmacaoSenha() {
    const senha = this.senha?.value ?? "";
    const confirmacao = this.senhaConfirmada?.value ?? "";

    if (!this.iguais) return;

    if (!senha || !confirmacao) {
      this.iguais.textContent = "";
    } else if (senha === confirmacao) {
      this.iguais.textContent = "As senhas são iguais";
      this.iguais.style.color = "green";
    } else {
      this.iguais.textContent = "As senhas não são iguais";
      this.iguais.style.color = "red";
    }
  }

  addValidacao() {
    if (!this.senha || !this.senhaConfirmada) return;

    this.senha.addEventListener("input", () => {
      // Gatilho para validar confirmação
      this.senhaConfirmada.dispatchEvent(new Event("input", { bubbles: true }));

      const senhaVal = this.senha.value;

      // Alfanumérico
      if (this.alfaNum) {
        this.alfaNum.style.color = senhaVal.length > 0 ? "green" : "red";
      }

      // Tamanho
      if (this.tamanho) {
        this.tamanho.style.color = senhaVal.length >= 8 && senhaVal.length <= 20 ? "green" : "red";
      }

      // Letra maiúscula
      if (this.maiuscula) {
        this.maiuscula.style.color = /[A-Z]/.test(senhaVal) ? "green" : "red";
      }

      // Bloquear caracteres especiais (opcional)
      const cleaned = senhaVal.replace(/[^a-zA-Z0-9]/g, "");
      if (senhaVal !== cleaned) {
        this.senha.value = cleaned;
      }
    });

    this.senhaConfirmada.addEventListener("input", () => this.validarConfirmacaoSenha());
  }
}
