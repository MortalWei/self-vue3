/**
 * @author Mortal
 * @date 2021/3/30
 * */
import { reactive } from "vue";

const namespace = "operate";
const r = ac => `store/${namespace}/${ac}`;

export const GETTER_OPERATE = r("GETTER_OPERATE");
export const CHANGE_OPERATE = r("CHANGE_OPERATE");
export const CHANGE_OPERATE_MSG = r("CHANGE_OPERATE_MSG");
export const INIT_OPERATE = r("INIT_OPERATE");
export const CLEAN_OPERATE = r("CLEAN_OPERATE");

const storeModel = () => {
  /**
   * 操作信息
   // * @type {ToRef<{}>}
   */
  const operate = reactive({
    type: -1,
    step: -1,
    msg: ""
  });

  /**
   * 初始化操作信息
   */
  const initOperate = (type, step, msg) => {
    operate.type = type;
    operate.step = step;
    operate.msg = msg;
  };

  /**
   * 清空操作信息
   */
  const cleanOperate = () => {
    operate.type = -1;
    operate.step = -1;
    operate.msg = "";
  };

  /**
   * 更新操作步骤
   * @param step 操作步骤
   * */
  const changeOperate = (step) => {
    operate.step = step;
  };

  /**
   * 更新操作提示
   * @param msg
   */
  const changeOperateMsg = (msg) => {
    operate.msg = msg;
  };

  return {
    [GETTER_OPERATE]: operate,
    [CHANGE_OPERATE]: changeOperate,
    [CHANGE_OPERATE_MSG]: changeOperateMsg,
    [INIT_OPERATE]: initOperate,
    [CLEAN_OPERATE]: cleanOperate
  };
};

export default storeModel();