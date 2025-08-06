var debug = false;
var questions_array = []; //to be filled
const msg = document.getElementById("messages");
const list = document.getElementById("list");

if (debug) {
  const init_msg = document.createElement("p");
  init_msg.textContent = "Initialized msg and list";
  msg.appendChild(init_msg);
}


fetch("list.csv")
  .then(response => response.text())
  .then(csv => {
    questions_array = csv.trim().split('\n');
  
    if (debug) {
      const fetch_msg = document.createElement("p");
      fetch_msg.textContent = "Array length: " + questions_array.length;
      msg.appendChild(fetch_msg); 
    }

    load_questions();
    
  })
  .catch((error) => {
    const error_msg = document.createElement("p");
    error_msg.textContent = error;
    msg.appendChild(error_msg);  
  })
  .finally()


function load_questions() {
  for (var i=0; i < questions_array.length; i++) {
        const li = document.createElement("li");

        if (debug && i==0) {
          const li_msg = document.createElement("p");
          li_msg.textContent = "Created list";
          msg.appendChild(li_msg);
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

        list.appendChild(li);
    }
}
