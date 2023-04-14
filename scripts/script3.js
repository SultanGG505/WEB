(function () {
    const div = document.getElementById("task3");
    const btn = document.getElementById("btn_3");

    const root = document.documentElement;
    const all_lists = root.querySelectorAll("list");
    let p = document.querySelectorAll("p")[1];

    p.textContent = "Количество листов: " + all_lists.length

    btn.addEventListener("click", (event) => {
        if (div.style.display === "block") {
            div.style.display = "none";
        } else {
            div.style.display = "block";
        }
    }
    );
}());