// script.js
document.getElementById('gerarUsuario').addEventListener('click', gerarUsuario);

async function gerarUsuario() {
    try {
        // Faz uma requisição à API
        const resposta = await fetch('https://randomuser.me/api/');
        const dados = await resposta.json();

        // Extrai os dados do usuário
        const usuario = dados.results[0];
        const nome = `${usuario.name.first} ${usuario.name.last}`;
        const email = usuario.email;
        const telefone = usuario.phone;
        const localizacao = `${usuario.location.city}, ${usuario.location.country}`;
        const imagem = usuario.picture.large;

        // Exibe as informações na página
        const usuarioInfo = document.getElementById('usuarioInfo');
        usuarioInfo.innerHTML = `
            <img src="${imagem}" alt="Foto do Usuário" style="border-radius: 50%; width: 100px; height: 100px;">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Localização:</strong> ${localizacao}</p>
        `;
    } catch (erro) {
        console.error('Erro ao buscar usuário:', erro);
        document.getElementById('usuarioInfo').innerHTML = '<p>Erro ao carregar usuário. Tente novamente.</p>';
    }
}