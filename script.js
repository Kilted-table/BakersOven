document.addEventListener("DOMContentLoaded", function () {
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
});
