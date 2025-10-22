// Captura o botão de alternância e o corpo do documento
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o modo escuro está ativado e ajusta a classe
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Alterna a classe 'dark-mode'
    
    // Atualiza o texto do botão dependendo do modo
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Modo Claro'; // Exibe "Modo Claro" quando no modo escuro
        themeToggleButton.setAttribute('aria-label', 'Alternar para modo claro');
    } else {
        themeToggleButton.textContent = 'Modo Escuro'; // Exibe "Modo Escuro" quando no modo claro
        themeToggleButton.setAttribute('aria-label', 'Alternar para modo escuro');
    }
});
