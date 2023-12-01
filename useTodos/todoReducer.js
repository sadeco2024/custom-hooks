


export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "[TODO] Add todo":
      // throw new Error('La action TODO, no esta implementada')
      return [...initialState, action.payload];
    case "[TODO] Remove todo":
      return initialState.filter( todos => todos.id !== action.payload)
      case "[TODO] Toggle todo":
        return initialState.map( todo => {
            if (todo.id == action.payload) {
                return {
                    ...todo,
                    done: !todo.done
                }
            }
            return todo;
        })
  
    default:
      return initialState;
  }
};
