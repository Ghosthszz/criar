function adicionarUsuario(username, email) {
    var githubToken = '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';
    var owner = 'Gustavo';
    var repo = 'criar';
    var filePath = 'usuários.json';

    // Construa a URL da API do GitHub para o arquivo específico
    var apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

    // Configuração da requisição para obter o conteúdo do arquivo
    var requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': 'token ' + githubToken,
            'User-Agent': 'Ghosthszz'
        }
    };

    // Faça uma requisição GET para obter o conteúdo atual do arquivo
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter conteúdo do arquivo');
            }
            return response.json();
        })
        .then(data => {
            // Decodifique o conteúdo do arquivo
            var fileContent = window.atob(data.content);
            // Converta o conteúdo em um objeto JavaScript
            var users = JSON.parse(fileContent);
            // Adicione o novo usuário
            users.push({ username: username, email: email });

            // Configuração da requisição para atualizar o arquivo
            var updateOptions = {
                method: 'PUT',
                headers: {
                    'Authorization': 'token ' + githubToken,
                    'Content-Type': 'application/json',
                    'User-Agent': 'Ghosthszz'
                },
                body: JSON.stringify({
                    message: 'Adicionando novo usuário',
                    content: window.btoa(JSON.stringify(users)),
                    sha: data.sha
                })
            };

            // Faça uma requisição PUT para atualizar o arquivo
            return fetch(apiUrl, updateOptions);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao atualizar arquivo');
            }
            alert('Usuário adicionado com sucesso!');
        })
        .catch(error => {
            console.error(error);
            alert('Erro ao adicionar usuário');
        });
}
