/**
 * @author Mortal
 * @date 2021/3/30
 * */
import _ from "lodash";

const contexts = require.context("./modules", true);
let modules = {};
contexts.keys().forEach(key => {
  if (_.includes(key, "index.js") && !_.includes(key, "api")) {
    const module = contexts(key).default;
    Object.assign(modules, module);
  }
});

export default modules;