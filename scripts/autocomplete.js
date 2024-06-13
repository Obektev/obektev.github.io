let searchWords = [];

const response = await fetch('../staff/solutions.json');
const data = await response.json();

for (let i = 0; i < data.length; i++) {
    const solution = data[i];
    searchWords.push('['+ solution['task_number'] + '] ' + solution['title']);
}

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;

    if (input.length) {
        result = searchWords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });   

        if (result.length !== 0)
            display(result);
        else
            resultsBox.innerHTML = "";
    } else
        resultsBox.innerHTML = "";
}

function display(result) {
    const content = result.map((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', function() {
            window.open('../tasks/template.html?task_number=' + item.slice(1, 5), "_blank");
        });
        return li;
    });
    const ul = document.createElement('ul');
    ul.append(...content);
    resultsBox.innerHTML = '';
    resultsBox.appendChild(ul);
}
