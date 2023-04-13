function add_zero(value){ 
  if (value.toString().length==1) return "0"+value.toString();
  else return value.toString();
}
const button_first=document.getElementById("btn_1");
button_first.addEventListener("click",(event) => {
    let now = new Date()
    const day=now.getDay()
    const year=now.getFullYear()
    const month=now.getMonth()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const month_ar=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
    const weakd_ar=["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const div=document.getElementsByClassName("date")[0]
    const p = div.querySelector("p");
    p.textContent = "Время: "+add_zero(hours)+"-"+add_zero(minutes)+"-"+add_zero(seconds)+ ampm +'\n'+"Дата: "+year+" "+ day+" "+month_ar[month]+", "+weakd_ar[day-1]
    
    if (div.style.display != "table"){
      div.style.display = "table";
    }
    else {
      div.style.display = "none";
    }
  });
  

