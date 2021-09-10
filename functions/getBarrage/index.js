/* eslint-disable no-console */
const tcb = require('@cloudbase/node-sdk')

const app = tcb.init({ env: 'wedding-8golxnc0da734bc5' })
const db = app.database()
const barrageCollection = db.collection('wedding-invitation-barrage')


const auth = app.auth();

async function login(){
  await auth.anonymousAuthProvider().signIn();
  // 匿名登录成功检测登录状态isAnonymous字段为true
  const loginState = await auth.getLoginState();
  console.log(loginState.isAnonymousAuth); // true
}

login();



exports.main = async () => {
  let result

  try {
    result = await barrageCollection
      .orderBy('createdTs', 'desc')
      .limit(200)
      .field({ content: true })
      .get()
      .then(({ data = [] } = {}) => {
        return data.map(item => item.content)
      })
  } catch (e) {
    console.error(e)
    return { code: -1, msg: '查询失败' }
  }

  return { code: 0, result }
}