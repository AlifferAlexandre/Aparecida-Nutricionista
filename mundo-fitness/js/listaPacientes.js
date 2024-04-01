// Importa o serviço de pacientes
import { pacienteService } from "../service/paciente-service2.js";

// Função para criar uma nova linha na tabela de pacientes
const novaLinha = (nome, peso, altura, gordura, imc, id) => {
    // Cria um novo elemento de linha (<tr>)
    const linhaNovoPaciente = document.createElement("tr");
    // Adiciona a classe "paciente" à linha
    linhaNovoPaciente.classList.add("paciente");

    // Define o conteúdo HTML da linha
    const conteudo = `
    <td class="info-nome">${nome}</td>
    <td class="info-peso">${peso}</td>
    <td class="info-altura">${altura}</td>
    <td class="info-gordura">${gordura}</td>
    <td class="info-imc">${imc}</td>
    <td class="info-acao"><a href="../editar.html?id=${id}">Editar</a></td>`;

    // Define o conteúdo HTML da linha
    linhaNovoPaciente.innerHTML = conteudo;
    // Define o ID do paciente como um atributo de dados na linha
    linhaNovoPaciente.dataset.id = id;
    return linhaNovoPaciente;
}

// Seleciona a tabela de pacientes
const tabela = document.querySelector("#tabela-pacientes");

// Adiciona um listener de evento de clique duplo na tabela
tabela.addEventListener('dblclick', (evento) => {
    // Obtém a linha do paciente clicado
    const linhaPaciente = evento.target.closest("[data-id]");
    // Obtém o ID do paciente
    let id = linhaPaciente.dataset.id;

    // Remove o paciente do servidor e, em seguida, remove a linha da tabela
    pacienteService.removerPaciente(id).then(() => {
        linhaPaciente.remove();
    })
})

// Obtém a lista de pacientes do servidor e adiciona-os à tabela
pacienteService.listaPacientes().then(promise => {
    promise.forEach(element => {
        tabela.appendChild(novaLinha(element.nome, element.peso, element.altura, element.gordura, element.imc, element.id));
    });
});
