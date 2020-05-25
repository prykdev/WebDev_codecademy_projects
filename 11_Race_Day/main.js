var signedLate = true;
var runnersAge = 18;
let raceNumber = Math.floor(Math.random()*1000);

if(signedLate === true){
  raceNumber += 1000;}

if(raceNumber < 1000 && runnersAge > 18){
  console.log("you will race at 9:30 am with the number ${raceNumber}");
} else if(raceNumber < 1000 || runnersAge > 18){
  console.log("you will race at 11 pm with the number ${raceNumber}");
} else if(raceNumber >= 1000 && runnersAge < 18) {
  console.log("you will race at 12.30 pm with the number ${raceNumber}");
} else {
  console.log("please see registration desk")
}