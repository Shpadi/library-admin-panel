import apiClient from '../services/axios'

export default {
  getAuthor(id) {
    return apiClient.get(`/authors/${id}`)
  }
}
