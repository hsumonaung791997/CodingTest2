const toggleBtn = document.getElementById('mobileBtn');
const Menu = document.getElementById('mobileMenu');

toggleBtn.addEventListener('click', () => {
    Menu.classList.toggle('active');
})