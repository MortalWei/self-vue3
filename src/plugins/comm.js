/*
 * @author Mortal
 * @date 2021/3/15
 */

/**
 * 时间格式化工具
 * @param inputDate
 * @param formatter
 * @returns {string}
 */
const teFmt = (inputDate, formatter = "yyyy年MM月dd日 hh:mm:ss W") => {
  let date = strToDate(inputDate);
  const weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const o = {
    "M+": date.getMonth() + 1,  // 月
    "d+": date.getDate(),       // 日
    "h+": date.getHours(),      // 时
    "m+": date.getMinutes(),    // 时
    "s+": date.getSeconds(),    // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3),      // 季度
    "S": date.getMilliseconds(), // 毫秒
    "W": weeks[date.getDay()]
  };
  if (/(y+)/.test(formatter)) {
    formatter = formatter.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(formatter)) formatter = formatter.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }
  return formatter;
};

/**
 * 转换成时间
 * @param dateStr
 * @returns {string|null|Date}
 */
const strToDate = (dateStr) => {
  if (!dateStr) {
    return null;
  }
  let date;
  // 字符串格式
  if (dateStr instanceof Date) {
    date = dateStr;
  } else {
    // 时间戳
    if (!isNaN(dateStr)) {
      // 时间戳
      if (dateStr.toString().length == 10) {
        date = new Date(dateStr * 1000);
      } else if (dateStr.toString().length == 13) {
        date = new Date(dateStr);
      } else {
        return "";
      }
    } else {
      if (dateStr.indexOf(".") > -1) {
        // 有些日期接口返回数据中带有".0"
        dateStr = dateStr.substring(0, dateStr.indexOf("."));
      }
      // 解决localtime T
      dateStr = dateStr.replace("T", " ");
      // 解决ios系统无法格式化问题
      dateStr = dateStr.replace(/-/g, "/");
      date = new Date(dateStr);
    }
  }
  return date;
};

export default {
  teFmt
};