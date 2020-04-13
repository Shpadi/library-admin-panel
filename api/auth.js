import apiClient from '../services/axios'

export default {
  login(payload) {
    return apiClient.post('/auth/login', payload)
  }
}
