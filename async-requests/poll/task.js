const titleElement = document.getElementById('poll__title');
const answersContainer = document.getElementById('poll__answers');
fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка сети');
    }
    return response.json();
  })
  .then(data => {
    titleElement.textContent = data.data.title;
    answersContainer.innerHTML = '';
    data.data.answers.forEach((answerText, index) => {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.textContent = answerText;
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
      answersContainer.appendChild(button);
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке опроса:', error);
    titleElement.textContent = 'Не удалось загрузить опрос. Попробуйте позже.';
  });