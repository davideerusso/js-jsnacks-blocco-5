const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

const marco = students.filter((student) => {
  if (student.name === "Marco Lanci") {
    return `${student.class}`;
  }
});
console.log(marco);

let marcoClass = marco.map((classe) => {
  return `${classe.class}`;
});
console.log(marcoClass);

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
