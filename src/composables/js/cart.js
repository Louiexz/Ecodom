export default class CartMethods {
  constructor() {
    this.quantidade = document.querySelector('#valor');
  }

  addListeners() {
    document.querySelectorAll(".input-frete").forEach(element => {
      element.addEventListener('click', () => {
        if (element.checked) {
          document.querySelector("#resumo-frete").textContent = String(element.value);
          this.atualizaValor();
        }
      });
    });    

    document.querySelector("#continuar").addEventListener('click', () => {
      window.location.href = "../telaPagamento/pagamento.html";
    });
  }

  atualizaValorCartao(valor) {
    document.querySelector("#parcelas-cartao").textContent = parseInt(valor / 2);
  }

  atualizaValorTotal(valorTotalProduto) {
    const valorFrete = document.querySelector("#resumo-frete").textContent || '0';
    const valorTotalInt = parseInt(valorTotalProduto) || 0;
    const valorFreteInt = parseInt(valorFrete) || 0;

    document.querySelectorAll(".total-valor").forEach(element => {
      if (element.id === "pix") {
        element.textContent = String(parseInt(valorTotalInt * 0.9) + valorFreteInt);
      } else {
        element.textContent = String(valorTotalInt + valorFreteInt);
        this.atualizaValorCartao(element.textContent);
      }
    });
  }

  atualizaValor() {
    const valorProduto = document.querySelector("#produto-valor").textContent || '0';
    const valorResumo = document.querySelector("#resumo-valor");

    document.querySelector("#resumo-quantidade").textContent = this.quantidade.textContent;
    valorResumo.textContent = String(parseInt(valorProduto) * parseInt(this.quantidade.textContent));
    this.atualizaValorTotal(valorResumo.textContent);
  }
}