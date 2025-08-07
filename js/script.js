// TODO: add copy results button?
// TODO: force calculate score to scroll back to top of page or make new page
// TODO: make checkboxes boba
// https://stackoverflow.com/questions/44299150/set-text-inside-a-check-box

// Global variables
var debug = false;
var questions_array = []; //to be filled

// Elements
const div_msg = document.getElementById("messages-div");
const list_questions = document.getElementById("list");
const button_submit = document.getElementById("submit");
const button_reset = document.getElementById("reset");
const text_score = document.getElementById("score");

if (debug) {
  const init_msg = document.createElement("p");
  init_msg.textContent = "Initialized msg and list";
  div_msg.appendChild(init_msg);
}

// Event Listeners
button_submit.addEventListener("click", calculateScore);
button_reset.addEventListener("click", reset);

// Fetch and populate list of questions
fetch("assets\\list.csv")
  .then(response => response.text())
  .then(csv => {
    questions_array = csv.trim().split('\n');
  
    if (debug) {
      const fetch_msg = document.createElement("p");
      fetch_msg.textContent = "Array length: " + questions_array.length;
      div_msg.appendChild(fetch_msg); 
    }

    loadQuestions();
    
  })
  .catch((error) => {
    const error_msg = document.createElement("p");
    error_msg.textContent = error;
    div_msg.appendChild(error_msg);  
  })


// Functions

function loadQuestions() {
  for (var i=0; i < questions_array.length; i++) {
        const li = document.createElement("li");

        if (debug && i==0) {
          const li_msg = document.createElement("p");
          li_msg.textContent = "Created list";
          div_msg.appendChild(li_msg);
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "question"
        checkbox.id = `q-${i}`;
        checkbox.value = questions_array[i];

        const label = document.createElement("label");
        label.htmlFor = `q-${i}`;
        label.textContent = "\t"+questions_array[i];

        li.appendChild(checkbox);
        li.appendChild(label);

        list_questions.appendChild(li);
    }
}


function calculateScore() {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
  const score = questions_array.length - checked;
  
  text_score.textContent = `Score: ${score}`;

  return score;
}

function reset() {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');

  for (const box of checked) {
    box.checked = false;
  }
  // OR
  // checked.forEach(cb => cb.checked = false);

  if (debug) {
    const reset_msg = document.createElement("p");
    reset_msg.textContent = "reset";
    div_msg.appendChild(reset_msg);
  }
}