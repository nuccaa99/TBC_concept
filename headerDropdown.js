const headerDropdown = document.querySelector('.header_dropdown');

const navItems = {
  products: document.querySelector('.navbar_list_item.products'),
  offers: document.querySelector('.navbar_list_item.offers'),
  spaces: document.querySelector('.navbar_list_item.spaces'),
};

const dropdownContent = {
  products: document.querySelector('.header_dropdown_content_list.products'),
  offers: document.querySelector('.header_dropdown_content_list.offers'),
  spaces: document.querySelector('.header_dropdown_content_list.spaces'),
};

function toggleDropdownContent(type) {
  headerDropdown.classList.remove('hidden');
  Object.keys(dropdownContent).forEach((key) => {
    dropdownContent[key].classList.toggle('hidden', key !== type);
  });
}

Object.keys(navItems).forEach((type) => {
  navItems[type].addEventListener('click', (e) => {
    e.preventDefault();
    toggleDropdownContent(type);
  });
});

function handleResize() {
  if (window.innerWidth <= 1100) {
    headerDropdown.classList.add('hidden');
  }
}

window.addEventListener('resize', handleResize);

function handleClickOutside(event) {
  const targetElement = document.querySelector('.header_container');
  if (targetElement && !targetElement.contains(event.target)) {
    headerDropdown.classList.add('hidden');
  }
}

document.addEventListener('click', handleClickOutside);

