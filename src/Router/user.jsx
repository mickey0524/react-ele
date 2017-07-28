export const user = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/user').default)
  }, 'user')
}

export const userIndex = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/userIndex/userIndex').default)
  }, 'userIndex')
}

export const account = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/account/account').default)
  }, 'account')
}

export const setUserName = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/setUserName/setUserName').default)
  }, 'setUserName')
}

export const address = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/address/address').default)
  }, 'address')
}

export const addAddress = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/addAddress/addAddress').default)
  }, 'addAddress')
}

export const changePassword = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/changePassword/changePassword').default)
  }, 'changePassword')
}

export const balance = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/balance/balance').default)
  }, 'balance')
}