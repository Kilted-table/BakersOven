document.addEventListener("DOMContentLoaded", function () {
    // Initialize Slick Carousel
    $('.video-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    s
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('header, footer').forEach(el => el.classList.toggle('dark-mode'));
    });

    // Typing effect functionality
    function typeEffect(element, text) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 50);
            } else {
                element.classList.remove('terminal-effect');
            }
        }
        element.classList.add('terminal-effect');
        element.innerHTML = '';
        type();
    }

    document.querySelectorAll('.section-img-container').forEach(container => {
        container.addEventListener('click', () => {
            const overlayText = container.parentElement.querySelector('.section-text').innerText;
            const overlaySpan = container.querySelector('.overlay span');
            overlaySpan.style.display = 'block';
            overlaySpan.innerHTML = ''; // Clear previous text
            typeEffect(overlaySpan, overlayText);
        });
    });
});
