const  usuÃƒÆ’Ã‚Â¡rios  =  [
  
,
    { usuÃƒÂ¡rio: "opa", senha: "blk" }
,
    { usuÃ¡rio: "teste1", senha: "opa" },
,
    {  usuário : "xs" , senha: "xs"  } ,
];

function verificarCredenciais(usuário, senha) {
    const foundUser = usuários.find(u => u.usuário === usuário && u.senha === senha);
    return foundUser || null;
}
