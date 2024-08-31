function setupDropdown(buttonId, menuId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);

    button.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
}
setupDropdown('dropdownButton1', 'dropdownMenu1');
setupDropdown('dropdownButton2', 'dropdownMenu2');
setupDropdown('dropdownButton3', 'dropdownMenu3');
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
        }
    }
}

window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("dark");
    } else {
        navbar.classList.remove("dark");
    }
};