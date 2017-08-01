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

export const giftMoney = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/giftMoney/giftMoney').default)
  }, 'giftMoney')
}

export const integral = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/integral/integral').default)
  }, 'integral')
}

export const memberCard = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/memberCard/memberCard').default)
  }, 'memberCard')
}

export const exchangeCard = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/exchangeCard/exchangeCard').default)
  }, 'exchangeCard')
}

export const buyRecord = (locaiton, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/user/childComponent/buyRecord/buyRecord').default)
  }, 'buyRecord')
}