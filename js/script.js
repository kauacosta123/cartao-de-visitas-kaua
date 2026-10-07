const botaoTema = document.querySelector('.botao-tema');

// função para adicionar evento ao clicar no botão de tema
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');
});