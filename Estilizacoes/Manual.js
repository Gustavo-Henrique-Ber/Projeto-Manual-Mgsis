// Aguarda o documento HTML ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    // Captura os elementos necessários do HTML utilizando os IDs que definimos
    const mobileBtn = document.getElementById('mgsis-toggle-btn'); // O botão hambúrguer
    const navMenu = document.getElementById('mgsis-nav-menu'); // O container do menu de navegação
    const header = document.getElementById('mgsis-main-header'); // O cabeçalho inteiro

    // FUNCIONALIDADE 1: Abrir e Fechar Menu Mobile
    // Adiciona um ouvinte de evento para cliques no botão hambúrguer
    mobileBtn.addEventListener('click', function () {
        // O método 'toggle' adiciona a classe 'active' se ela não existir, ou remove se já existir.
        // Isso faz o menu deslizar para dentro e as linhas do botão virarem um "X"
        navMenu.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });

    // FUNCIONALIDADE 2: Fechar o menu ao clicar em um link (Melhora a experiência do usuário em celulares)
    // Captura todos os links dentro do menu
    const navLinks = document.querySelectorAll('.mgsis-nav-link, .mgsis-support-action');

    // Para cada link encontrado, adiciona um evento de clique
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove a classe 'active' para fechar o menu e voltar o botão ao formato original
            navMenu.classList.remove('active');
            mobileBtn.classList.remove('active');
        });
    });

    // FUNCIONALIDADE 3: Efeito dinâmico na sombra do cabeçalho ao rolar a página
    // Ouve o evento de 'scroll' (rolagem) da janela (browser)
    window.addEventListener('scroll', function () {
        // Se a rolagem vertical (scrollY) for maior que 10 pixels...
        if (window.scrollY > 10) {
            // Adiciona a classe 'scrolled', que no CSS aumenta a sombra do cabeçalho
            header.classList.add('scrolled');
        } else {
            // Se voltar para o topo, remove a classe, retornando à sombra suave original
            header.classList.remove('scrolled');
        }
    });

});

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // 6. DEIXAR O MENU LATERAL ATIVO AUTOMATICAMENTE
    // ==========================================

    // 1. Descobre qual é a página atual na barra de endereços (ex: 'estoque.html')
    let paginaAtual = window.location.pathname.split('/').pop();

    // Se a pessoa estiver na raiz do site (sem nome de arquivo), consideramos o index
    if (paginaAtual === '' || paginaAtual === '/') {
        // Mude para 'cadastros.html' se a sua página principal não se chamar index.html
        paginaAtual = 'index.html';
    }

    // 2. Seleciona todos os links do menu lateral
    const linksDoMenu = document.querySelectorAll('.mgsis-sidebar-link');

    linksDoMenu.forEach(link => {
        // 3. Pega para onde o link aponta (o href)
        const destinoDoLink = link.getAttribute('href');

        // 4. Remove a classe 'active' de todos por precaução (tira o azul)
        link.classList.remove('active');

        // 5. Compara: Se o link aponta para a página que estamos agora...
        if (destinoDoLink === paginaAtual) {
            // Adiciona a classe 'active' (coloca o azul!)
            link.classList.add('active');
        }
    });

});

document.addEventListener('DOMContentLoaded', function () {

    // Capturando as duas telas
    const telaPrincipal = document.getElementById('mgsis-tela-principal');
    const telaDetalhes = document.getElementById('mgsis-tela-detalhes');

    // Capturando os botões de ação
    const btnAbrirProduto = document.getElementById('btn-modulo-produto');
    const btnVoltar = document.getElementById('btn-voltar-principal');

    // Função para abrir a tela de Detalhes
    if (btnAbrirProduto && telaPrincipal && telaDetalhes) {
        btnAbrirProduto.addEventListener('click', function () {
            // Esconde a principal
            telaPrincipal.classList.remove('mgsis-view-active');
            telaPrincipal.classList.add('mgsis-view-hidden');

            // Mostra a de detalhes
            telaDetalhes.classList.remove('mgsis-view-hidden');
            telaDetalhes.classList.add('mgsis-view-active');

            // Rola a página para o topo suavemente (boa prática de usabilidade)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Função para Voltar para a tela Principal
    if (btnVoltar && telaPrincipal && telaDetalhes) {
        btnVoltar.addEventListener('click', function () {
            // Esconde a de detalhes
            telaDetalhes.classList.remove('mgsis-view-active');
            telaDetalhes.classList.add('mgsis-view-hidden');

            // Mostra a principal de volta
            telaPrincipal.classList.remove('mgsis-view-hidden');
            telaPrincipal.classList.add('mgsis-view-active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});

document.addEventListener('DOMContentLoaded', function () {
    // 1. Captura a Tela Principal (que é comum para todos)
    const telaPrincipal = document.getElementById('mgsis-tela-principal');

    // --- LÓGICA PARA EMPRESA ---
    const btnEmpresa = document.getElementById('mgsis-btn-empresa');
    const telaEmpresa = document.getElementById('mgsis-tela-empresa');

    if (btnEmpresa && telaEmpresa && telaPrincipal) {
        btnEmpresa.addEventListener('click', function () {
            telaPrincipal.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
            telaEmpresa.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Botões de voltar dentro da Empresa
        const botoesVoltarEmpresa = telaEmpresa.querySelectorAll('.mgsis-btn-voltar');
        botoesVoltarEmpresa.forEach(botao => {
            botao.addEventListener('click', function () {
                telaEmpresa.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
                telaPrincipal.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // --- LÓGICA PARA TRANSPORTE ---
    const btnTransporte = document.getElementById('mgsis-btn-transporte');
    const telaTransporte = document.getElementById('mgsis-tela-transporte');

    if (btnTransporte && telaTransporte && telaPrincipal) {
        btnTransporte.addEventListener('click', function () {
            telaPrincipal.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
            telaTransporte.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Botões de voltar dentro de Transporte
        const botoesVoltarTransporte = telaTransporte.querySelectorAll('.mgsis-btn-voltar');
        botoesVoltarTransporte.forEach(botao => {
            botao.addEventListener('click', function () {
                telaTransporte.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
                telaPrincipal.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // --- LÓGICA PARA CLIENTE ---
    const btnCliente = document.getElementById('mgsis-btn-cliente');
    const telaCliente = document.getElementById('mgsis-tela-cliente');

    if (btnCliente && telaCliente && telaPrincipal) {
        btnCliente.addEventListener('click', function () {
            telaPrincipal.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
            telaCliente.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Botões de voltar dentro de cliente
        const botoesVoltarCliente = telaCliente.querySelectorAll('.mgsis-btn-voltar');
        botoesVoltarCliente.forEach(botao => {
            botao.addEventListener('click', function () {
                telaCliente.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
                telaPrincipal.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // --- LÓGICA PARA FORNECEDOR ---
    const btnFornecedor = document.getElementById('mgsis-btn-fornecedor');
    const telaFornecedor = document.getElementById('mgsis-tela-fornecedor');

    if (btnFornecedor && telaFornecedor && telaPrincipal) {
        btnFornecedor.addEventListener('click', function () {
            telaPrincipal.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
            telaFornecedor.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Botões de voltar dentro de fornecedor
        const botoesVoltarFornecedor = telaFornecedor.querySelectorAll('.mgsis-btn-voltar');
        botoesVoltarFornecedor.forEach(botao => {
            botao.addEventListener('click', function () {
                telaFornecedor.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
                telaPrincipal.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // --- LÓGICA PARA COLABORADOR ---
    const btnColaborador = document.getElementById('mgsis-btn-colaborador');
    const telaColaborador = document.getElementById('mgsis-tela-colaborador');

    if (btnColaborador && telaColaborador && telaPrincipal) {
        btnColaborador.addEventListener('click', function () {
            telaPrincipal.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
            telaColaborador.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Botões de voltar dentro de colaborador
        const botoesVoltarColaborador = telaColaborador.querySelectorAll('.mgsis-btn-voltar');
        botoesVoltarColaborador.forEach(botao => {
            botao.addEventListener('click', function () {
                telaColaborador.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
                telaPrincipal.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // --- LÓGICA PARA SEGMENTO ---
    const btnSegmento = document.getElementById('mgsis-btn-segmento');
    const telaSegmento = document.getElementById('mgsis-tela-segmento');

    if (btnSegmento && telaSegmento && telaPrincipal) {
        btnSegmento.addEventListener('click', function () {
            telaPrincipal.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
            telaSegmento.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Botões de voltar dentro de segmento
        const botoesVoltarSegmento = telaSegmento.querySelectorAll('.mgsis-btn-voltar');
        botoesVoltarSegmento.forEach(botao => {
            botao.addEventListener('click', function () {
                telaSegmento.classList.replace('mgsis-view-active', 'mgsis-view-hidden');
                telaPrincipal.classList.replace('mgsis-view-hidden', 'mgsis-view-active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }


});

document.addEventListener('DOMContentLoaded', function () {

    const modal = document.getElementById('mgsis-modal-imagem');
    const modalImg = document.getElementById('mgsis-img-ampliada');
    const legenda = document.getElementById('mgsis-modal-legenda');
    const spanFechar = document.querySelector('.mgsis-modal-fechar');

    // Seleciona todos os overlays de "Visualizar"
    const overlays = document.querySelectorAll('.mgsis-img-overlay');

    overlays.forEach(overlay => {
        overlay.addEventListener('click', function () {
            // Pega a imagem que está dentro do mesmo card que o overlay
            const imgOriginal = this.parentElement.querySelector('img');
            const textoInfo = this.parentElement.parentElement.querySelector('.mgsis-img-info span');

            modal.style.display = "block";
            modalImg.src = imgOriginal.src; // Copia o caminho da imagem
            legenda.innerHTML = textoInfo.innerHTML; // Copia a legenda
        });
    });

    // Fecha o modal ao clicar no X
    if (spanFechar) {
        spanFechar.onclick = function () {
            modal.style.display = "none";
        }
    }

    // Fecha o modal ao clicar fora da imagem
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {

    // Seleciona todos os botões de galeria do site
    const botoesToggle = document.querySelectorAll('.mgsis-btn-toggle-galeria');

    botoesToggle.forEach(botao => {
        botao.addEventListener('click', function () {
            // Encontra a área de imagens que está logo após este botão
            const areaImagens = this.nextElementSibling;

            // Alterna a classe para mostrar/esconder
            areaImagens.classList.toggle('show');

            // Alterna a classe no botão para girar a seta
            this.classList.toggle('active');

            // Texto dinâmico (opcional)
            const span = this.querySelector('span');
            if (this.classList.contains('active')) {
                span.textContent = "Ocultar Capturas de Tela";
            } else {
                span.textContent = "Ver Capturas de Tela do Sistema";
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {

    // Seleciona os botões de toggle do guia
    const botoesGuia = document.querySelectorAll('.mgsis-btn-toggle-guia');

    botoesGuia.forEach(botao => {
        botao.addEventListener('click', function () {
            // Encontra o corpo do guia que está logo após o botão
            const corpoGuia = this.nextElementSibling;

            // Alterna as classes para mostrar/esconder
            corpoGuia.classList.toggle('show');
            this.classList.toggle('active');
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {

    // Seleciona todos os botões de aba
    const tabButtons = document.querySelectorAll('.mgsis-tab-btn');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            // 1. Encontra o container pai (para não afetar outras abas da página)
            const container = this.closest('.mgsis-abas-container');

            // 2. Remove 'active' de todos os botões e conteúdos DESTE container
            container.querySelectorAll('.mgsis-tab-btn').forEach(b => b.classList.remove('active'));
            container.querySelectorAll('.mgsis-tab-pane').forEach(p => p.classList.remove('active'));

            // 3. Adiciona 'active' no botão clicado
            this.classList.add('active');

            // 4. Mostra o conteúdo correspondente pelo ID
            const tabId = this.getAttribute('data-tab');
            container.querySelector('#' + tabId).classList.add('active');
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {

    // Seleciona os botões específicos das abas
    const botoesAbaImg = document.querySelectorAll('.mgsis-aba-img-btn-toggle');

    botoesAbaImg.forEach(botao => {
        botao.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation(); // Impede que o clique "suba" e afete a aba

            // Encontra a galeria que está logo após este botão
            const galeria = this.nextElementSibling;
            const textoBtn = this.querySelector('.mgsis-aba-img-btn-texto');

            // Alterna a exibição usando STYLE direto para não ter erro com classes
            if (galeria.style.display === "block") {
                galeria.style.display = "none";
                this.classList.remove('mgsis-aba-img-active');
                textoBtn.textContent = "Ver Capturas desta Aba";
            } else {
                galeria.style.display = "block";
                this.classList.add('mgsis-aba-img-active');
                textoBtn.textContent = "Ocultar Capturas desta Aba";
            }
        };
    });
});

document.addEventListener('DOMContentLoaded', function () {

    // 1. SISTEMA DE SANFONA (Abrir e fechar as perguntas)
    const faqCards = document.querySelectorAll('.mgsis-faq-card');

    faqCards.forEach(card => {
        const header = card.querySelector('.mgsis-faq-pergunta');
        const content = card.querySelector('.mgsis-faq-resposta');

        header.addEventListener('click', () => {
            const isOpen = card.classList.contains('open');

            // Opcional: Fechar todas as outras abertas (Remove se quiser abrir várias junto)
            faqCards.forEach(otherCard => {
                otherCard.classList.remove('open');
                otherCard.querySelector('.mgsis-faq-resposta').style.maxHeight = null;
            });

            if (!isOpen) {
                card.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // 2. SISTEMA DE FILTRO (As pílulas de navegação)
    const catButtons = document.querySelectorAll('.mgsis-cat-btn');

    catButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove classe active de todos os botões e coloca no clicado
            catButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const categoriaAlvo = this.getAttribute('data-filter');

            // Passa por todos os cards para esconder/mostrar
            faqCards.forEach(card => {
                // Fecha o card caso ele estivesse aberto ao mudar de categoria
                card.classList.remove('open');
                card.querySelector('.mgsis-faq-resposta').style.maxHeight = null;

                const categoriaCard = card.getAttribute('data-category');

                if (categoriaAlvo === 'todos' || categoriaCard === categoriaAlvo) {
                    card.style.display = 'block'; // Mostra o card
                    // Pequeno truque para reiniciar a animação do CSS
                    card.style.animation = 'none';
                    card.offsetHeight; /* trigger reflow */
                    card.style.animation = null;
                } else {
                    card.style.display = 'none'; // Esconde o card
                }
            });
        });
    });

});

// =========================================
// FUNÇÃO PARA MOSTRAR/ESCONDER CONTEÚDOS (Nome Exclusivo)
// =========================================
function mgsisAlternarPainelDinamico(botao) {
    // 1. Toca o som de clique, se a função existir
    if (typeof tocarSomClique === "function") {
        tocarSomClique();
    }

    // 2. Alterna a classe única de estado aberto para girar a setinha
    botao.classList.toggle('mgsis-painel-dinamico-aberto');

    // 3. Pega a div de conteúdo (wrapper) que está imediatamente após o botão
    const conteudo = botao.nextElementSibling;

    // 4. Lógica de abrir/fechar com animação suave
    if (conteudo.style.maxHeight) {
        // Se tem altura, fecha.
        conteudo.style.maxHeight = null;

        // Se for o botão de imagens/dicas, volta o texto original
        const spanTexto = botao.querySelector('span');
        if (spanTexto && spanTexto.innerText.includes("Ocultar")) {
            spanTexto.innerText = spanTexto.innerText.replace("Ocultar", "Ver");
        }
    } else {
        // Se está sem altura, calcula o tamanho interno exato e abre.
        conteudo.style.maxHeight = conteudo.scrollHeight + "px";

        // Muda o texto para "Ocultar"
        const spanTexto = botao.querySelector('span');
        if (spanTexto && spanTexto.innerText.includes("Ver")) {
            spanTexto.innerText = spanTexto.innerText.replace("Ver", "Ocultar");
        }
    }
}

// =========================================
// EFEITO 3D PREMIUM NOS CARDS DO MENU (Zero Delay)
// =========================================
function mgsisIniciarEfeitoCards3D() {
    const cards = document.querySelectorAll('.mgsis-card-box');

    cards.forEach(card => {
        // 1. Quando o mouse anda por cima do card
        card.addEventListener('mousemove', (e) => {
            // Desativa o 3D no celular, pois touch não tem "passar o mouse"
            if (window.innerWidth <= 768) return;

            // Calcula o tamanho do card e a posição exata do mouse nele
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // A Mágica Matemática: Calcula a inclinação (Máximo de 12 graus)
            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;

            // Aplica a inclinação instantaneamente (sem transição de CSS para não ter delay)
            card.style.transition = 'none';
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
            card.style.borderColor = 'var(--azul-primario, #2188ea)';
            card.style.zIndex = '10'; // Joga o card para cima dos outros

            // O ícone acompanha o movimento
            const icone = card.querySelector('.mgsis-icon-box');
            if (icone) {
                icone.style.transition = 'none';
                icone.style.transform = 'scale(1.15) translateZ(20px)'; // O ícone "salta" do card
                icone.style.color = 'var(--azul-primario, #2188ea)';
            }
        });

        // 2. Quando o mouse sai do card (Restaura suavemente)
        card.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 768) return;

            // Volta a transição suave para retornar ao lugar
            card.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease';
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.boxShadow = '';
            card.style.borderColor = '';
            card.style.zIndex = '1';

            const icone = card.querySelector('.mgsis-icon-box');
            if (icone) {
                icone.style.transition = 'transform 0.4s ease, color 0.4s ease';
                icone.style.transform = 'scale(1) translateZ(0)';
                icone.style.color = '';
            }
        });

        // 3. Adiciona o barulhinho de clique que criamos antes
        card.addEventListener('click', () => {
            if (typeof tocarSomClique === 'function') {
                tocarSomClique();
            }
        });
    });
}

// Inicializa a função assim que o script carregar
mgsisIniciarEfeitoCards3D();

// 3. Efeito "Modo Foco" ao Clicar
card.addEventListener('click', function () {
    // Toca o som se existir
    if (typeof tocarSomClique === 'function') {
        tocarSomClique();
    }

    // Pega todos os cards da tela
    const todosCards = document.querySelectorAll('.mgsis-card-box');

    // Aplica a lógica de Foco
    todosCards.forEach(c => {
        if (c === card) {
            // Se for o card clicado, dá o destaque absoluto
            c.classList.add('mgsis-card-focado');
        } else {
            // Faz todos os outros sumirem da tela
            c.classList.add('mgsis-card-sumir');
        }
    });

    // Opcional: Remove o título superior para limpar ainda mais a tela
    const tituloCentro = document.querySelector('.mgsis-titulos-centro');
    if (tituloCentro) {
        tituloCentro.style.transition = "opacity 0.3s ease";
        tituloCentro.style.opacity = "0";
    }

    // Simula o tempo para carregar a próxima página (Espera a animação terminar)
    // Aqui você colocaria o seu window.location.href = "sua_pagina.html";
    setTimeout(() => {
        console.log("Navegando para o módulo selecionado...");
        // Descomente e ajuste a linha abaixo para redirecionar de verdade:
        // window.location.href = this.getAttribute('data-target') || '#';
    }, 800); // 800ms é o tempo perfeito para curtir a animação antes de mudar de tela
});

// =========================================
// FUNÇÃO: VOLTAR AO TOPO DA PÁGINA (Corrigida)
// =========================================

// O evento DOMContentLoaded garante que o JS só rode DEPOIS que o HTML existir
document.addEventListener('DOMContentLoaded', function() {
    
    const btnTopo = document.getElementById('mgsis-btn-voltar-topo');

    // Se não achar o botão, aborta para não dar erro
    if (!btnTopo) return; 

    // Função que checa a quantidade de pixels rolados
    function verificarRolagem() {
        // Pega a rolagem da Window (Padrão)
        const rolagemWindow = window.scrollY || document.documentElement.scrollTop;
        
        // Se desceu mais de 200px, mostra o botão
        if (rolagemWindow > 200) {
            btnTopo.classList.add('mgsis-mostrar');
        } else {
            btnTopo.classList.remove('mgsis-mostrar');
        }
    }

    // Fica vigiando a rolagem da página
    window.addEventListener('scroll', verificarRolagem);

    // Ação ao clicar no botão
    btnTopo.addEventListener('click', function() {
        // Toca o som (se a sua função existir)
        if (typeof tocarSomClique === 'function') {
            tocarSomClique();
        }

        // Volta ao topo macio
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

