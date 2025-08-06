const list_section = document.getElementById("list-section");

fetch("list.csv")
  .then(response => response.text())
  .then(csv => {
    const questions = csv.trim().split('\n');
    console.log(questions); 
  });

for (var i=0; i < questions.length; i++) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "question"
    checkbox.id = `q-${i}`;
    checkbox.value = questions[i];

    const label = document.createElement("label");
    label.htmlFor = `q-${i}`;
    label.textContent = questions[i];

    li.appendChild(checkbox);
    li.appendChild(label);

    list_section.appendChild(li);
}

