const onSave = (state, payload) => {
  
  if(payload === '') {
    return state
  }

  const cloneTodoList = [...state.todoList]

  cloneTodoList.push(payload)

  return {
    ...state, // todoList: [], todo: '', completedTodoList: []
    todo: '',
    todoList: cloneTodoList
  }
}

const deleteTodo = (state, index) => {
  const {todoList} = state
  const cloneTodoList = [...todoList]
  
  cloneTodoList.splice(index, 1)

  return {
    ...state,
    todoList: cloneTodoList,
  }
}

// const doneTodo = (index) => {
//   console.log('index:', index)
  
//   const doneTodo = todoList[index]
  
//   // add into doneTodoList
//   const cloneDoneTodoList = [...doneTodoList]
//   cloneDoneTodoList.push(doneTodo)
//   setDoneTodoList(cloneDoneTodoList)
  
//   // delete from original list
//   deleteTodo(index)
// }

// const deleteDoneTodo = (index) => {
//   console.log('get index: ', index)
//   const cloneTodoList = [...doneTodoList]
  
//   cloneTodoList.splice(index, 1)

//   setDoneTodoList(cloneTodoList)
// }

// const editTodo = (index) => {
//   // get the clicked value and set to todo variable
//   setTodo(todoList[index])
//   // delete from todo list
//   deleteTodo(index)
// }

export const landingPageState = {
  todo: '',
  todoList: [],
  doneTodoList: []
}

export const landingPageReducer = (state, action) => {
  
  switch (action.type) {
    case 'TODO': {
      return {
        ...state, // spread operator
        todo: action.payload.todo
      }
    }
    case 'SAVE': {
      return onSave(state, action.payload)
    }
    case 'DELETE_TODO': {
      return deleteTodo(state, action.payload.arrIndex)
    }
    default:
      return true;
  }
}