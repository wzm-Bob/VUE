
import { REDUCE_COUNT } from "./mutation_type";
    export default {
    // type名是reduceCount 回调函数是大括号里的 接受第一个参数是state 必须是同步函数
    [REDUCE_COUNT](state, payload, options) {
        state.num+=payload.amount
    }
}
