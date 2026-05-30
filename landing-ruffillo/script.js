document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('nav ul');
    const menuIcon = mobileBtn ? mobileBtn.querySelector('i') : null;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

    document.querySelectorAll('[data-slider]').forEach((slider) => {
        const slides = Array.from(slider.querySelectorAll('.slider-slide'));
        const prevBtn = slider.querySelector('[data-slider-prev]');
        const nextBtn = slider.querySelector('[data-slider-next]');
        const dotsWrap = slider.querySelector('[data-slider-dots]');
        const autoplay = slider.dataset.autoplay === 'true' && !prefersReducedMotion;
        let current = slides.findIndex((slide) => slide.classList.contains('is-active'));
        let timer = null;

        if (slides.length <= 1) return;
        if (current < 0) current = 0;

        const dots = dotsWrap ? slides.map((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            dot.type = 'button';
            dot.setAttribute('aria-label', `Vai alla foto ${index + 1}`);
            dotsWrap.appendChild(dot);
            dot.addEventListener('click', () => {
                showSlide(index);
                restart();
            });
            return dot;
        }) : [];

        const updateDots = () => {
            dots.forEach((dot, index) => {
                dot.classList.toggle('is-active', index === current);
                dot.setAttribute('aria-current', index === current ? 'true' : 'false');
            });
        };

        const showSlide = (index) => {
            current = (index + slides.length) % slides.length;
            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle('is-active', slideIndex === current);
            });
            updateDots();
        };

        const stop = () => {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        };

        const start = () => {
            if (!autoplay || timer) return;
            timer = window.setInterval(() => showSlide(current + 1), 5200);
        };

        const restart = () => {
            stop();
            start();
        };

        prevBtn?.addEventListener('click', () => {
            showSlide(current - 1);
            restart();
        });

        nextBtn?.addEventListener('click', () => {
            showSlide(current + 1);
            restart();
        });

        slider.addEventListener('mouseenter', stop);
        slider.addEventListener('mouseleave', start);
        slider.addEventListener('focusin', stop);
        slider.addEventListener('focusout', start);
        slider.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                showSlide(current - 1);
                restart();
            }
            if (event.key === 'ArrowRight') {
                showSlide(current + 1);
                restart();
            }
        });

        showSlide(current);
        start();
    });

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
