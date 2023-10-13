const input = document.getElementById("date")
const btn = document.getElementById("calculate")
const result =document.getElementById("result")

input.max = new Date().toISOString().split("T")[0];

btn.addEventListener("click", ()=>{
  let inputDate = new Date(input.value);
  let day1 = inputDate.getDate();
  let month1 = inputDate.getMonth()+1;
  let year1 = inputDate.getFullYear();


  let currentDate = new Date();
  let day2 = currentDate.getDate();
  let month2 = currentDate.getMonth()+1;
  let year2 = currentDate.getFullYear();
  
  let day3 , month3 , year3;

  year3 = year2 - year1

  if(month2 >= month1){
    month3 = month2 - month1;
  }else{
    year3--;
    month3 = 12 + month2 -month1
  }

  if(day2 >= day1){
    day3 = day2 - day1
  }else{
    month3--;
    day3 = getDaysMonth(year1,month1) + day2 - day1

  }
  if(month3 < 0){
    month3 = 11;
    year3--;
  }
  result.innerHTML = `You are ${year3} years, ${month3} month,${day3} days old`
})

function getDaysMonth(year,month){
    return new Date(year,month , 0).getDate();

}
console.log(getDaysMonth(23,10));
