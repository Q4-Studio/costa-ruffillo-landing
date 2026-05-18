document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('nav ul');
    const menuIcon = mobileBtn ? mobileBtn.querySelector('i') : null;

    const setMenu = (open) => {
        if (!navList || !mobileBtn) return;
        navList.classList.toggle('active', open);
        mobileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        mobileBtn.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
        if (menuIcon) {
            menuIcon.classList.toggle('fa-bars', !open);
            menuIcon.classList.toggle('fa-xmark', open);
        }
    };

    if (mobileBtn && navList) {
        mobileBtn.addEventListener('click', () => {
            setMenu(!navList.classList.contains('active'));
        });
    }

    document.querySelectorAll('nav a').forEach((link) => {
        link.addEventListener('click', () => setMenu(false));
    });

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
