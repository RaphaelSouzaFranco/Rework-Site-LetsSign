// Função para habilitar edição de campos
function enableEdit(fieldId) {
    const field = document.getElementById(fieldId);
    field.removeAttribute('disabled');
    field.focus();
}

// Simulação de salvamento do formulário
document.getElementById('edit-profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Alterações salvas com sucesso!');
    // Aqui você adicionaria a lógica para enviar os dados para o servidor
});

// Simulação de alteração de senha
document.getElementById('change-password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const currentPass = document.getElementById('current-password').value;
    const newPass = document.getElementById('new-password').value;
    const confirmPass = document.getElementById('confirm-password').value;
    
    if (newPass !== confirmPass) {
        alert('As senhas não coincidem!');
        return;
    }
    
    // Aqui você adicionaria a lógica para validar e alterar a senha
    alert('Senha alterada com sucesso!');
    this.reset();
});