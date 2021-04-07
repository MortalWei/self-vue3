/**
 * 接口访问
 * @author Mortal
 * @date 2021/4/7
 * */
import ajax from "@/api/ajax";
import api from "@/api/index";

/**
 * 初始化App
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const initApp = data => {
  return ajax.post(api.initApp, data);
};

/**
 * 心跳包
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const heartbeat = data => {
  return ajax.post(api.heartbeat, data);
};

/**
 * 查询已生效订单（在住单）
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const queryOrderEffect = data => {
  return ajax.post(api.queryOrderEffect, data);
};

/**
 * 查询未生效订单（预订单）
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const queryOrder = data => {
  return ajax.post(api.queryOrder, data);
};

/**
 * 根据订单号查询订单
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const queryOrderOfId = data => {
  return ajax.post(api.queryOrderOfId, data);
};

/**
 * 根据手机号查询订单
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const queryOrderOfPhone = data => {
  return ajax.post(api.queryOrderOfPhone, data);
};

/**
 * 根据分房码查询订单
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const queryOrderOfAllot = data => {
  return ajax.post(api.queryOrderOfAllot, data);
};

/**
 * 获取支付二维码
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const queryPayQr = data => {
  return ajax.post(api.queryPayQr, data);
};

/**
 * 获取订单支付状态
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const queryPayStatus = data => {
  return ajax.post(api.queryPayStatus, data);
};

/**
 * 入住
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const checkIn = data => {
  return ajax.post(api.checkIn, data);
};

/**
 * 获取制（房）卡信息
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const queryCardInfo = data => {
  return ajax.post(api.queryCardInfo, data);
};

/**
 * 回写制（房）卡信息
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const writeCardInfo = data => {
  return ajax.post(api.writeCardInfo, data);
};

/**
 * 查询账单信息
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const queryBills = data => {
  return ajax.post(api.queryBills, data);
};

/**
 * 退房
 * @param data
 * @returns {Promise<AxiosResponse<*>>}
 */
export const checkOut = data => {
  return ajax.post(api.checkOut, data);
};

export default {
  initApp,
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
