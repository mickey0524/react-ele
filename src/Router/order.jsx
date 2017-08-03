export const order = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/order/order').default)
  }, 'order')
}

export const orderIndex = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/order/childComponent/orderIndex/orderIndex').default)
  }, 'orderIndex')
}

export const orderDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/order/childComponent/orderDetail/orderDetail').default)
  }, 'orderDetail')
}

export const confirmOrder = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/order/childComponent/confirmOrder/confirmOrder').default)
  }, 'confirmOrder')
}

export const orderNote = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/order/childComponent/orderNote/orderNote').default)
  }, 'orderNote')
}

export const orderInvoice = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Component/order/childComponent/orderInvoice/orderInvoice').default)
  }, 'orderInvoice')
}