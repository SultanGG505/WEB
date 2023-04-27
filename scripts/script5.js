(function () {
    const btn = document.getElementById('btn_5');
    const div = document.getElementById('task5');
    const btn_add = document.getElementById("btn_5_add");
    const btn_swt = document.getElementById("btn_5_swith");
    const container = document.getElementById('task5');
    console.log(btn,div)
    btn_add.addEventListener("click", (event) => {

        let content = '';

        while (content !== null) {
            content = prompt('Введите содержимое нового элемента');

            if (content !== null) {
                const newElement = document.createElement('p');
                newElement.textContent = content;
                newElement.classList.add("elem")
                container.appendChild(newElement);
            }
        }
    });
    //const container = document.getElementById('container');

    // добавляем обработчик события click на кнопку switch
    btn_swt.addEventListener('click', () => {
        // запрашиваем у пользователя выбор двух элементов <p>
        const firstIndex = prompt('Введите индекс первого элемента');
        const secondIndex = prompt('Введите индекс второго элемента');

        // получаем список всех элементов <p>
        const elements = container.querySelectorAll('.elem');

        // проверяем, что индексы, введенные пользователем, являются корректными
        if (
            firstIndex >= 0 &&
            firstIndex < elements.length &&
            secondIndex >= 0 &&
            secondIndex < elements.length
        ) {
            // меняем местами выбранные элементы
            const temp = elements[firstIndex].innerHTML;
            elements[firstIndex].innerHTML = elements[secondIndex].innerHTML;
            elements[secondIndex].innerHTML = temp;
        } else {
            alert('Введенные индексы некорректны');
        }
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