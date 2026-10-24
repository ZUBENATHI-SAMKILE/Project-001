const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // click a task to mark it as done
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  list.appendChild(li);
  input.value = "";
});