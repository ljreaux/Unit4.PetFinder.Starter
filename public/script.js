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
    const li = document.createElement("li");
    li.innerHTML = pet.owner;
    return li;
  });
  const ownerList = document.getElementById("ownerNames");
  ownerList.append(...petOwners);

  const petNames = json.map((pet) => {
    const li = document.createElement("li");
    li.innerHTML = pet.name;
    return li;
  });
  const petList = document.getElementById("petNames");
  petList.append(...petNames);
}

getOwnerNames();
