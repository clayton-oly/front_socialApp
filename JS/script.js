// URL da sua API local
// const apiBase = "https://localhost:7117";

// URL da sua API
const apiBase = "https://api-socialapp-l0da.onrender.com";

// Função para buscar dados da API
async function carregarDadosUsuario() {
  try {
    const endpoint = "/api/usuario";
    const response = await fetch(`${apiBase}${endpoint}`);
    const dados = await response.json();
    console.log(dados);

    const tabela = document.getElementById('tabelaUsuario');

    dados.forEach(item => {
      const tr = document.createElement('tr');

      const tdNome = document.createElement('td');
      tdNome.textContent = item.nome;
      tr.appendChild(tdNome);

      const tdEmail = document.createElement('td');
      tdEmail.textContent = item.email;
      tr.appendChild(tdEmail);

      const tdFoto = document.createElement('td');
      const img = document.createElement('img');
      img.src = item.foto;
      img.width = 150;
      tdFoto.appendChild(img);
      tr.appendChild(tdFoto);

      tabela.appendChild(tr);
    });

  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

async function carregarDadosTema() {
  try {
    const endpoint = "/api/tema";
    const response = await fetch(`${apiBase}${endpoint}`);
    const dados = await response.json();
    console.log(dados);

    const tabela = document.getElementById('tabelaTema');

    dados.forEach(item => {
      const tr = document.createElement('tr');

      const tdDescricao = document.createElement('td');
      tdDescricao.textContent = item.descricao;
      tr.appendChild(tdDescricao);

      tabela.appendChild(tr);
    });

  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

async function carregarDadosPostagem() {
  try {
    const endpoint = "/api/postagem";
    const response = await fetch(`${apiBase}${endpoint}`);
    const dados = await response.json();
    console.log(dados);

    const tabela = document.getElementById('tabelaPostagem');

    dados.forEach(item => {
      const tr = document.createElement('tr');

      const tdFoto = document.createElement('td');
      const img = document.createElement('img');
      img.src = item.usuario.foto;
      img.width = 150;
      tdFoto.appendChild(img);
      tr.appendChild(tdFoto);

      const tdNome = document.createElement('td');
      tdNome.textContent = item.usuario.nome;
      tr.appendChild(tdNome);

      const tdTitulo = document.createElement('td');
      tdTitulo.textContent = item.titulo;
      tr.appendChild(tdTitulo);

      const tdTexto = document.createElement('td');
      tdTexto.textContent = item.texto;
      tr.appendChild(tdTexto);

      const tdData = document.createElement('td');
      tdData.textContent = item.data;
      tr.appendChild(tdData);

      tabela.appendChild(tr);
    });

  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

if(document.getElementById('tabelaUsuario') != null) carregarDadosUsuario();

if(document.getElementById('tabelaPostagem') != null)carregarDadosPostagem();

if(document.getElementById('tabelaTema') != null) carregarDadosTema();
