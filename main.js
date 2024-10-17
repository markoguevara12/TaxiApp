const navItem = document.querySelectorAll('.nav-items ul li')

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); 
        navItem.forEach(item => {
            item.style.color = "#333"; 
        });
        

    } else {
        navbar.classList.remove('scrolled'); 
        navItem.forEach(item => {
            item.style.color = "#fff "; 
        });
    }
});
