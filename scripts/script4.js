(function () {
    const div = document.getElementById("task4");
    const btn = document.getElementById("btn_4");


    btn.addEventListener("click", (event) => {
            if (div.style.display === "block") {
                div.style.display = "none";
            } else {
                div.style.display = "block";
            }
        }
    );
}());