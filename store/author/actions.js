import auth from '~/api/author'

export default {
  async getAuthor({ commit }, id) {
    const { data } = await auth.getAuthor(id)
    return data
  }
}
