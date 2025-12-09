document.addEventListener('DOMContentLoaded', () => {
    const eyeIcon = document.getElementById('toggle-colors');
    const colorMenu = document.getElementById('color-menu');
    const colorOptions = document.querySelectorAll('.color-option');
    const root = document.documentElement;

    
    eyeIcon.addEventListener('click', (e) => {
        e.preventDefault();
        colorMenu.classList.toggle('active');
    });


    document.addEventListener('click', (e) => {
        if (!eyeIcon.contains(e.target) && !colorMenu.contains(e.target)) {
            colorMenu.classList.remove('active');
        }
    });


    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const color = option.dataset.color;
            const accent = option.dataset.accent;


            root.style.setProperty('--bg-color', color);
            root.style.setProperty('--accent-color', accent);


            colorMenu.classList.remove('active');
        });
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
