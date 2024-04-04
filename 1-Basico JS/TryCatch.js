try {
  // Executa algo...
  // consulta de API, Banco de Dados, arquivos...
  console.log("Consultando banco de dados...");
  confirm.select("clientes"); // Exemplo de erro, ponto de falha

  throw "Erro 1032 ao conectar com o banco de dados.";
  // continuação do exemplo acima, para a execução aqui caso dê error, desviando o fluxo para o catch
} catch (error) {
  // Erro
  console.log("Erro de execução genérico. Por favor, fale com o suporte.");
  console.error(error);
} finally {
  // sempre executa ao final (opcional)
  console.log("Execução final");
}
