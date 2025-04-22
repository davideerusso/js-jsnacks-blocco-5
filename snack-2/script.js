const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

let nomi = people.map((names) => {
  return `${names.name}`;
});
console.log(nomi);
// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
