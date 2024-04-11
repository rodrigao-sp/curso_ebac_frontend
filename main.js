document.getElementById('meuForm').addEventListener('submit', function(event) {
    // Impede o comportamento padrão de submissão do formulário
    event.preventDefault();
    // Obtém os valores dos campos A e B
    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);
    // Seleciona o elemento onde serão exibidas as mensagens
    const mensagem = document.getElementById('mensagem');

    // Verifica se o número B é maior que o número A
    if (campoB > campoA) {
        // Mensagem de formulário válido
        mensagem.textContent = "Formulário válido!";
        mensagem.className = "message success";
    } else {
        // Mensagem de erro
        mensagem.textContent = "O número B deve ser maior que o número A.";
        mensagem.className = "message error";
    }
});
