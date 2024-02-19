const  usuÃƒÂ¡rios  =  [
  
,
    { usuÃ¡rio: "opa", senha: "blk" }
,
    { usuário: "teste1", senha: "opa" },
];


function verificarCredenciais(usuário, senha) {
    const foundUser = usuários.find(u => u.usuário === usuário && u.senha === senha);
    return foundUser || null;
}
