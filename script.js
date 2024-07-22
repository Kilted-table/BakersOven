document.addEventListener("DOMContentLoaded", function () {
    // Initialize Slick Carousel
    $('.video-carousel, .team-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    // Modal functionality
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "flex";
        setTimeout(() => {
            modal.querySelector('.modal-content').classList.add('show-back');
        }, 100);
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.querySelector('.modal-content').classList.remove('show-back');
        setTimeout(() => {
            modal.style.display = "none";
        }, 600);
    }

    document.querySelectorAll('.modal-trigger').forEach(img => {
        img.addEventListener('click', (e) => {
            const modalId = e.target.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-close') || e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Add close buttons to each modal
    document.querySelectorAll('.modal').forEach(modal => {
        const closeButton = document.createElement('button');
        closeButton.classList.add('modal-close');
        closeButton.innerHTML = '&times;';
        modal.appendChild(closeButton);
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('header, footer').forEach(el => el.classList.toggle('dark-mode'));
    });

    // Typing effect functionality
    function typeEffect(element, text) {
        let i = 0;
        let interval;

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                element.classList.remove('terminal-effect');
            }
        }

        clearInterval(interval);
        element.classList.add('terminal-effect');
        element.innerHTML = '';
        interval = setInterval(type, 50);
    }

    // Handle image click to display typing text
    document.querySelectorAll('.section-img-container').forEach(container => {
        container.addEventListener('click', () => {
            const overlay = container.querySelector('.overlay');
            const overlayText = container.querySelector('.overlay .overlay-text');

            // Ensure the overlay text element is reset before typing effect
            if (!container.classList.contains('clicked')) {
                overlayText.innerHTML = ''; // Clear previous text
                typeEffect(overlayText, overlayText.getAttribute('data-text'));
                container.classList.add('clicked');
            } else {
                overlayText.innerHTML = ''; // Clear previous text
                typeEffect(overlayText, overlayText.getAttribute('data-text'));
            }

            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'all';
        });
    });
});
