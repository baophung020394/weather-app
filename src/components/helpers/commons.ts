export const formatDate = (date: Date): string => {
  let day: string | number = date.getDate();
  let month: string | number = date.getMonth() + 1;
  const year: number = date.getFullYear();
  let hours: number = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm: string = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  return `${day}-${month}-${year} ${hours}:${minutes}${ampm}`;
};
