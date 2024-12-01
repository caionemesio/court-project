interface Hour {
  label: string;
  checkIn: boolean;
}
const mockingHours: Hour[] = [];

for (let hour = 8; hour <= 18; hour++) {
  const formattedHour = `${hour.toString().padStart(2, "0")}:00`; // Formata a hora para ter sempre 2 dígitos
  mockingHours.push({
    label: formattedHour,
    checkIn: false,
  });
}

const mockingSports = [
  { label: "Futebol", value: "soccer" },
  { label: "Basquete", value: "basketball" },
  { label: "Vôlei", value: "volleyball" },
  { label: "Handebol", value: "handball" },
  { label: "Ginástica", value: "gymnastics" },
  { label: "Educação Física", value: "physical_education" },
  { label: "Outros", value: "others" },
];


export { mockingHours, mockingSports };