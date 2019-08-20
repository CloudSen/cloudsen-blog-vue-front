import axios from 'axios'
import { COMMON_URL } from './env'

const errorHandler = (code, message) => {
  switch (code) {
    // 未登录
    case 401:
      // 跳转登录页面
      break
    // token过期
    case 403:
      // 清除token
      // 跳转登陆页面
      break
    // 请求资源不存在
    case 404:
      break
    default:
      break
  }
  console.error(message)
}

const AXIOS = axios.create({
  baseURL: COMMON_URL,
  timeout: 30 * 1000,
})

const AUTH = {
  username: 'zuul',
  password: 'zuul',
}

// 设置post请求头
AXIOS.defaults.headers.post['Content-Type'] = 'application/json'
// 设置http basic认证
AXIOS.defaults.headers.common.Authorization = `Basic ${window.btoa(`${AUTH.username}:${AUTH.password}`)}`

console.log(`auth token: ${window.btoa(`${AUTH.username}:${AUTH.password}`)}`)

AXIOS.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
)

AXIOS.interceptors.response.use(
  (res) => {
    if (res && res.status === 200) {
      if (res.data && res.data.success && res.data.code === '200') {
        return Promise.resolve(res.data)
      }
      return Promise.reject(res.data)
    }
    return Promise.reject(res.data)
  },
  (error) => {
    const { response } = error
    if (response) {
      // 请求已发出，但是有异常
      errorHandler(response.code, response.message)
    } else {
      // 处理断网的情况
    }
    return Promise.reject(error)
  },
)

export default {
  get (url, params = null, headers = {}) {
    return AXIOS.get(url, {
      params,
      headers,
    })
  },
  post (url, data = null, headers = {}) {
    return AXIOS.post(url, data, {
      headers,
    })
  },
  patch (url, data = null, headers = {}) {
    return AXIOS.post(url, data, {
      headers,
    })
  },
  put (url, data = null, headers = {}) {
    return AXIOS.put(url, data, {
      headers,
    })
  },
  file (url, data = null, headers = {}) {
    return AXIOS.post(url, data, {
      headers: Object.assign({
        'Content-Type': 'multipart/form-data',
      }, headers),
    })
  },
  delete (url, params = null, headers = {}) {
    return AXIOS.delete(url, {
      params,
      headers,
    })
  },
}
