const btnAvanca = document.querySelectorAll('.btn-próxima');

btnAvanca.forEach(btn => {
    btn.addEventListener('click', function() {
        const ativo = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        ativo.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
