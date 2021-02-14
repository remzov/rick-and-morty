import { apiUrl } from '../constants'
import getCharacters from '../api/getCharacters'
import getCurrentCharacter from '../api/getCurrentCharacter'

export const state = () => ({
  characters: [],
  currentCharacter: null,
  nextApiUrl: apiUrl,
  isLoading: false
})

export const actions = {
  async getCharacters ({ state, commit }) {
    commit('toggleLoadingStatus')
    const result = await getCharacters(state.nextApiUrl)
    commit('addCharacters', result.characters)
    commit('setNextApiUrl', result.nextApiUrl)
    commit('toggleLoadingStatus')
  },

  async getCurrentCharacter ({ commit }, payload) {
    const character = await getCurrentCharacter(payload)
    commit('setCurrentCharacter', character)
  }
}

export const mutations = {
  addCharacters (state, payload) {
    state.characters = state.characters.concat(payload)
  },

  setNextApiUrl (state, payload) {
    state.nextApiUrl = payload
  },

  setCurrentCharacter (state, payload) {
    state.currentCharacter = payload
  },

  toggleLoadingStatus (state) {
    state.isLoading = !state.isLoading
  }
}
