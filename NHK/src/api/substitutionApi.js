import request from '@/utils/request'

export function saveAll(file) {
  var data = {
    file: file
  }
  return request({
    url: '/substitutionDao/saveAll',
    method: 'post',
    data
  })
}

export function saveSub(param) {
  var data = {
    param: param
  }
  return request({
    url: '/substitutionDao/saveSub',
    method: 'post',
    data
  })
}

export function find() {
  return request({
    url: '/substitutionDao/substitution',
    method: 'get'
  })
}

export function saveCase1(param) {
  var data = {
    param: param
  }
  return request({
    url: '/substitutionDao/saveCase1',
    method: 'post',
    data
  })
}

export function saveCase2(param) {
  var data = {
    param: param
  }
  return request({
    url: '/substitutionDao/saveCase2',
    method: 'post',
    data
  })
}

export function saveCase3(param) {
  var data = {
    param: param
  }
  return request({
    url: '/substitutionDao/saveCase3',
    method: 'post',
    data
  })
}
