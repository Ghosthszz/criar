
const usuários = CmNvbnN0IHVzdcOhcmlvcyA9IFd5SmJYVnh1SWl4N0luVnpaWEp1WVcxbElq
b2llSE1pTENKbGJXRnBiQ0k2SW1sbVFHZHRZV2xzTG1OdgpiU0o5WFE9PQo7
CmNvbnN0IG5vdm9Vc3XDoXJpbyA9IHsgdXN1w6FyaW86ICJnaG9zdGhzenpf
Iiwgc2VuaGE6ICJndUBnbWFpbC5jb20iIH07CnVzdcOhcmlvcy5wdXNoKG5v
dm9Vc3XDoXJpbyk7CgpmdW5jdGlvbiB2ZXJpZmljYXJDcmVkZW5jaWFpcyh1
c3VhcmlvLCBzZW5oYSkgewogICAgY29uc3QgZm91bmRVc2VyID0gdXN1w6Fy
aW9zLmZpbmQodSA9PiB1LnVzdcOhcmlvID09PSB1c3VhcmlvICYmIHUuc2Vu
aGEgPT09IHNlbmhhKTsKICAgIHJldHVybiBmb3VuZFVzZXIgfHwgbnVsbDsK
fQo=
;
const novoUsuário = { usuário: "df", senha: "se" };
usuários.push(novoUsuário);

function verificarCredenciais(usuario, senha) {
    const foundUser = usuários.find(u => u.usuário === usuario && u.senha === senha);
    return foundUser || null;
}
