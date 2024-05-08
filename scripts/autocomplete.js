let availableKeywords = [];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

fetch('/get-json-files') // Make a GET request to the server
 .then(response => response.json()) // Parse the response as JSON
 .then(data => {
    availableKeywords = data; // Update the availableKeywords array
  })
 .catch(error => console.error('Error:', error)); // Catch any errors


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
    const content = result.map((list) => {
        return "<li>" + list + "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}