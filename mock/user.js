// 查询用户个人信息
export const getUserProfile = {
  url: '/mock/api/profile',
  method: 'get',
  response: () => {
    return {
      code: 200,
      msg: 'ok',
      data: {},
    }
  },
}

// 修改用户个人信息
export const updateUserProfile = {
  url: '/mock/api/profile',
  method: 'put',
  response: () => {
    return {
      code: 200,
      msg: 'ok',
      data: {},
    }
  },
}

// 修改用户密码
export const updateUserPwd = {
  url: '/mock/api/updatePwd',
  method: 'put',
  response: () => {
    return {
      code: 200,
      msg: 'ok',
      data: {},
    }
  },
}

// 用户头像上传
export const uploadAvatar = {
  url: '/mock/api/avatar',
  method: 'post',
  response: () => {
    return {
      code: 200,
      msg: 'ok',
      data: {},
    }
  },
}
