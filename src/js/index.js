const characters = document.querySelectorAll(".character");
const characterImage = document.querySelector(".character-large");
const characterName = document.getElementById("character-name");
const characterDescription = document.getElementById("character-description");

const removeSelected = () => {
    const selectedCharacter = document.querySelector(".selected");
    selectedCharacter.classList.remove("selected");
}

const showCharacter = (character) => {
    characterImage.src = `src/images/selected-${character.id}.png`;
    characterName.innerText = character.getAttribute("data-name");
    characterDescription.innerText = character.getAttribute("data-description");
}

characters.forEach(character => {
    character.addEventListener("mouseenter", () => {
        removeSelected();
        
        character.classList.add("selected");

        showCharacter(character);
    })
});