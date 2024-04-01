// Seleciona o campo de filtro da tabela
var campoFiltro = document.querySelector("#filtrar-tabela");

// Adiciona um listener de evento de entrada ao campo de filtro
campoFiltro.addEventListener("input", function() {
    // Exibe no console o valor atual do campo de filtro
    console.log(this.value);
    
    // Seleciona todos os pacientes na tabela
    var pacientes = document.querySelectorAll(".paciente");

    // Verifica se o valor do campo de filtro não está vazio
    if (this.value.length > 0) {
        // Loop através de todos os pacientes
        for (let i = 0; i < pacientes.length; i++) {
            // Seleciona o paciente atual
            var paciente = pacientes[i];
            // Seleciona o elemento de nome do paciente dentro do paciente atual
            var tdNome = paciente.querySelector(".info-nome");
            // Obtém o texto do nome do paciente
            var nome = tdNome.textContent;

            // Cria uma expressão regular com o valor do campo de filtro e a flag "i" (ignorar maiúsculas/minúsculas)
            var expressao = new RegExp(this.value, "i");
            
            // Testa se o nome do paciente corresponde à expressão regular
            if (expressao.test(nome)) {
                // Remove a classe "invisivel" do paciente se corresponder à pesquisa
                paciente.classList.remove("invisivel");
            } else {
                // Adiciona a classe "invisivel" ao paciente se não corresponder à pesquisa
                paciente.classList.add("invisivel");
            }
        }
    } else {
        // Se o campo de filtro estiver vazio, mostra todos os pacientes
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
