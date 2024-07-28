const scrollableContent = document.querySelector('main');

scrollableContent.addEventListener('scroll', () => {
  scrollableContent.classList.add('scrolling');
  clearTimeout(scrollableContent.scrollTimeout);

  scrollableContent.scrollTimeout = setTimeout(() => {
    scrollableContent.classList.remove('scrolling');
  }, 1000);
});
