//cursor out of bb object   one of 4 img
//action -> 

(function () {
    const div = document.getElementById("task6");
    const btn = document.getElementById("btn_6");
    const img = document.getElementById("imgChange");

    img.addEventListener("mouseout", (event) =>{
        img.src = "/images/"+Math.round(Math.random()*4+1)+".jpg"
    });

    btn.addEventListener("click", (event) => {
            if (div.style.display === "block") {
                div.style.display = "none";
            } else {
                div.style.display = "block";
            }
        }
    );
}());