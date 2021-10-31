const credits = 23580;
const pricePerDroid = 3000;
const result = prompt(`Какое кол-во дроидов Вы хотели бы приобрести?`);
let message;

const totalPrice = pricePerDroid * result;
const userBalance = credits - pricePerDroid * result;

if (result === null) {
  message = "Отменено пользователем!";
} else if (result > totalPrice) {
  message = "Недостаточно средств на счету!";
} else {
  message = `'Вы купили ${result} дроидов, на счету осталось ${userBalance} кредитов.'`;
}

console.log(message);