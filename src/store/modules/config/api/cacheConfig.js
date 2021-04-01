/**
 * @author Mortal
 * @date 2021/4/1
 * */

/**
 * 配置默认值
 * @type {{msgInfo: {confirmOrder: {subtitle: string, title: string}, foundOrder: {subtitle: string, title: string}, overscan: {subtitle: string, title: string}, payment: {subtitle: string, title: string}, scanIdCard: {subtitle: string, title: string}, searchOrder: {subtitle: string, title: string}, scanFace: {subtitle: string, title: string}}}}
 */
const chacheConfig = {
  "msgInfo": {
    "scanIdCard": {
      "title": "请将预定人的身份证件放在识别区域",
      "subtitle": ""
    },
    "searchOrder": {
      "title": "身份证件扫描成功",
      "subtitle": "正在查询您的订单，请稍后"
    },
    "foundOrder": {
      "title": "尊敬的{0}，您好",
      "subtitle": "您有{0}个订单{1}个房间"
    },
    "payment": {
      "title": "请扫描屏幕上的二维码完成支付",
      "subtitle": "房费：{0}"
    },
    "confirmOrder": {
      "title": "请确认您的入住信息",
      "subtitle": ""
    },
    "overscan": {
      "title": "请在图示区域扫描身份证办理入住",
      "subtitle": ""
    },
    "scanFace": {
      "title": "根据公安要求，请进行人脸识别",
      "subtitle": ""
    }
  }
};

export default chacheConfig;