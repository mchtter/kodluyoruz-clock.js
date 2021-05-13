function clockFunc() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var dayName = date.getDay()

  switch (dayName) {
    case 0:
      dayName = "Pazar"
      break;
    case 1:
      dayName = "Pazartesi"
      break;
    case 2:
      dayName = "Salı"
      break;
    case 3:
      dayName = "Çarşamba"
      break;
    case 4:
      dayName = "Perşembe"
      break;
    case 5:
      dayName = "Cuma"
      break;
    case 6:
      dayName = "Cumartesi"
      break;
    default:
      break;
  }

  var time = day + "/" + (month + 1) + "/" + year + " " + "-" + "" + hour + ":" + minute + ":" + second + " " + dayName;
  document.getElementById("clockShow").innerText = time;
  document.getElementById("clockShow").textContent = time;

  setTimeout(clockFunc, 1000);
}

function namePrompt() {
  var name = prompt("Adınız nedir?");
  document.getElementById("myName").innerText = name;
}

namePrompt();
clockFunc();