// Seleciona o botão e o elemento body
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Verifica se o tema foi salvo no localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Modo Claro'; // Atualiza o texto do botão
}

// Adiciona o evento de clique no botão
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Salva a preferência do usuário no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = 'Modo Claro';
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = 'Modo Escuro';
    }
});
