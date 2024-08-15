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


document.getElementById('show-more').addEventListener('click', function() {
    var hiddenRows = document.querySelectorAll('.hidden-row');
    hiddenRows.forEach(function(row) {
        row.style.display = 'block';
    });
    this.style.display = 'none'; // Knopkani yashirish
});

document.getElementById('show-more2').addEventListener('click', function() {
    var hiddenRows = document.querySelectorAll('.hidden-row2');
    hiddenRows.forEach(function(row) {
        row.style.display = 'block';
    });
    
    // Ko'proq ko'rsatish knopkasini yashirish
    this.style.display = 'none'; 
    
    // Collarni qisqartirish knopkasini ko'rsatish
    document.getElementById('show-less2').style.display = 'inline-block'; 
});

document.getElementById('show-less2').addEventListener('click', function() {
    var hiddenRows = document.querySelectorAll('.hidden-row2');
    hiddenRows.forEach(function(row) {
        row.style.display = 'none';
    });
    
    // Collarni qisqartirish knopkasini yashirish
    this.style.display = 'none'; 
    
    // Ko'proq ko'rsatish knopkasini ko'rsatish
    document.getElementById('show-more2').style.display = 'inline-block'; 
});

