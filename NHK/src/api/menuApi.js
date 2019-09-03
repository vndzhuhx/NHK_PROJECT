import request from '@/utils/request'

export function substitution() {
  return request({
    url: '/dao/substitution',
    type: 'get'
  })
}

export function fan() {
  return request({
    url: '/dao/fan',
    type: 'get'
  })
}
