// const charactersAPI = new APIHandler('http://localhost:8000');
const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async (event) => {
      const result = await charactersAPI.getFullList();
      const charactersDiv = document.querySelector(".characters-container");
      charactersDiv.innerHTML = "";
      result.data.forEach((character) => {
        charactersDiv.innerHTML += `
      <div class="character-info">
      <div class="name"> Character Name: ${character.name}</div>
      <div class="occupation"> Character Occupation: ${character.occupation}</div>
      <div class="weapon"> Character Weapon: ${character.weapon}</div>
        `;
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async (event) => {
      const id = document.querySelector("input[name=character-id]").value;
      const result = await charactersAPI.getOneRegister(id);
      console.log(result);
      const charactersDiv = document.querySelector(".characters-container");
      charactersDiv.innerHTML += `
      <div class="character-info">
      <div class="name"> Character Name: ${character.name}</div>
      <div class="occupation"> Character Occupation: ${character.occupation}</div>
      <div class="weapon"> Character Weapon: ${character.weapon}</div>
        `;
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
