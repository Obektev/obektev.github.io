import { tasksInfo } from './tasks.js'

let availableKeywords = [];

for (var key in tasksInfo) {
    availableKeywords.push(key);
}

console.log(availableKeywords);

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;

    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });   
        
        console.log(result);
        if (result.length != 0)
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
            window.open(tasksInfo[item], "_blank");
        });
        return li;
    });
    const ul = document.createElement('ul');
    ul.append(...content);
    resultsBox.innerHTML = '';
    resultsBox.appendChild(ul);
}
