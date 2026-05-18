document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('nav ul');

    if (mobileBtn && navList) {
        mobileBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    document.querySelectorAll('nav a').forEach((link) => {
        link.addEventListener('click', () => {
            if (navList) {
                navList.classList.remove('active');
            }
        });
    });

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
