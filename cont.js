
        var contactRevealed = {
            phone: false,
            email: false,
            whatsapp: false
        };

        function getContactInfo(type) {
            var info = {
                phone: { value: '+225 05 64 07 17 05', url: 'tel:+2250564071705' },
                email: { value: 'souleymaneouattara1509@gmail.com', url: 'mailto:souleymaneouattara1509@gmail.com' },
                whatsapp: { value: 'Ouvrir WhatsApp', url: 'https://wa.me/2250564071705' }
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

        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var subject = document.getElementById('subject').value.trim();
            var message = document.getElementById('message').value.trim();

            // Validation simple
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!name || !email || !subject || !message) {
                alert('Veuillez remplir tous les champs.');
                return;
            }
            if (!emailRegex.test(email)) {
                alert('Veuillez entrer une adresse email valide.');
                return;
            }

            var emailBody = 'Nom: ' + name + '%0D%0A' +
                           'Email: ' + email + '%0D%0A' +
                           'Sujet: ' + subject + '%0D%0A%0D%0A' +
                           'Message:%0D%0A' + message;

            window.location.href = 'mailto:souleymaneouattara1509@gmail.com?subject=' + 
                                  encodeURIComponent(subject) + 
                                  '&body=' + emailBody;

            document.getElementById('success-message').classList.add('show');
            document.getElementById('contact-form').reset();

            setTimeout(function() {
                document.getElementById('success-message').classList.remove('show');
            }, 5000);
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
                themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark');
                body.classList.add('light');
                nav.classList.remove('dark');
                nav.classList.add('light');
                themeIcon.textContent = '🌙';
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
            document.getElementById(sectionId).classList.add('active');
            
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