// Importa o serviço de pacientes do arquivo paciente-service2.js
import { pacienteService } from "../service/paciente-service2.js";

// Obtém a URL atual
const getURL = new URL(window.location);

// Obtém o parâmetro 'id' da URL
const id = getURL.searchParams.get('id');

// Seleciona os campos de entrada de dados
const inputNome = document.querySelector("#nome");
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const inputGordura = document.querySelector("#gordura");

// Obtém os detalhes do paciente com o ID fornecido
pacienteService.detalhaPaciente(id)
    .then(dados => {
        // Preenche os campos de entrada com os dados do paciente
        inputNome.value = dados.nome
        inputPeso.value = dados.peso
        inputAltura.value = dados.altura
        inputGordura.value = dados.gordura
        // Calcula o IMC com base nos dados do paciente
        const imc = (dados.peso / (dados.altura ** 2)).toFixed(2);

        // Seleciona o botão de adicionar paciente
        const botao = document.querySelector("#adicionar-paciente");
        // Adiciona um listener de evento de clique ao botão
        botao.addEventListener('click', () => {
            // Chama a função de atualização do serviço de pacientes com os novos dados do paciente
            pacienteService.atualizaPaciente(id, inputNome.value, inputPeso.value, inputAltura.value, inputGordura.value, imc).then(() => {
                // Exibe um alerta informando que a atualização foi realizada com sucesso
                alert("Atualizado com sucesso!");
                // Redireciona para a página inicial
                window.location.href = "../index.html";
            })
        });
    });
