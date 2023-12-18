let displayTime = function () {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());
    if (hr > 12) {
      hr = hr - 12;
      document.getElementById("ampm").innerHTML = "PM";
    } else {
      document.getElementById("ampm").innerHTML = "AM";
    }

    document.getElementById("hours").innerHTML = padZero(hr);
    document.getElementById("mins").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
  };
  let padZero = function (num) {
    return num < 10 ? "0" + num : num;
  };
  setInterval(displayTime, 500);
  