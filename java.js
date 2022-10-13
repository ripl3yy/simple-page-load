window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.classList += ' loaded';
    
    setTimeout(() => {
      loader.classList += ' hidden';
    }, 2325);
  }, 1000);
});
