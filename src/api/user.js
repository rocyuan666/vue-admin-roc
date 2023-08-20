import request from '@/utils/request'

// 查询用户个人信息
export function getUserProfile() {
  return request({
    url: '/mock/api/profile',
    method: 'get',
  })
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return request({
    url: '/mock/api/profile',
    method: 'put',
    data: data,
  })
}

// 修改用户密码
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword,
  }
  return request({
    url: '/mock/api/updatePwd',
    method: 'put',
    params: data,
  })
}

// 用户头像上传
export function uploadAvatar(data) {
  return request({
    url: '/mock/api/avatar',
    method: 'post',
    data: data,
  })
}
