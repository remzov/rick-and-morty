
export default async function getCharacters (apiUrl) {
  const response = await fetch(apiUrl)
  const responseJson = await response.json()

  const result = {
    characters: responseJson.results,
    nextApiUrl: responseJson.info.next
  }

  result.characters = result.characters.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.image,
      location: item.location.name,
      gender: item.gender,
      status: item.status
    }
  })

  return result
}
