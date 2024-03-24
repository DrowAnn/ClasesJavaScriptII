/*
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
*/

export async function getCharacter(id) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();

    const firstEpisodeUrl = data.episode[0];
    const episodeResponse = await fetch(firstEpisodeUrl);
    const episodeData = await episodeResponse.json();

    return {
      ...data,
      firstEpisode: {
        id: episodeData.id,
        name: episodeData.name,
        episode: episodeData.episode,
        airDate: episodeData.air_date,
        characters: episodeData.characters.length,
      },
    };
  } catch (error) {
    console.error("Error al pedir los datos ", error);
  }
}

export async function getEpisode(episodeId) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${episodeId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al pedir los datos del episodio ", error);
  }
}
