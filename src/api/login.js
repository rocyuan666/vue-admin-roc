import request from '@/utils/request'

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/mock/api/captchaImage',
    headers: {
      isToken: false,
    },
    method: 'get',
    timeout: 20000,
  })
}

// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid,
  }
  return request({
    url: '/mock/api/login',
    headers: {
      isToken: false,
    },
    method: 'post',
    data: data,
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/mock/api/getInfo',
    method: 'get',
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/mock/api/logout',
    method: 'post',
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/mock/api/register',
    headers: {
      isToken: false,
    },
    method: 'post',
    data: data,
  })
}
