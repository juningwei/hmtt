import theAxios from 'axios'
const axios = theAxios.create({
  baseURL: 'http://geek.itheima.net',
  timeout: 20000 // 20秒超时时间(请求20秒无响应直接判定超时)
})
export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}
