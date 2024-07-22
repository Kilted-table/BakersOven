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

    // Handle single and double tap
    document.querySelectorAll('.section-img-container').forEach(container => {
        let tapCount = 0;

        container.addEventListener('click', () => {
            tapCount++;
            const overlayText = container.parentElement.querySelector('.section-text').innerText;
            const overlaySpan = container.querySelector('.overlay .overlay-text');

            overlaySpan.style.display = 'block';
            overlaySpan.innerHTML = ''; // Clear previous text
            typeEffect(overlaySpan, overlayText);

            if (tapCount === 2) {
                const additionalTextElement = container.querySelector('.overlay .additional-text');
                const additionalText = 'Additional information displayed here.';
                additionalTextElement.style.display = 'block';
                additionalTextElement.innerHTML = ''; // Clear previous text
                typeEffect(additionalTextElement, additionalText);
                tapCount = 0; // Reset tap count
            }

            setTimeout(() => {
                tapCount = 0; // Reset tap count after 500ms
            }, 500);
        });
    });
});
