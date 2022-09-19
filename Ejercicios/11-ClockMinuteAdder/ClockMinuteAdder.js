function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:
  // Guardo horas y minutos:
  const [hours, minutes] = time.split(":");
  // Calculo total de minutos y horas:
  const totalMinutes = minutesToAdd + parseInt(minutes);
  const totalHours = Math.floor(totalMinutes / 60) + parseInt(hours);
  // Paso a formato 0-11hs y 0-59minutos:
  const newHours = ((totalHours - 1) % 12) + 1;
  const newMinutes = totalMinutes % 60;
  // Formato HH:MM:
  const formatHours = newHours > 10 ? newHours : `0${newHours}`;
  const formatMinutes = newMinutes > 10 ? newMinutes : `0${newMinutes}`;
  return `${formatHours}:${formatMinutes}`;
}
//console.log(clockMinuteAdder("09:00", 20)); //('09:20')
//console.log(clockMinuteAdder("01:30", 30)); //('02:00')
//console.log(clockMinuteAdder("12:05", 100)); //('01:45')
//console.log(clockMinuteAdder("06:30", 90)); //('08:00')
console.log(clockMinuteAdder("12:05", 1440)); //('12:05')
// function clockMinuteAdder(time, minutesToAdd) {
//   // Your code here:
//   console.log(time);
//   console.log(minutesToAdd);
//   const hours = time[0] + time[1];
//   console.log(hours);
//   const minutes = time[3] + time[4];
//   console.log(minutes);
//   let totalMinutes = parseInt(minutes) + minutesToAdd;
//   console.log(totalMinutes);
//   let finalMinutes = totalMinutes % 60;
//   console.log(totalMinutes);
//   const hoursToAdd = Math.floor(totalMinutes / 60);
//   let totalHours = parseInt(hours) + hoursToAdd;
//   totalHours = Math.floor(((totalHours - 1) % 12) + 1);
//   // 0 1 2 3 ... 11
//   //   1 2 3 ... 11 12 <---
//   if (totalHours < 10) totalHours = "0" + totalHours;
//   if (finalMinutes < 10) finalMinutes = "0" + finalMinutes;
//   return `${totalHours}:${finalMinutes}`;
// }
//}

module.exports = clockMinuteAdder
