// Change text content dynamically
const changeTextBtn = document.getElementById("changeTextBtn");
const dynamicText = document.getElementById("dynamicText");

changeTextBtn.addEventListener("click", () => {
  dynamicText.innerText = "The text has been changed dynamically!";
  dynamicText.classList.add("styled"); // Change styling
});

// Add a new element to the container
const addElementBtn = document.getElementById("addElementBtn");
const container = document.getElementById("container");

addElementBtn.addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.innerText = "This is a new dynamically added paragraph.";
  container.appendChild(newElement);
});

// Remove the last element from the container
const removeElementBtn = document.getElementById("removeElementBtn");

removeElementBtn.addEventListener("click", () => {
  const lastElement = container.lastElementChild;
  if (lastElement) {
    container.removeChild(lastElement);
  } else {
    alert("No more elements to remove!");
  }
});
