window.addEventListener('scroll', function() {
    const fadeIns = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    fadeIns.forEach(function(el) {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('show');
        }
    });
});
