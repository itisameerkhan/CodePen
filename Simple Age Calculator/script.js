function calculate() {
    let birthdate = new Date(document.getElementById("birthdate").value);
    let now = new Date();
    console.log(birthdate);
  
    let ageInMs = now.getTime() - birthdate.getTime();
    let ageInS = ageInMs / 1000;
    let ageInMins = ageInS / 60;
    let ageInHrs = ageInMins / 60;
    let ageInDays = ageInHrs / 24;
    let ageInMonths = ageInDays / 30.4375;
    let ageInYears = ageInMonths / 12;
  
    console.log(ageInYears);
  
    document.getElementById("year").innerHTML = Math.floor(ageInYears) + " - ";
    document.getElementById("months").innerHTML = Math.floor(ageInMonths) + " - ";
    document.getElementById("days").innerHTML = Math.floor(ageInDays) + " - ";
    document.getElementById("hours").innerHTML = Math.floor(ageInHrs) + " - ";
  }
  
  function reset() {
    window.location.reload();
  }
  