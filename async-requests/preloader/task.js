const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка сети');
    }
    return response.json();
  })
  .then(data => {
    loader.classList.remove('loader_active');
    itemsContainer.innerHTML = '';
    const valutes = Object.values(data.response.Valute);
    valutes.forEach(valute => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      itemDiv.innerHTML = `
        <div class="item__code">${valute.CharCode}</div>
        <div class="item__value">${valute.Value.toFixed(2)}</div>
        <div class="item__currency">руб.</div>
      `;
      itemsContainer.appendChild(itemDiv);
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке курса валют:', error);
    loader.classList.remove('loader_active');
    itemsContainer.innerHTML = '<p>Не удалось загрузить данные. Попробуйте позже.</p>';
  });