      const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const sideMenu = document.getElementById('side-menu');
        const resumeBtn = document.getElementById('resume-btn');
        const body = document.body;
        const html = document.documentElement;

        // Open side menu
        if (menuBtn && sideMenu) {
            menuBtn.addEventListener('click', () => sideMenu.classList.remove('translate-x-full'));
        }

        // Close side menu
        if (closeBtn && sideMenu) {
            closeBtn.addEventListener('click', () => sideMenu.classList.add('translate-x-full'));
        }

        // Close side menu when clicking a link
        if (sideMenu) {
            const sideMenuLinks = sideMenu.querySelectorAll('a');
            sideMenuLinks.forEach(link => {
                link.addEventListener('click', () => sideMenu.classList.add('translate-x-full'));
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // // Resume download
        // if (resumeBtn) {
        //     resumeBtn.addEventListener('click', (e) => {
        //         e.preventDefault();
        //         alert('Resume download will be available soon!');
        //     });
        // }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('animate-slide-up');
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.animate-slide-up').forEach(el => observer.observe(el));

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (sideMenu && !sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                sideMenu.classList.add('translate-x-full');
            }
        });

        // Prevent body scroll when menu is open
        const preventScroll = (e) => e.preventDefault();
        
        if (menuBtn && sideMenu) {
            menuBtn.addEventListener('click', () => {
                document.body.style.overflow = 'hidden';
            });
        }

        if (closeBtn && sideMenu) {
            closeBtn.addEventListener('click', () => {
                document.body.style.overflow = 'auto';
            });
        }
