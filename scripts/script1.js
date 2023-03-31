function add_zero(value){ 
  if (value.toString().length==1) return "0"+value.toString();
  else return value.toString();
}
const button_first=document.getElementById("btn_1");
button_first.addEventListener("click",(event) => {
    let now = new Date()
    day=now.getDay()
    year=now.getFullYear()
    month=now.getMonth()
    hours = now.getHours()
    minutes = now.getMinutes()
    seconds = now.getSeconds()
    month_ar=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Нояберь","Декабрь"];
    weakd_ar=["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
    const div=document.getElementsByClassName("date")[0]
    const p = div.querySelector("p");
    p.textContent = "Время: "+add_zero(hours)+":"+add_zero(minutes)+":"+add_zero(seconds)+'\n'+"Дата: "+year+" "+month_ar[month]+", "+weakd_ar[day-1]
    
    if (div.style.display == "none"){
      div.style.display = "table";
    }
    else {
      div.style.display = "none";
    }
  });
  

