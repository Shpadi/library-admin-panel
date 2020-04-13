import auth from '~/api/auth'

export default {
  async login({ dispatch }, data) {
    const { data: { token } } = await auth.login(data)
    localStorage.setItem('token', token)
    this.$router.push('/')
  },

  logOut(_) {
    localStorage.removeItem('token')
    this.$router.push('/login')
  }
}
