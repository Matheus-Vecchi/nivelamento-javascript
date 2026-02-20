let app = "MinhaApp";

function test() {
    let versao = "1.0";
    console.log(app);
    console.log(versao);
}

test();
//console.log(versao) //ocorrerá erro de execução, pois tentamos acessar uma variável local

function executarTarefa(nomeTarefa, callback) {
    console.log("Iniciando: " + nomeTarefa)
    callback();
}

executarTarefa("Do homework ", () => console.log("Tarefa concluída!"))

async function buscarPerfil() {
    return "Perfil carregado: Usuário Padrão"
}

buscarPerfil().then(console.log);
