import axios from 'axios'
import qs from 'qs'

export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}

export function get (url, params) {
  const paramsToUrl = qs.stringify(params, { skipNulls: true })
  url = `${url}?${paramsToUrl}`
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => {
        resolve(res)
      })
      .catch(e => {
        reject(e)
      })
  })
}
