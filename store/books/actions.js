import books from '~/api/books'

const _groupBy = require('lodash/groupBy')

export default {
  async getBooks({ commit, dispatch }) {
    const { data } = await books.getBooks()
    const booksGroupByAuthors = _groupBy(data, 'author')
    const authors = Object.keys(booksGroupByAuthors)
    const authorsPromise = authors.map(item => {
      return new Promise((resolve) => {
        resolve(dispatch('author/getAuthor', item, { root: true }))
      })
    })
    const authorsData = await Promise.all(authorsPromise)
    data.forEach(book => {
      book.author = authorsData.find(item => item._id === book.author)
    })
    commit('setBooks', data)
  },

  async getCurrentBook({ commit, dispatch }, id) {
    try {
      const { data: book } = await books.getCurrentBook(id)
      book.author = await dispatch('author/getAuthor', book.author, { root: true })
      commit('setCurrentBook', book)
    } catch (e) {
      console.log(e)
    }
  }
}
