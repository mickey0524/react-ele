export const shop = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/shop/shop').default)
  }, 'shop')
}

export const ac = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/shop/childComponent/activityDetail/activityDetail').default)
  }, 'ac')
}

export const shopDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/shop/childComponent/shopDetail/shopDetail').default)
  }, 'shopDetail')
}

export const shopIndex = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/shop/childComponent/shopIndex/shopIndex').default)
  }, 'shopIndex')
}