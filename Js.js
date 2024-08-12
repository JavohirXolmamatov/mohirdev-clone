document.getElementById('scroll-left').addEventListener('click', function() {
    document.querySelector('.scrollable-content').scrollBy({
        left: -250, // Skroll qilish uzunligi (har bir `col`ning kengligi bilan bir xil bo'lishi kerak)
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.querySelector('.scrollable-content').scrollBy({
        left: 250, // Skroll qilish uzunligi
        behavior: 'smooth'
    });
});
