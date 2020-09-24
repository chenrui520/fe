import request from './request'

export default class Manager {
  constructor(resource) {
    this.resource = resource
  }

  list({ params } = {}) {
    // eslint-disable-next-line no-proto
    console.log(request.get)
    return request.get(`${this.resource}`, params)
  }

  create({ params } = {}) {
    return request.post(`${this.resource}`, params)
  }

  get({ id, params } = {}) {
    return request.get(`${this.resource}/${id}`, { params })
  }
}