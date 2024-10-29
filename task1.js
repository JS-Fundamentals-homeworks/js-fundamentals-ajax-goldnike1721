// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        let listItems = '';
        users.forEach(user => {
            listItems += `<li>${user.name}</li>`;
        });
        document.querySelector('.usersList').innerHTML = listItems;
    } catch (error) {
        document.querySelector('.usersList').textContent = 'Failed to load users';
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', fetchUsers);