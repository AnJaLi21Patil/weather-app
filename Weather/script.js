 
 
 const temperatureField= document.querySelector(".temp");
 const locationField= document.querySelector(".time_location p");
 const dateandTimeField= document.querySelector(".time_location span");
 const conditionField= document.querySelector(".condition p");
 const searchField= document.querySelector(".search_area");
 const form = document.querySelector("form");


 document.addEventListener("DOMContentLoaded", function() {
   const form = document.querySelector(".form");
    addEventListener('submit', searchForLocation);
 });


 
 let target = 'sangli';
 
 const fetchResults=async(targetLocation)=>{

    let url = `http://api.weatherapi.com/v1/current.json?key=23ef1990c11746ed93e91049243009&q=${targetLocation}&aqi=no`;
 const res = await fetch(url);
 const data = await res.json();
 console.log(data);

 let locationName = data.location.name;
 let time = data.location.localtime;

 let temp = data.current.temp_c;
 let condition = data.current.condition.text ;
 updateDetails(temp ,locationName,time,condition);
 };


 function updateDetails(temp ,locationName,time,condition){
   let splitDate = time.split(" ")[0];
   let splitTime = time.split(" ")[1];
   let currentDay = getDayName(new Date (splitDate).getDay())

   temperatureField.innerText=temp;
   locationField.innerText=locationName;
   
   if (dateandTimeField !== null) {
    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
  } else {
    console.log("dateandTimeField is null");
  }
   conditionField.innerText=condition;
 }


 function searchForLocation(e){
   e.preventDefault();
   target = searchField.value;
   fetchResults(target);
}
 fetchResults(target);



 function getDayName(number){
 switch(number){
  case 0:
    return"sunday"
    case 1:
    return"monday"
    case 2:
    return"tuesday"
    case 3:
    return"wednesday"
    case 4:
    return"thursday"
    case 5:
    return"friday"
    case 6:
    return"saturday"

 }
 }

 