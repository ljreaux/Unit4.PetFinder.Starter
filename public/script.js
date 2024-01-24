const ownerUrl = document.getElementById("owner");
const userInput = document.getElementById("ownerInput");

ownerUrl.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = ownerUrl.href + userInput.value;
});

const petUrl = document.getElementById("pet");
const petInput = document.getElementById("petInput");

petUrl.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = petUrl.href + petInput.value;
});

async function getOwnerNames() {
  const response = await fetch("../api/v1/pets");
  const json = await response.json();
  console.log(json);

  const petOwners = json.map((pet) => {
    const option = document.createElement("option");
    option.innerHTML = pet.owner;
    ownerInput.appendChild(option);
  });

  // ownerInput.innerHTML = petOwners;

  const petNames = json.map((pet) => {
    const option = document.createElement("option");
    option.innerHTML = pet.name;
    petInput.appendChild(option);
  });
}

getOwnerNames();
