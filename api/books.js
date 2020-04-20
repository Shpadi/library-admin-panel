import apiClient from '../services/axios'

export default {
  getBooks() {
    return apiClient.get('/books')
  },

  getCurrentBook(id) {
    return apiClient.get(`/books/${id}`)
  }
}
