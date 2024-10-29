// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js
document.getElementById('getUserButton').addEventListener('click', async () => {
    const userName = document.getElementById('userNameInput').value.trim();
    const userCityElement = document.getElementById('userCity');

    if (!userName) {
        userCityElement.textContent = 'Please enter a user name';
        return;
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        let foundUser = null;
        for (const user of users) {
            if (user.name.toLowerCase() === userName.toLowerCase()) {
                foundUser = user;
                break;
            }
        }

        userCityElement.textContent = foundUser ? `City: ${foundUser.address.city}` : 'User not found';
    } catch (error) {
        console.error('Error fetching data:', error);
        userCityElement.textContent = 'Error fetching data';
    }
});