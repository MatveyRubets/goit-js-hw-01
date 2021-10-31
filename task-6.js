let result = null;
let total = 0;

do {
  result = prompt("Введите число");
  console.log(result);
  let num = Number(result);

  if (!isNaN(num)) {
    total += num;
  } else alert("Было введено не число, попробуйте еще раз");
  
} while (result !== null);

alert(`Общая сумма чисел равна ${total}`);

console.log(total);