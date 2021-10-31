const ADMIN_PASSWORD = 'jqueryismyjam';
let message = null;
const result = prompt("Введите пароль")

if (result === null) {
  message = "Отменено пользователем!"
}
else if (result === ADMIN_PASSWORD) {
  message = "Добро пожаловать!"
}
else {
  message = "Доступ запрещён, неверный пароль!"
}

alert(message)