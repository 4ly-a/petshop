fetch("http://localhost:4000/clientes")
  .then((resposta) => {
    return resposta.json();
  })
  .then((json) => {
    return json;
  });
