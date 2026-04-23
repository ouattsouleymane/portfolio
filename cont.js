// Bouton retour en haut
window.addEventListener('DOMContentLoaded', function() {
    var backToTop = document.getElementById('backToTop');
    function toggleBackToTop() {
        if (window.scrollY > 200) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
    window.addEventListener('scroll', toggleBackToTop);
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    toggleBackToTop();
});
// Animation fade-in sur les sections au scroll (fix)
const temps = 80;
window.addEventListener('DOMContentLoaded', function() {
    function revealSections() {
        document.querySelectorAll('.fade-in').forEach(function(section) {
            var rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - temps) {
                section.classList.add('animated');
            }
        });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();

    // Initialiser les tabindex des boutons
    document.querySelectorAll('.tab-button').forEach(function(btn) {
        btn.setAttribute('tabindex', '-1');
    });
    var firstBtn = document.querySelector('.tab-button.w--current');
    if (firstBtn) {
        firstBtn.setAttribute('tabindex', '0');
    }
});


        function toggleTheme() {
    var body = document.body;
    var nav = document.querySelector('nav');
    var themeIcon = document.getElementById('theme-icon');
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        nav.classList.remove('light');
        nav.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        nav.classList.remove('dark');
        nav.classList.add('light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
        }

        window.addEventListener('DOMContentLoaded', function() {
            var savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                toggleTheme();
            }
        });
        const timeout = 50;
        function showSection(sectionId) {
            var sections = document.querySelectorAll('section');
            sections.forEach(function(section) {
                section.classList.remove('active');
            });
            var target = document.getElementById(sectionId);
            target.classList.add('active');
            // Scroll fluide vers la section
            setTimeout(function() {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, timeout);
            document.querySelector('.nav-links').classList.remove('active');
        }

        function showDiv(divId) {
            try {
                // Validation du paramètre
                if (!divId || typeof divId !== 'string') {
                    console.error('showDiv: ID invalide');
                    return;
                }

                // Cacher tous les tab-content
                var allTabs = document.querySelectorAll('.tab-content');
                allTabs.forEach(function(tab) {
                    tab.classList.remove('w--current');
                    tab.setAttribute('hidden', '');
                });
                
                // Afficher le tab cible
                var target = document.getElementById(divId);
                if (!target) {
                    console.error('showDiv: Element avec ID "' + divId + '" introuvable');
                    return;
                }
                target.classList.add('w--current');
                target.removeAttribute('hidden');
                
                // Mettre à jour les boutons
                document.querySelectorAll('.tab-button').forEach(function(btn) {
                    btn.classList.remove('w--current');
                    btn.setAttribute('aria-selected', 'false');
                    btn.setAttribute('tabindex', '-1');
                });
                
                // Activer le bouton correspondant
                var activeBtn = document.querySelector('[aria-controls="' + divId + '"]');
                if (activeBtn) {
                    activeBtn.classList.add('w--current');
                    activeBtn.setAttribute('aria-selected', 'true');
                    activeBtn.setAttribute('tabindex', '0');
                }
            } catch (error) {
                console.error('Erreur dans showDiv:', error);
            }
        }

        function toggleMobileMenu() {
            document.querySelector('.nav-links').classList.toggle('active');
        }

        function downloadCV() {
            var link = document.createElement('a');
            link.href = 'cv_ouattara_souleymane.pdf';
            link.download = 'cv_ouattara_souleymane.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }