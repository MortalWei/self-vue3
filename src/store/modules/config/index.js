/**
 * @author Mortal
 * @date 2021/4/1
 * */

import { ref } from "vue";
import cacheConfig from "@/store/modules/config/api/cacheConfig";
// import api from "./api";

const namespace = "config";
const r = ac => `store/${namespace}/${ac}`;

export const INIT_CONFIG = r("INIT_CONFIG");
export const GETTER_CONFIG = r("GETTER_CONFIG");

const storeModel = (cacheConfig) => {
  const conf = ref(cacheConfig);

  /**
   * 初始化配置信息
   * @param c 配置信息
   */
  const initConfig = (c) => {
    conf.value = c;
  };

  return {
    [INIT_CONFIG]: initConfig,
    [GETTER_CONFIG]: conf
  };
};

export default storeModel(cacheConfig);