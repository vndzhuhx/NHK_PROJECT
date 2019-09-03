import request from '@/utils/request'

export function verification() {
  return request({
    url: '/dao/verification',
    method: 'get'
  })
}
