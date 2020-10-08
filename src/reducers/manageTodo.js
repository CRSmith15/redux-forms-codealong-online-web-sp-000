export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);

  return state;
}

state = {
  todos: [
    { text: 'buy groceries'}.
    { text: 'watch netflix'}
  ]
}
