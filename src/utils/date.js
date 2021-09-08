export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const d = date.getDate().toString();
  const day = (d.length === 1) ? `0${d}` : d;
  const m = (date.getMonth() + 1).toString();
  const month = (m.length === 1) ? `0${m}` : m;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export const getWeekDay = (dateString) => {
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const d = new Date(dateString);
  return days[d.getDay()];
}