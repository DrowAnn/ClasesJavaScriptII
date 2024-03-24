import { getCharacter, getEpisode } from "./data.js";

const characterCardContainer = document.getElementById(
  "charactrer-card-container"
);
const episodeCardContainer = document.getElementById("episode-card-container");
const characterInput = document.getElementById("character-input");

characterInput.addEventListener("change", async () => {
  const characterID = characterInput.value.trim();
  //console.log(characterID);
  if (isNaN(characterID) || characterID === "") {
    renderCharacterCard(null);
    hideEpisodeCard();
    alert("Ingrese un ID valido");
    characterInput.value = "";
    return;
  }

  try {
    const characterData = await getCharacter(characterID);
    renderCharacterCard(characterData);
  } catch (error) {
    console.error("Error al pedir los datos ", error);
    renderCharacterCard(null);
    hideEpisodeCard();
  }
});

function renderCharacterCard(characterData) {
  if (!characterData) {
    characterCardContainer.innerHTML = "";
    return;
  }
  const { name, image, species, gender, status, location, firstEpisode } =
    characterData;

  const characterCard = document.createElement("div");
  characterCard.classList.add("character-card");

  const characterImage = document.createElement("img");
  characterImage.src = image;
  characterImage.alt = name;

  const characterName = document.createElement("h2");
  characterName.textContent = name;

  const characterSpecies = document.createElement("p");
  characterSpecies.textContent = `Especie: ${species}`;

  const characterGender = document.createElement("p");
  characterGender.textContent = `Género: ${gender}`;

  const characterStatus = document.createElement("p");
  characterStatus.textContent = `Estado: ${status}`;

  const characterLocation = document.createElement("p");
  characterLocation.textContent = `Ubicación: ${location.name}`;

  characterCard.appendChild(characterImage);
  characterCard.appendChild(characterName);
  characterCard.appendChild(characterSpecies);
  characterCard.appendChild(characterGender);
  characterCard.appendChild(characterStatus);
  characterCard.appendChild(characterLocation);

  characterCardContainer.appendChild(characterCard);
}

function hideEpisodeCard() {
  episodeCardContainer.innerHTML = "";
  episodeCardContainer.style.display = "none";
}
