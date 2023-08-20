export const getDicts = {
  url: '/mock/api/dict/data/type/',
  method: 'get',
  response: () => {
    return {
      code: 200,
      msg: 'ok',
      data: [],
    }
  },
}
