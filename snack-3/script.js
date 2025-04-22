const numbers = [2, 8, 4, 7, 2, 87];

let number = numbers.map((addOne) => {
  return parseInt(`${addOne}`) + 1;
});
console.log(number);
// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]
