const { Octokit } = require('@octokit/rest');

async function adicionarUsuario(username, email) {
    const octokit = new Octokit({
        auth: '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'
    });

    const owner = 'Gustavo';
    const repo = 'criar';
    const filePath = 'usuarios.json';

    try {
        // Obter conteúdo atual do arquivo
        const { data } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner,
            repo,
            path: filePath,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });

        // Decodificar conteúdo do arquivo
        const fileContent = Buffer.from(data.content, 'base64').toString();
        const users = JSON.parse(fileContent);

        // Adicionar novo usuário
        users.push({ username, email });

        // Atualizar arquivo
        await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
            owner,
            repo,
            path: filePath,
            message: 'Adicionando novo usuário',
            content: Buffer.from(JSON.stringify(users)).toString('base64'),
            sha: data.sha,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });

        console.log('Usuário adicionado com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
    }
}

// Exemplo de uso:
adicionarUsuario('novoUsuario', 'novoUsuario@example.com');
