import client from '~/services/axios'


export default async ({store}) => {
  client.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  });

  client.interceptors.response.use(undefined, err => {
    let res = err.response;
    if (res.status === 401) {
      store.dispatch('auth/logOut')
    }
  })
}
