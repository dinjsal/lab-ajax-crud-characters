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
      <div class="name"> Character Name: ${result.data.name}</div>
      <div class="occupation"> Character Occupation: ${result.data.occupation}</div>
      <div class="weapon"> Character Weapon: ${result.data.weapon}</div>
        `;
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async (event) => {
      const id = document.querySelector(
        "input[name=character-id-delete]"
      ).value;
      const result = await charactersAPI.deleteOneRegister(id);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const id = document.querySelector(
        "#edit-character-form input[name=chr-id]"
      ).value;
      const name = document.querySelector(
        "#edit-character-form input[name=name]"
      ).value;
      const occupation = document.querySelector(
        "#edit-character-form input[name=occupation]"
      ).value;
      const weapon = document.querySelector(
        "#edit-character-form input[name=weapon]"
      ).value;
      const cartoon = document.querySelector(
        "#edit-character-form input[name=cartoon]"
      ).checked;
      const character = {
        id,
        name,
        occupation,
        weapon,
        cartoon,
      };
      const result = await charactersAPI.updateOneRegister(character);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.querySelector("input[name=name]").value;
      const occupation = document.querySelector("input[name=occupation]").value;
      const weapon = document.querySelector("input[name=weapon]").value;
      const cartoon = document.querySelector("input[name=cartoon]").checked;
      const character = {
        name,
        occupation,
        weapon,
        cartoon,
      };
      const result = await charactersAPI.createOneRegister(character);
    });
});
