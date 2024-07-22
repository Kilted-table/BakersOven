document.addEventListener("DOMContentLoaded", function () {
    // Existing JavaScript content

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

    document.querySelectorAll('section img').forEach(img => {
        img.addEventListener('click', (e) => {
            const sectionId = e.target.closest('section').id;
            openModal(`modal-${sectionId}`);
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

    // Existing JavaScript content
});
