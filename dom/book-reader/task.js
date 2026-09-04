const fontSizes = document.querySelectorAll('.font-size');
const book = document.getElementById('book');
fontSizes.forEach(function(fontSizeBtn) {
    fontSizeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        fontSizes.forEach(function(btn) {
            btn.classList.remove('font-size_active');
        });
        this.classList.add('font-size_active');
        const size = this.dataset.size;
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});