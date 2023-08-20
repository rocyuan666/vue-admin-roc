import { getRouters } from './menu'
import { login, captchaImage, getInfo, logout, register } from './login'
import { getUserProfile, updateUserProfile, updateUserPwd, uploadAvatar } from './user'
import { getDicts } from './dict'

/**
 * 必须的接口:
 * login
 * getInfo
 * getRouters
 * logout
 */

export default [
  getRouters,
  login,
  captchaImage,
  getInfo,
  logout,
  register,
  getUserProfile,
  updateUserProfile,
  updateUserPwd,
  uploadAvatar,
  getDicts,
]
