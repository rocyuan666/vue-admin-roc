// 获取验证码
export const captchaImage = {
  url: '/mock/api/captchaImage',
  method: 'get',
  response: () => {
    return {
      captchaEnabled: true,
      code: 200,
      msg: 'ok',
      img: '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',
      uuid: '49d6727862e94889b454f30021d8bc34',
    }
  },
}

// 登录
export const login = {
  url: '/mock/api/login',
  method: 'post',
  response: () => {
    return {
      code: 200,
      msg: 'ok',
      token: 'token:xxxxxxxxxxxxxxxxxxxxxxxxx',
    }
  },
}

// 获取用户详细信息
export const getInfo = {
  url: '/mock/api/getInfo',
  method: 'get',
  response: () => {
    return {
      code: 200,
      msg: 'ok',
      permissions: ['*:*:*'],
      roles: ['admin'],
      user: {},
    }
  },
}

// 退出方法
export const logout = {
  url: '/mock/api/logout',
  method: 'post',
  response: () => {
    return {
      code: 200,
      msg: 'ok',
    }
  },
}

// 注册方法
export const register = {
  url: '/mock/api/register',
  method: 'post',
  response: () => {
    return {
      code: 200,
      msg: 'ok',
    }
  },
}
