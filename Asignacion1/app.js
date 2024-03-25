import {
  detallesNombre,
  habilidadesNombre,
  detallesTipo,
  listaPokemones,
  evolucionPokemon,
} from "./data.js";

//Primer Punto
//Ejercicio A
const pikachu = await detallesNombre("pikachu");

console.log(
  `Ejercicio A\nNombre : ${pikachu.name}\nAltura : ${pikachu.height}\nPeso : ${pikachu.weigth}`
);
//Fin A
//Ejercicio B
const bulbasaur = await habilidadesNombre("bulbasaur");

console.log(
  `Ejercicio B\nPokemon: ${bulbasaur[0]}\nPrimera habilidad : ${bulbasaur[1]}\nSegunda habilidad : ${bulbasaur[2]}`
);
//Fin B
//Ejercicio C
const fire = await detallesTipo("fire");

console.log(`Ejercicio C
Tipo:${fire.name}
Medio daño a tipo: ${fire.damage_relations.half_damage_to[0].name}
Doble daño a tipo: ${fire.damage_relations.double_damage_to[0].name}
Recibe doble daño de tipo: ${fire.damage_relations.double_damage_from[0].name}
`);
//Fin C
//Ejercicio D
const lista = await listaPokemones(50);

console.log(lista);
//Fin D

//Segundo Punto
const characterCardContainer = document.getElementById(
  "charactrer-card-container"
);
const episodeCardContainer = document.getElementById("episode-card-container");
const characterInput = document.getElementById("character-input");

characterInput.addEventListener("change", async () => {
  const characterID = characterInput.value.trim();

  if (isNaN(characterID) || characterID === "") {
    renderCharacterCard(null);
    alert("Ingrese un ID valido");
    characterInput.value = "";
    return;
  }

  try {
    const characterData = await evolucionPokemon(characterID);
    renderCharacterCard(characterData);
  } catch (error) {
    console.error("Error al pedir los datos ", error);
    renderCharacterCard(null);
  }
});

function renderCharacterCard(characterData) {
  if (!characterData) {
    characterCardContainer.innerHTML = "";
    return;
  }
  const formaBase = characterData.formaBaseData;
  const evolucion = characterData.evolucionData;

  const characterCard = document.createElement("div");
  characterCard.classList.add("character-card");

  const formaBaseTitulo = document.createElement("h2");
  formaBaseTitulo.textContent = "Forma Base";

  const formaBaseNombre = document.createElement("p");
  formaBaseNombre.textContent = `Nombre: ${formaBase.name}`;

  let formaBaseTipos = [];
  for (let i = 0; i < formaBase.types.length; i++) {
    formaBaseTipos[i] = formaBase.types[i].type.name;
  }

  const formaBaseTipo = document.createElement("p");
  formaBaseTipo.textContent = `Tipo: ${formaBaseTipos}`;

  const evolucionTitulo = document.createElement("h2");
  evolucionTitulo.textContent = "Evolucion";

  const evolucionNombre = document.createElement("p");
  evolucionNombre.textContent = `Nombre: ${evolucion.name}`;

  let evolucionTipos = [];
  for (let i = 0; i < formaBase.types.length; i++) {
    evolucionTipos[i] = evolucion.types[i].type.name;
  }

  const evolucionTipo = document.createElement("p");
  evolucionTipo.textContent = `Tipo: ${evolucionTipos}`;

  characterCard.appendChild(formaBaseTitulo);
  characterCard.appendChild(formaBaseNombre);
  characterCard.appendChild(formaBaseTipo);
  characterCard.appendChild(evolucionTitulo);
  characterCard.appendChild(evolucionNombre);
  characterCard.appendChild(evolucionTipo);

  characterCardContainer.appendChild(characterCard);
}

characterInput.addEventListener("input", () => {
  renderCharacterCard(null);
});
