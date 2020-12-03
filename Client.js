const informacoesClientes = [
  {
    cpf: 18875539081,
    nome: "Elena",
  },
];

const conteudoLinha = 
`<tr>
  <td>${informacoesClientes[0].cpf}</td>
  <td>${informacoesClientes[0].nome}</td>
</tr>`;

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

corpoTabela.innerHTML = conteudoLinha;
