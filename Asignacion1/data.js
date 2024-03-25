/*
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
*/

export async function detallesNombre(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );
    const data = await response.json();

    const name = data.name;
    const height = data.height;
    const weigth = data.weigth;

    return { name: name, height: height, weigth: weigth };
  } catch (error) {
    console.error("Error al pedir los datos ", error);
  }
}

export async function habilidadesNombre(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );

    const data = await response.json();
    const name = data.name;
    const habilidad1 = data.abilities[0].ability.name;
    const habilidad2 = data.abilities[1].ability.name;

    return [name, habilidad1, habilidad2];
  } catch (error) {
    console.error("Error al pedir los datos ", error);
  }
}

export async function detallesTipo(tipo) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${tipo}/`);

    const data = await response.json();

    return { ...data };
  } catch (error) {
    console.error("Error al pedir los datos ", error);
  }
}

export async function listaPokemones(numero) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${numero}`
    );

    const data = await response.json();
    let arregloNombres = [];

    for (let i = 0; i < 50; i++) {
      arregloNombres[i] = data.results[i].name;
    }

    return arregloNombres;
  } catch (error) {
    console.error("Error al pedir los datos ", error);
  }
}

export async function evolucionPokemon(id) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}`
    );
    const data = await response.json();

    const formaBaseName = data.chain.species.name;
    const formaBase = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${formaBaseName}`
    );
    const formaBaseData = await formaBase.json();

    const evolucionName = data.chain.evolves_to[0].species.name;
    const evolucion = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${evolucionName}`
    );
    const evolucionData = await evolucion.json();

    return {
      formaBaseData: formaBaseData,
      evolucionData: evolucionData,
    };
  } catch (error) {
    console.error("Error al pedir los datos ", error);
  }
}
