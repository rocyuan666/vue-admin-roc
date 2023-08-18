export const getUsers = {
  url: '/mock/api/getRouters',
  method: 'get',
  response: () => {
    return {
      code: 200,
      msg: 'ok',
      data: [],
    }
  },
}
