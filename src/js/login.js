 document.getElementById('login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const cpf = document.getElementById('cpf').value.trim();
      if (cpf) {
        localStorage.setItem('usuarioSimulado', cpf);
        window.location.href = './configuracoes.html';
      }
    });