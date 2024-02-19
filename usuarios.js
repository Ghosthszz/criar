const  usuÃƒÆ’Ã‚Â¡rios  =  [
  
{"usuario": "user1", "senha": "senha1"},
    {"usuario": "user2", "senha": "senha2"},
    {"usuario": "user3", "senha": "senha3"},

function verificarCredenciais(usuário, senha) {
    const foundUser = usuários.find(u => u.usuário === usuário && u.senha === senha);
    return foundUser || null;
}
