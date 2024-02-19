const usuários = [
    {"usuario": "user1", "senha": "senha1"},
    {"usuario": "user2", "senha": "senha2"},
    {"usuario": "user3", "senha": "senha3"}
];

function verificarCredenciais(usuario, senha) {
    const foundUser = usuários.find(u => u.usuario === usuario && u.senha === senha);
    return foundUser || null;
}
