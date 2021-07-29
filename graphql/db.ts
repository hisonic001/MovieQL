export const people = [
  {
    id: "1",
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "2",
    name: "Jun",
    age: 32,
    gender: "male",
  },
  {
    id: "3",
    name: "Hayun",
    age: 26,
    gender: "female",
  },
  {
    id: "4",
    name: "Panyong",
    age: 59,
    gender: "male",
  },
  {
    id: "5",
    name: "Hyunsook",
    age: 56,
    gender: "female",
  },
];

export const getById = (id: any) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
