/*
 * @author Mortal
 * @date 2021/3/15
 */
import comm from "@/plugins/comm";

const date = () => {
  let now = new Date();
  return comm.teFmt(now);
};

export default {
  date
};