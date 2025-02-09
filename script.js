const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const sideMenu = document.getElementById('side-menu');
        const sideMenuItems = document.getElementById('side-menu-items');
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;
        const resumeBtn = document.getElementById('resume-btn');
        
        menuBtn.addEventListener('click', () => {
            sideMenu.classList.remove('translate-x-full');
        });
        
        closeBtn.addEventListener('click', () => {
            sideMenu.classList.add('translate-x-full');
        });
        
        sideMenuItems.addEventListener('click', () => {
            sideMenu.classList.add('translate-x-full');
        });
        
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('bg-gray-900');
            body.classList.toggle('text-white');
            resumeBtn.classList.toggle('text-white');
            
        });