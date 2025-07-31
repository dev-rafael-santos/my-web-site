function setupSectionMenu(btnMenuId, menuId, areaId, sectionClass) {
    const btnMenu = document.getElementById(btnMenuId);
    const menu = document.getElementById(menuId);
    const area = document.getElementById(areaId);

    if (!btnMenu || !menu || !area) return;

    function getSections() {
        // Busca APENAS DENTRO da área principal correspondente
        return area.querySelectorAll(sectionClass);
    }

    function removeExistingNavButtons() {
        getSections().forEach(sec => {
            const btns = sec.querySelectorAll('.btn-proxima-sessao, .btn-voltar-sessao');
            btns.forEach(btn => btn.remove());
        });
    }

    
    function mostrarSecaoPorIndice(indice) {
        const sections = getSections();
        if (indice < 0 || indice >= sections.length) return;
        sections.forEach(sec => sec.style.display = 'none');
        removeExistingNavButtons();

        const targetSection = sections[indice];
        if (targetSection) {
            targetSection.style.display = 'block';

            // VOLTAR
            if (indice > 0) {
                const btnVoltar = document.createElement('button');
                btnVoltar.textContent = '◀ Voltar';
                btnVoltar.className = 'btn-voltar-sessao';
                btnVoltar.style.margin = '16px 8px 0 0';
                btnVoltar.addEventListener('click', function() {
                    mostrarSecaoPorIndice(indice - 1);
                    window.scrollTo(0, 0);
                });
                targetSection.appendChild(btnVoltar);
            }

            // PROXIMA
            if (indice < sections.length - 1) {
                const btnProxima = document.createElement('button');
                btnProxima.textContent = 'Próxima ▶';
                btnProxima.className = 'btn-proxima-sessao';
                btnProxima.style.marginTop = '16px';
                btnProxima.addEventListener('click', function() {
                    mostrarSecaoPorIndice(indice + 1);
                    window.scrollTo(0, 0);
                });
                targetSection.appendChild(btnProxima);
            }
        }
        menu.style.display = 'none';
        setTimeout(function() { window.scrollTo(0, 0); }, 1);
    }

    btnMenu.addEventListener('click', function() {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    menu.querySelectorAll('a').forEach((link, idx) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            mostrarSecaoPorIndice(idx);
        });
    });
}

// TOPO: ÁREAS PRINCIPAIS
function mostrarArea(areaId) {
    document.querySelectorAll('.area-conteudo').forEach(div => div.style.display = 'none');
    const area = document.getElementById(areaId);
    if (area) area.style.display = 'block';
}

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    // setupSectionMenu('btn-acesso-rapido', 'indice-navegacao', 'area-quem-sou-eu', '.quem-sou-eu-section');
    setupSectionMenu('btn-acesso-rapido2', 'indice-navegacao2', 'area-testemunho', '.testemunho-section');
    setupSectionMenu('btn-acesso-rapido3', 'indice-navegacao3', 'area-escrituras', '.sagradas-escrituras-section');
    // setupSectionMenu('btn-acesso-rapido4', 'indice-navegacao4', 'area-livros', '.livros-section');

    // Exibe Testemunho por padrão
    mostrarArea('area-testemunho');

    // Menu do topo
    // document.getElementById('btn-inicio').addEventListener('click', function(e){
    //     e.preventDefault();
    //     mostrarArea('area-quem-sou-eu');
    //     window.scrollTo(0,0);
    // });
    document.getElementById('btn-testemunho').addEventListener('click', function(e){
        e.preventDefault();
        mostrarArea('area-testemunho');
        window.scrollTo(0,0);
    });
    document.getElementById('btn-escrituras').addEventListener('click', function(e){
        e.preventDefault();
        mostrarArea('area-escrituras');
        window.scrollTo(0,0);
    });

    // document.getElementById('btn-livros').addEventListener('click', function(e){
    //     e.preventDefault();
    //     mostrarArea('area-livros');
    //     window.scrollTo(0,0);
    // });

    document.getElementById('btn-contato').addEventListener('click', function(e){
        e.preventDefault();
        mostrarArea('area-contato');
        window.scrollTo(0,0);
    });

    // Visual de aba ativa (opcional)
    document.querySelectorAll('#myNavbar .w3-bar-item').forEach(function(link){
        link.addEventListener('click', function(){
            document.querySelectorAll('#myNavbar .w3-bar-item').forEach(function(item){
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

// MODAL DE IMAGENS

function openModal(src) {
    document.getElementById("modal").style.display = "flex"; // Mostra o modal
    document.getElementById("modalImg").src = src; // Define a imagem no modal
}

function closeModal() {
    document.getElementById("modal").style.display = "none"; // Esconde o modal
}

// FUNÇÃO PARA ENVIAR EMAIL

function AplicativoPadraoEmail() {
    var mailtoLink = "mailto:rafaelantonio18@hotmail.com.br";
    window.location.href = mailtoLink;
}

// FUNÇÃO PARA ENVIAR WHATSAPP
function AplicativoPadraoWhatsAppGrupo() {
    // Substitua pelo código real do seu grupo
    var link = "https://chat.whatsapp.com/JAPlGvhsjn319I9420LntJ";
    window.open(link, '_blank');
}


// FUNÇÕES DE CONTROLE DOS VIDEOS 
function playVideo(videoId) {
    document.getElementById(videoId).play();
}

function pauseVideo(videoId) {
    document.getElementById(videoId).pause();
}

function retrocederVideo(videoId) {
    var video = document.getElementById(videoId);
    video.currentTime = Math.max(0, video.currentTime - 2);
}

function fullscreenVideo(videoId) {
    var video = document.getElementById(videoId);
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}


