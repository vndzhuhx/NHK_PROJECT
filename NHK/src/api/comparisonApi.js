import request from '@/utils/request'

export function comparison() {
  return request({
    url: '/dao/comparison',
    method: 'get'
  })
}
