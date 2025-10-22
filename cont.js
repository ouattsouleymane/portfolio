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
window.addEventListener('DOMContentLoaded', function() {
    function revealSections() {
        document.querySelectorAll('.fade-in').forEach(function(section) {
            var rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                section.classList.add('animated');
            }
        });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();
});

        var contactRevealed = {
            phone: false,
            email: false
        };

        function getContactInfo(type) {
            var info = {
                phone: { value: '+225 05 64 07 17 05', url: 'tel:+2250564071705' },
                email: { value: 'souleymaneouattara1509@gmail.com', url: 'mailto:souleymaneouattara1509@gmail.com' }
            };
            return info[type];
        }

        function revealContact(type) {
            if (!contactRevealed[type]) {
                var info = getContactInfo(type);
                var element = document.getElementById(type + '-info');
                element.textContent = info.value;
                contactRevealed[type] = true;
                if (type !== 'email') {
                    setTimeout(function() {
                        window.open(info.url, '_blank');
                    }, 300);
                } else {
                    var parent = element.parentElement;
                    parent.onclick = function() {
                        window.location.href = info.url;
                    };
                }
            }
        }


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
            }, 50);
            document.querySelector('.nav-links').classList.remove('active');
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