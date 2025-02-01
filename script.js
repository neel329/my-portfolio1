function scrollToSection(section) {
    const element = document.getElementById(section);
    window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth'
    });
}
