import { apiUrl } from '../constants'

export default async function getCharacter (id) {
  const response = await fetch(`${apiUrl}/${id}`)
  const responseJson = await response.json()

  return {
    name: responseJson.name,
    gender: responseJson.gender,
    image: responseJson.image,
    location: responseJson.location.name,
    status: responseJson.status
  }
}
