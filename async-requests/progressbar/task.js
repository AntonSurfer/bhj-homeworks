const fileInput = document.getElementById('file');
const fileDesc = document.querySelector('.input__wrapper-desc');
fileInput.addEventListener('change', function() {
    if (this.files && this.files.length > 0) {
        fileDesc.textContent = this.files[0].name;
    } else {
        fileDesc.textContent = 'Имя файла...';
    }
}); /*как в демоверсии хотя в условии задачи этого нет */

const form = document.getElementById('form');
const progress = document.getElementById('progress');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      const currentProgress = event.loaded / event.total;
      progress.value = currentProgress;
    }
  };
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Файл успешно загружен!'); 
    } else {
      console.error('Ошибка сервера:', xhr.status);
    }
  };
  xhr.onerror = function() {
    console.error('Ошибка сети при загрузке файла');
  };
  xhr.send(formData);
});

