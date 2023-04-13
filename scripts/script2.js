function daysInMonth (month, year) {
    return new Date(year, month+1, 0).getDate();
}
let now = new Date();
const currentMonth = now.getMonth()
const currentDay = now.getDate()
const btn = document.getElementById("btn_2")
btn.addEventListener("click", (event)=>{
	createCalendar();
	const div = document.getElementsByClassName("calendar")[0]
    if (div.style.display == "block"){
        div.style.display = "none";
      }
      else {
        div.style.display = "block";
      }
});



function createCalendar(){
	const div = document.getElementsByClassName("calendar")[0]
    
    let current_day = now.getUTCDate()
    const weakd_ar=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];
    const month_n_ar=["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    now.setDate(1);
	
    let year =now.getFullYear();
    let month=now.getMonth();
    let day_of_week =now.getDay();
    let current_day_number =daysInMonth(month,year)
    let prev_day_number =daysInMonth(month-1,year)
	
    if (day_of_week==0) day_of_week=7;
	
    let month_ar=[]
	
    for (let i=prev_day_number-day_of_week+2; i<=prev_day_number;i++) month_ar.push(i);
    for (let i=1;i<=current_day_number;i++) month_ar.push(i);
    
	var i = 1
    while (month_ar.length<35){
        month_ar.push(i++);
    }
    let num = day_of_week-2+current_day
	
	let table = `<div class="row">
	<button id="calendarPrev" class="text btn"><<<</button>
	<caption class="text">${month_n_ar[month]}</caption>
	<button id="calendarNext" class="text btn">>>></button>
	</div>
	<table class="second_table">`
    for (let i=0;i<7;i++) table+='<th class="text">'+weakd_ar[i]+'</th>'
	let curday = ""
	if (currentMonth == now.getMonth()) curday = "text current_day"
	console.log(currentMonth+" "+now.getMonth())
    for (let i=1; i<=month_ar.length;i++){
        
        if (i%7==1) table+=('<tr class="text">');
        if (i-1<=day_of_week-2||i-1>=day_of_week-1+current_day_number) 
        {   if (i<day_of_week-1+current_day)  table+=('<td class="not_cur_month before_d">'+month_ar[i-1]+'<\/td>');
            else table+=('<td class="not_cur_month">'+month_ar[i-1]+'<\/td>');} 
        else {
        if (i-1==num) table+=(`<td class="${curday}">`+month_ar[i-1]+'<\/td>');
        else {
            if (i<day_of_week-1+current_day) table+=('<td class="before_d">'+month_ar[i-1]+'<\/td>');
            else table+=('<td>'+month_ar[i-1]+'<\/td>');}
        }
        if (i%7==0) table+=('<\/tr>');
    }
    table+=('<\/table>');
    div.innerHTML = table;
	const prevBtn = document.getElementById("calendarPrev");
const nextBtn = document.getElementById("calendarNext");

prevBtn.addEventListener("click", (event) => {
  now.setMonth(now.getMonth() - 1);
  now.setDate(currentDay)
  createCalendar();
});

nextBtn.addEventListener("click", (event) => {
  now.setMonth(now.getMonth() + 1);
  now.setDate(currentDay)
  createCalendar();
});
}