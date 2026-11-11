const options = document.querySelectorAll('[data-light]');
const photos = document.querySelectorAll('#product-view img');
options.forEach(button => button.addEventListener('click', () => {
  const off = button.dataset.light === 'off';
  photos[0].hidden = off;
  photos[1].hidden = !off;
  options.forEach(option => option.setAttribute('aria-pressed', String(option === button)));
}));
