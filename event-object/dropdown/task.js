document.addEventListener('click', function(event) {
    const dropdown = event.target.closest('.dropdown');
    if (!dropdown) return;
  
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');
    if (!valueElement || !listElement) return;
  
    if (valueElement.contains(event.target)) {
      listElement.classList.toggle('dropdown__list_active');
      return;
    }
  
    const item = event.target.closest('.dropdown__item');
    if (item) {
      event.preventDefault();
      const link = item.querySelector('.dropdown__link');
      if (!link) return;
      
      valueElement.textContent = link.textContent.trim();
      listElement.classList.remove('dropdown__list_active');
    }
  });
