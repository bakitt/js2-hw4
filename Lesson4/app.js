const userEl = document.getElementById('list');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let usersData = []; // Хранение данных пользователей

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  usersData = data; // Сохранение данных пользователей
  let template = '';
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    template += `<div class="user-item" data-index="${i}"><span>${i + 1}. ${user.name} (${user.email})</span></div>`;
  }
  userEl.innerHTML = template;
  return data;
};

getData().then((data) => {
  console.log(data);
});

searchButton.addEventListener('click', () => {
  const searchIndex = parseInt(searchInput.value) - 1;
  const resultEl = document.getElementById('result');
  if (!isNaN(searchIndex) && searchIndex >= 0 && searchIndex < usersData.length) {
    const user = usersData[searchIndex];
    resultEl.innerHTML = `${searchIndex + 1}. ${user.name} (${user.email})`;
    resultEl.style.display = 'block';
  } else {
    resultEl.innerHTML = 'Значение не найдено';
    resultEl.style.display = 'block';
  }
});
