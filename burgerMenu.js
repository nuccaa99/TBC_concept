const burgerMenu = document.querySelector('.burger_menu_container');
const burgerMenuIcon = document.querySelector('.header_burger_menu');
const parent = document.querySelector('main');
const children = parent.children;

// open close burger menu

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

// burger menu dropdown as for header as footer

document.addEventListener('DOMContentLoaded', function () {
  const titleWrappers = document.querySelectorAll(
    '.burger_menu_item_dropdown_title_wrapper'
  );
  const dropdownLists = document.querySelectorAll(
    '.burger_menu_item_dropdown_list'
  );
  const dropdownArrows = document.querySelectorAll(
    '.burger_menu_item_dropdown_title_wrapper img'
  );

  function toggleDropdown() {
    this.nextElementSibling.classList.toggle('show');
    this.querySelector('img').classList.toggle('rotate');
  }

  function checkWindowSize() {
    if (window.innerWidth > 1110) {
      dropdownLists.forEach((list) => list.classList.remove('show'));
      dropdownArrows.forEach((arrow) => arrow.classList.remove('rotate'));
    }
  }

  titleWrappers.forEach((wrapper) => {
    wrapper.addEventListener('click', toggleDropdown);
  });

  window.addEventListener('resize', checkWindowSize);

  checkWindowSize();
});
