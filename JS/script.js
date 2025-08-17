// URL da sua API
const apiBase = "https://localhost:7117";

// Seleciona o elemento da lista
const lista = document.getElementById('lista');

// Função para buscar dados da API
async function carregarDadosUsuario() {
  try {
    const endpoint = "/api/usuario";
    const response = await fetch(`${apiBase}${endpoint}`);     // Faz a requisição
    const dados = await response.json();       // Converte para JSON
    console.log(dados);

    const tabela = document.getElementById('tabelaUsuario');

    dados.forEach(item => {
      const tr = document.createElement('tr');

      // Nome
      const tdNome = document.createElement('td');
      tdNome.textContent = item.nome;
      tr.appendChild(tdNome);

      // E-mail
      const tdEmail = document.createElement('td');
      tdEmail.textContent = item.email;
      tr.appendChild(tdEmail);

      // Foto
      const tdFoto = document.createElement('td');
      const img = document.createElement('img');
      img.src = item.foto;
      img.width = 50;  // tamanho opcional
      tdFoto.appendChild(img);
      tr.appendChild(tdFoto);

      // Adiciona a linha na tabela
      tabela.appendChild(tr);
    });

  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

async function carregarDadosTema() {
  try {
    const endpoint = "/api/tema";
    const response = await fetch(`${apiBase}${endpoint}`);     // Faz a requisição
    const dados = await response.json();       // Converte para JSON
    console.log(dados);

    const tabela = document.getElementById('tabelaTema');

    dados.forEach(item => {
      const tr = document.createElement('tr');

      // Descricao
      const tdDescricao = document.createElement('td');
      tdDescricao.textContent = item.descricao;
      tr.appendChild(tdDescricao);

      // Adiciona a linha na tabela
      tabela.appendChild(tr);
    });

  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

async function carregarDadosPostagem() {
  try {
    const endpoint = "/api/postagem";
    const response = await fetch(`${apiBase}${endpoint}`);     // Faz a requisição
    const dados = await response.json();       // Converte para JSON
    console.log(dados);

    const tabela = document.getElementById('tabelaPostagem');

    dados.forEach(item => {
      const tr = document.createElement('tr');

      // Titulo
      const tdTitulo = document.createElement('td');
      tdTitulo.textContent = item.titulo;
      tr.appendChild(tdTitulo);

      //Texto
      const tdTexto = document.createElement('td');
      tdTexto.textContent = item.texto;
      tr.appendChild(tdTexto);

      //Data
      const tdData = document.createElement('td');
      tdData.textContent = item.data;
      tr.appendChild(tdData);

      // Adiciona a linha na tabela
      tabela.appendChild(tr);
    });

  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}


carregarDadosUsuario();

carregarDadosPostagem();

carregarDadosTema();
