import request from '@/utils/request'

export function initData() {
  return request({
    url: '/dao/generation',
    method: 'get'
  })
}
