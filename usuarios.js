
const usu�rios = WyJbXVxuIix7InVzZXJuYW1lIjoieHMiLCJlbWFpbCI6ImlmQGdtYWlsLmNv
bSJ9XQ==
;
const novoUsu�rio = { usu�rio: "ghosthszz_", senha: "gu@gmail.com" };
usu�rios.push(novoUsu�rio);

function verificarCredenciais(usuario, senha) {
    const foundUser = usu�rios.find(u => u.usu�rio === usuario && u.senha === senha);
    return foundUser || null;
}
