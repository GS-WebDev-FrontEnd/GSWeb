// preferencias.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-preferencias');
  const telefoneInput = form.telefone;

  // Máscara de telefone (formato brasileiro)
  telefoneInput.addEventListener('input', () => {
    let tel = telefoneInput.value.replace(/\D/g, '');
    tel = tel.replace(/^(\d{2})(\d)/, '($1) $2');
    tel = tel.replace(/(\d{5})(\d{4})$/, '$1-$2');
    telefoneInput.value = tel;
  });

  // Pré-carregar preferências salvas (se houver)
  const salvas = JSON.parse(localStorage.getItem('preferenciasNotificacao'));
  if (salvas) {
    form.email.value = salvas.email || '';
    form.telefone.value = salvas.telefone || '';
    form.bairro.value = salvas.bairro || '';
    document.querySelectorAll('input[name="canal"]').forEach(input => {
      input.checked = salvas.canais.includes(input.value);
    });
  }

  // Ao enviar o formulário
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const canais = Array.from(form.querySelectorAll('input[name="canal"]:checked')).map(el => el.value);
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const bairro = form.bairro.value.trim();

    if (!email || !telefone || !bairro) {
      alert('Por favor, preencha todos os campos: e-mail, telefone e bairro.');
      return;
    }

    const preferencias = { canais, email, telefone, bairro };
    localStorage.setItem('preferenciasNotificacao', JSON.stringify(preferencias));
    alert('✅ Preferências salvas com sucesso!');
  });
});
