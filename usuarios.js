
const usuários = WyJbXVxuIix7InVzZXJuYW1lIjoieHMiLCJlbWFpbCI6ImlmQGdtYWlsLmNv
bSJ9XQ==
;
const novoUsuário = { usuário: "ghosthszz_", senha: "gu@gmail.com" };
usuários.push(novoUsuário);

function verificarCredenciais(usuario, senha) {
    const foundUser = usuários.find(u => u.usuário === usuario && u.senha === senha);
    return foundUser || null;
}
