const china = "Китай";
const chile = "Чили";
const australia = "Австралия";
const india = "Индия";
const jamaica = "Ямайка";

let deliveryPrice = 100;

const country = prompt("Введите страну для доставки");
let message = null;

switch (country !== null && country.toLowerCase()) {
  case china.toLowerCase():
    message = `Доставка в ${china} будет стоить ${deliveryPrice} кредитов`;
    break;
  case chile.toLowerCase():
    deliveryPrice = 250;
    message = `Доставка в ${chile} будет стоить ${deliveryPrice} кредитов`;
    break;
  case australia.toLowerCase():
    deliveryPrice = 170;
    message = `Доставка в ${australia} будет стоить ${deliveryPrice} кредитов`;
    break;
  case india.toLowerCase():
    deliveryPrice = 80;
    message = `Доставка в ${india} будет стоить ${deliveryPrice} кредитов`;
    break;
  case jamaica.toLowerCase():
    deliveryPrice = 120;
    message = `Доставка в ${jamaica} будет стоить ${deliveryPrice} кредитов`;
    break;
  default:
    alert("В вашей стране доставка не доступна");
    break;
}

console.log(message)