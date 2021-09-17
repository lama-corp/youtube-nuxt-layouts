export const state = () => ({
  data: {
    title: 'Default title',
  },
})

export const actions = {}

export const mutations = {
  setDataTitle(state, title) {
    state.data.title = title
  },
  resetDataTitle(state) {
    state.data.title = 'Default title'
  },
}
