// Importa o serviço de pacientes e a função criarPaciente do arquivo paciente-service2.js
import { pacienteService, criarPaciente } from "../service/paciente-service2.js";

// Seleciona o botão de adicionar paciente
const botao = document.querySelector("#adicionar-paciente");

// Adiciona um listener de evento de clique ao botão
botao.addEventListener('click', () => {
    // Obtém os valores dos campos de entrada
    const nome = document.querySelector("#nome").value;
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const gordura = document.querySelector("#gordura").value;
    // Calcula o IMC com base no peso e altura fornecidos
    const imc = (peso / (altura ** 2)).toFixed(2);

    // Chama a função criarPaciente do serviço de pacientes, passando os valores como parâmetros
    pacienteService.criarPaciente(nome, peso, altura, gordura, imc).then(() => {
        // Exibe um alerta informando que o cadastro foi realizado com sucesso
        alert("Cadastro realizado com sucesso!");
        // Recarrega a página para exibir o novo paciente na tabela
        location.reload();
    });
});
