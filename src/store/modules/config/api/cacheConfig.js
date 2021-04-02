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
  },
  "duePeole": {
    "Status": 1,
    "Msg": "读取身份证信息成功.",
    "Operator": "MGDriveWizard.ZKTEcoHardware.ReadIDCard",
    "Data": {
      "Name": "王伟",
      "Gender": "男",
      "GenderCode": 1,
      "Nation": "汉",
      "NationCode": "01",
      "BirthDayDate": "1990-12-19",
      "Number": "411421199012190051",
      "Address": "河南省民权县绿洲街道办事处车站西街北段９６号",
      "Agency": "民权县公安局",
      "StartValidDate": "2017-01-27",
      "EndValidDate": "2037-01-27",
      "PhotoBase64": "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"
    }
  }
};

export default chacheConfig;