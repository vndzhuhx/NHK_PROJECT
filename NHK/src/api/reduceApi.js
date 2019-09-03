import request from '@/utils/request'

export function reduce(reduceForm) {
  const data = {
    reduceForm
  }
  return request({
    url: '/dao/reduce',
    method: 'post',
    data
  })
}
