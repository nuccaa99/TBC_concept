const burgerMenu = document.querySelector('.buger_menu_container');
const burgerMenuIcon = document.querySelector('.header_burger_menu');
const parent = document.querySelector('main');
const children = parent.children;

burgerMenuIcon.addEventListener('click', function () {
  this.classList.toggle('active');
  burgerMenu.classList.toggle('hidden');

  const isActive = this.classList.contains('active');

  for (let i = 1; i < children.length; i++) {
    children[i].style.display = isActive ? 'none' : '';
  }
});

function handleResize() {
  if (window.innerWidth > 1100) {
    burgerMenu.classList.add('hidden');
    burgerMenuIcon.classList.remove('active');
    for (let i = 1; i < children.length; i++) {
      children[i].style.display = '';
    }
  }
}

window.addEventListener('resize', handleResize);
