 
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const sideMenu = document.getElementById('side-menu');
        // const darkModeToggle = document.getElementById('dark-mode-toggle');
        const resumeBtn = document.getElementById('resume-btn');
        const body = document.body;
        const html = document.documentElement;

        // Check for saved dark mode preference or default to light mode
        // const currentTheme = localStorage.getItem('theme') || 'light';
        // if (currentTheme === 'dark') {
        //     html.classList.add('dark');
        //     updateDarkModeIcon(true);
        // }

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
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // // Dark mode toggle functionality
        // function updateDarkModeIcon(isDark) {
        //     const icon = document.querySelector('.dark-mode-icon');
        //     if (icon) {
        //         icon.textContent = isDark ? '☀️' : '🌙';
        //     }
        // }

        // if (darkModeToggle) {
        //     darkModeToggle.addEventListener('click', () => {
        //         const isDark = html.classList.toggle('dark');
                
        //         // Save preference to localStorage
        //         localStorage.setItem('theme', isDark ? 'dark' : 'light');
                
        //         // Update icon
        //         updateDarkModeIcon(isDark);
        //     });
        // }

        // Resume download
        if (resumeBtn) {
            resumeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Resume download will be available soon!');
            });
        }

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
    