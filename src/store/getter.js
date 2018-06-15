
export default {
    doneTodos: state => {
      return state.count.filter(todo => todo>25)
    }
}

