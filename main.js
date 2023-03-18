const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('input[type="search"]');

searchIcon.addEventListener('click', () => {
  searchInput.focus();
})