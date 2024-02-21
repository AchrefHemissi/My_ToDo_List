const Button = document.querySelector("input[type='button']");
let taskCount = 0;

Button.addEventListener("click", () => {
  let nameInput = document.querySelector('input[name="name"]');
  let contentInput = document.querySelector('input[name="content"]');

  let nameValue = nameInput.value.trim();
  let contentValue = contentInput.value.trim();

  if (nameValue == "" || contentValue == "") {
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Please fill out all the fields.";
    return;
  } else {
    errorMessage.textContent = "";

    taskCount++;

    let listItem = document.createElement("li");
    listItem.innerHTML = `
    <div class="list-group-item d-flex justify-content-between align-items-center">
        Task Number: ${taskCount} |  Topic : ${nameInput.value} | Task Description: ${contentInput.value} 
        <button class="btn btn-success btn-sm ml-2" style="margin-right: 10px;">Finished</button>
        <button class="btn btn-danger btn-sm float-right">Delete</button>
    </div>`;

    let finishedButton = listItem.querySelector(".btn-success");
    finishedButton.addEventListener("click", function () {
      this.parentNode.style.textDecoration = "line-through";
      this.disabled = true;
    });

    let deleteButton = listItem.querySelector(".btn-danger");
    deleteButton.addEventListener("click", function () {
      this.parentNode.parentNode.remove();
    });

    document.querySelector("ul").appendChild(listItem);

    nameInput.value = "";
    contentInput.value = "";
  }
});
