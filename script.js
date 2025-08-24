document.addEventListener('DOMContentLoaded', function () {
    const suratItems = document.querySelectorAll('.surat-item-header');

    suratItems.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;

            // Toggle the active class on the clicked item
            item.classList.toggle('active');
        });
    });
});
