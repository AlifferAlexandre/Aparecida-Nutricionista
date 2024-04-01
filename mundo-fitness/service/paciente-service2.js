// Função para obter a lista de pacientes do servidor
export const listaPacientes = () => {
    // Faz uma requisição para o servidor
    return fetch('http://localhost:3000/profile').then(resposta => {
        // Retorna os dados em formato JSON
        return resposta.json();
    });
}

// Função para criar um novo paciente no servidor
export const criarPaciente = (nome, peso, altura, gordura, imc) => {
    // Envia uma requisição POST para o servidor com os dados do novo paciente
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            peso: peso,
            altura: altura,
            gordura: gordura,
            imc: imc
        })
    }).then(resposta => {
        // Retorna a resposta do servidor
        return resposta.body
    })
}

// Função para remover um paciente do servidor
const removerPaciente = (id) => {
    // Envia uma requisição DELETE para o servidor para remover o paciente com o ID fornecido
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

// Função para obter detalhes de um paciente do servidor
const detalhaPaciente = (id) => {
    // Faz uma requisição para o servidor para obter os detalhes do paciente com o ID fornecido
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        // Retorna os detalhes do paciente em formato JSON
        return resposta.json();
    })
}

// Função para atualizar os detalhes de um paciente no servidor
const atualizaPaciente = (id, nome, peso, altura, gordura, imc) => {
    // Envia uma requisição PUT para o servidor com os novos detalhes do paciente
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            peso: peso,
            altura: altura,
            gordura: gordura,
            imc: imc
        })
    }).then(resposta => {
        // Retorna a resposta do servidor em formato JSON
        return resposta.json()
    })
}

// Exporta todas as funções como um objeto para serem usadas externamente
export const pacienteService = {
    listaPacientes,
    criarPaciente,
    removerPaciente,
    detalhaPaciente,
    atualizaPaciente
}
