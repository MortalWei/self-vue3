/**
 * API
 * @author Mortal
 * @date 2021/4/7
 * */

/**
 * 初始化app接口
 * @type {string}
 */
const initApp = "/sapi/startinit";

/**
 * 心跳接口
 * @type {string}
 */
const heartbeat = "/sapi/heartbeat";

/**
 * 查询已生效订单（在住单）
 * @type {string}
 */
const queryOrderEffect = "/sapi/inhouseorders";

/**
 * 查询未生效订单（预订单）
 * @type {string}
 */
const queryOrder = "/sapi/resorders";

/**
 * 根据订单号查询订单
 * @type {string}
 */
const queryOrderOfId = "/sapi/resorders/keywords";

/**
 * 根据手机号查询订单
 * @type {string}
 */
const queryOrderOfPhone = "";

/**
 * 根据分房码查询订单
 * @type {string}
 */
const queryOrderOfAllot = "";

/**
 * 获取支付二维码
 * @type {string}
 */
const queryPayQr = "/sapi/payqrcode";

/**
 * 获取订单支付状态
 * @type {string}
 */
const queryPayStatus = "/sapi/paystatus";

/**
 * 入住接口
 * @type {string}
 */
const checkIn = "/sapi/checkin";

/**
 * 获取制（房）卡信息
 * @type {string}
 */
const queryCardInfo = "/sapi/writecardinfo";

/**
 * 回写制（房）卡信息
 * @type {string}
 */
const writeCardInfo = "/sapi/writecard";

/**
 * 查询账单信息
 * @type {string}
 */
const queryBills = "/sapi/bills";

/**
 * 退房接口
 * @type {string}
 */
const checkOut = "/sapi/checkout";

export default {
  initApp,
  heartbeat,
  queryOrderEffect,
  queryOrder,
  queryOrderOfId,
  queryOrderOfPhone,
  queryOrderOfAllot,
  queryPayQr,
  queryPayStatus,
  checkIn,
  queryCardInfo,
  writeCardInfo,
  queryBills,
  checkOut
};