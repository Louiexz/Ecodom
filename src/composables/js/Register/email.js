export default class ValidaEmail {
  constructor() {
    this.email = document.querySelector("#email");
    this.emailConfirmado = document.querySelector("#emailConfirmado");
    this.igual = document.querySelector("#emailIgual");
  }

  verificarEmailsIguais() {
    const emailVal = this.email?.value.trim() ?? "";
    const emailConfVal = this.emailConfirmado?.value.trim() ?? "";

    if (!this.igual) return;

    if (!emailVal || !emailConfVal) {
      this.igual.textContent = "";
      this.igual.style.color = "";
    } else if (emailVal === emailConfVal) {
      this.igual.textContent = "E-mails iguais";
      this.igual.style.color = "green";
    } else {
      this.igual.textContent = "E-mails diferentes";
      this.igual.style.color = "red";
    }
  }

  addValidacao() {
    if (!this.email || !this.emailConfirmado || !this.igual) return;

    this.email.addEventListener("input", () => {
      this.emailConfirmado.dispatchEvent(new Event("input", { bubbles: true }));
    });

    this.emailConfirmado.addEventListener("input", () => this.verificarEmailsIguais());
  }
}
