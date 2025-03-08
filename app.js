const WebSocket = require('ws');

// Função para verificar se o servidor WebSocket está respondendo
const checkServerStatusWebSocket = () => {
    return new Promise((resolve, reject) => {
        const socket = new WebSocket("wss://chat-niha.onrender.com");

        socket.onopen = () => {
            console.log("Conexão WebSocket estabelecida com sucesso.");

            // Enviar mensagem automaticamente após a conexão ser estabelecida
            socket.send("Olá, esta é uma mensagem do sistema!");

            // Espera para garantir que a mensagem seja enviada antes de continuar
            console.log("Mensagem enviada, mantendo a conexão aberta.");
            resolve(true);
        };

        socket.onerror = (error) => {
            console.error("Erro ao conectar ao servidor WebSocket:", error);
            reject("Erro ao conectar ao servidor");
        };
    });
};

// Função para verificar a conexão a cada 1 minuto e enviar mensagens
const startCheckingServer = () => {
    setInterval(async () => {
        try {
            await checkServerStatusWebSocket();
            console.log("Servidor está respondendo e a mensagem foi enviada.");
        } catch (error) {
            console.error("Erro ao verificar servidor:", error);
        }
    }, 60000); // 1 minuto em milissegundos
};

// Iniciar o processo
startCheckingServer();
