export default function formatDate(str) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  let getDate = new Date(str);
  let month = getDate.getMonth();
  let day = getDate.getDay();
  let date = getDate.getDate();
  let year = getDate.getFullYear();

  let dateNow = new Date();
  let getYearNow = dateNow.getFullYear();

  let result;
  if (year === getYearNow) {
    result = `${days[day - 1]} - ${date} ${months[month]}`;
  } else {
    result = `${date} ${months[month]} - ${year}`;
  }

  return result;
}
