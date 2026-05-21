const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle('open');
    });

const themeToogle = document.getElementById('theme');
themeToogle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode')
})